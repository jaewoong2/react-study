import { Tags } from '@/types'
import { useState } from 'react'

const useFileUpload = (
  callback?: (key: string, file: ArrayBuffer | Uint8Array | Blob | string, tags?: Tags[]) => void
) => {
  const [file, setFile] = useState<File | null | undefined>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const upload = async ($file: File | null, tags?: Tags[]) => {
    setIsUploading(true)
    setFile($file)
    setError(null)
    try {
      if (!$file) {
        throw new Error('파일이 업로드 되지 않았습니다.')
      }
      if (callback) {
        if ($file) {
          const reader = new FileReader()
          reader.onload = async (e) => {
            const content = e.target?.result
            if (typeof content === 'string' || content instanceof ArrayBuffer) {
              callback($file.name, content, tags)
            }
          }
          reader.readAsArrayBuffer($file)
        }
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message)
      } else {
        setError('업로드 중에 오류가 생겼습니다.')
      }
    } finally {
      setIsUploading(false)
    }
  }

  return {
    file,
    isUploading,
    clientError: error,
    upload,
  }
}

export default useFileUpload
