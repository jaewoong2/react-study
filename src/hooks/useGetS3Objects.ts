import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
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
  const urls = await Promise.all(
    response.Contents?.map(async (item) => {
      const url = await getSignedUrl(
        client,
        new GetObjectCommand({
          Bucket: 'react-bucket2',
          Key: item.Key,
        }),
        { expiresIn: 3600 }
      ) // URL expires in 1 hour
      return url
    }) ?? []
  )
  return urls

  return response
}

const useGetS3Objects = () => {
  const [state, setState] = useState<unknown>(null)

  useEffect(() => {
    getBuckets().then((res) => {
      setState(res)
      console.log(res)
    })
  }, [])

  return state
}

export default useGetS3Objects
