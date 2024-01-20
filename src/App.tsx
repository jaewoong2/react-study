/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import useTextInput from './hooks/useTextInput'
import useFileUpload from './hooks/useUploadImage'
import useGetS3Objects from './hooks/useGetS3Objects'
import usePutS3Image from './hooks/usePutS3Image'

const App = () => {
  useGetS3Objects()
  const [title, , onChangeTitle] = useTextInput('')
  const [description, , onChangeDescription] = useTextInput('')
  const { uploadImageToS3 } = usePutS3Image()
  const { upload } = useFileUpload(uploadImageToS3)

  return (
    <main className="w-full h-full bg-gray-600">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex justify-center items-center flex-col p-20 gap-10 border w-fit rounded-xl">
          <div className="font-semibold text-lg w-[350px]">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">문의 제목</span>
              </div>
              <input
                id="문의"
                type="text"
                placeholder="이미지가 깨져요.."
                className="input input-bordered w-full max-w-xs"
                value={title}
                onChange={onChangeTitle}
              />
            </label>
          </div>
          <div className="font-semibold text-lg w-[350px]">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">문의 제목</span>
              </div>
              <textarea
                id="문의"
                placeholder="이 페이지 이미지가 깨져요.."
                className="textarea textarea-bordered w-full max-w-xs"
                rows={8}
                value={description}
                onChange={onChangeDescription}
              />
            </label>
          </div>
          <div className="font-semibold text-lg w-[350px]">
            <h2>문의 이미지 업로드</h2>
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  onChange={(e) => upload(e.target?.files?.[0] ?? null)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
