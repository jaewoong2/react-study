import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3'
import { useEffect, useState } from 'react'

const client = new S3Client({
  region: import.meta.env.VITE_AWS_S3_REGION,
  credentials: {
    accessKeyId: import.meta.env.VITE_AWS_S3_ACCESSKEY_ID,
    secretAccessKey: import.meta.env.VITE_AWS_S3_SECRET_ACCESSKEY_ID,
  },
})

const getBuckets = async () => {
  const command = new ListObjectsV2Command({ Bucket: 'react-bucket2' })
  const response = await client.send(command)
  return response.Contents?.map(({ Key }) => `https://image.job-bot.site/${Key}`)
}

const useGetS3Objects = () => {
  const [state, setState] = useState<string[] | null>(null)

  useEffect(() => {
    getBuckets().then((res) => {
      if (res) {
        setState(res)
      }
    })
  }, [])

  return state
}

export default useGetS3Objects
