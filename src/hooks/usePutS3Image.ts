// useS3Upload.ts
import { useState } from 'react'
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

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

  const uploadImageToS3 = async (key: string, file: ArrayBuffer | Uint8Array | Blob | string) => {
    setUploadStatus({ status: 'uploading' })
    try {
      const command = new PutObjectCommand({
        Bucket: 'react-bucket2',
        Key: key,
        Body: file,
      })
      await client.send(command)
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
