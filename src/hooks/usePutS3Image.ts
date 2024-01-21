// useS3Upload.ts
import { useState } from 'react'
import { S3Client, PutObjectCommand, PutObjectTaggingCommand } from '@aws-sdk/client-s3'
import { Tags } from '@/types'

const client = new S3Client({
  region: import.meta.env.VITE_AWS_S3_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_S3_ACCESSKEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_S3_SECRET_ACCESSKEY_ID,
  },
})
const usePutS3Image = () => {
  const [uploadStatus, setUploadStatus] = useState<{
    status: 'idle' | 'uploading' | 'success' | 'error'
    error?: Error
  }>({ status: 'idle' })

  const uploadImageToS3 = async (
    key: string,
    file: ArrayBuffer | Uint8Array | Blob | string,
    tags?: Tags[]
  ) => {
    setUploadStatus({ status: 'uploading' })
    try {
      const uploadCommand = new PutObjectCommand({
        Bucket: 'react-bucket2',
        Key: key,
        Body: file,
      })
      await client.send(uploadCommand)

      const tagCommand = new PutObjectTaggingCommand({
        Bucket: 'react-bucket2',
        Key: key,
        Tagging: { TagSet: tags },
      })

      await client.send(tagCommand)

      setUploadStatus({ status: 'success' })
    } catch (error) {
      if (error instanceof Error) {
        setUploadStatus({ status: 'error', error })
      }
    }
  }

  return { uploadImageToS3, uploadStatus }
}

export default usePutS3Image
