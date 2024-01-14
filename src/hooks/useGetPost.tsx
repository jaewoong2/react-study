import axios from 'axios'
import { useEffect, useState } from 'react'

const fetcher = (id: number) => {
  return axios.request<Post>({ method: 'GET', url: `https://koreanjson.com/posts/${id}` })
}

const sleep = () =>
  new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, 1000)
  })

type Post = {
  id: number
  title: string
  content: string
  createdAt: string
  updatedAt: string
  UserId: number
}

const useGetPost = (id: number) => {
  const [post, setPost] = useState<Post | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState<any>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    setPost(null)
    setIsLoading(false)
    setIsError(false)
    setError(null)
    setIsSuccess(false)
  }, [])

  const fetchData = async () => {
    await sleep()
    try {
      const res = await fetcher(id)
      setPost(res.data)
      setIsSuccess(true)
      setIsLoading(false)
    } catch (err) {
      if (err) {
        setError(err)
      }
      setIsError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [id])

  return {
    post,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}

export default useGetPost
