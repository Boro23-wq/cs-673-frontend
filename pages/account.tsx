import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'
import { User } from 'database'
import { Avatar, Button, Card, Spinner } from 'flowbite-react'
import fetchJson from 'lib/fetchJson'
import { Upload, UploadSimple } from 'phosphor-react'
import { useState } from 'react'
import useSWR from 'swr'

const Account = () => {
  const [toggleUpload, setToggleUpload] = useState<boolean>(false)
  const [selectedFile, setSelectedFile] = useState<any>({})

  const { data: user } = useSWR<User>(`/api/profile`, fetchJson)

  const showUpload = () => {
    setToggleUpload(!toggleUpload)
  }

  const onFileChange = (e: any) => {
    setSelectedFile(e.target.files[0])
  }

  const handleFileUpload = async (e: any) => {
    const formData = new FormData()

    formData.append('profile', selectedFile, selectedFile.name)

    const requestOptions: RequestInit = {
      method: 'POST',
      body: formData
      // body: formData
    }

    await fetch(`/api/casemanagers/image`, requestOptions)
  }

  return (
    <Layout>
      <NextHead
        title="Dashboard - Carely"
        metaName="Carely"
        metaContent="Display metrics and details regarding appointments, and cases."
      />
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl">
        Personal Account
      </h1>

      <div className="max-w-sm mt-4">
        <Card>
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900">
              User Information
            </h5>
          </div>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              <li className="py-1 sm:py-4">
                {user ? (
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
                      {user?.profileUrl ? (
                        <div className="flex flex-wrap gap-2">
                          <Avatar
                            img={user?.profileUrl}
                            rounded={true}
                            bordered={true}
                            alt="User avatar"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          <Avatar
                            placeholderInitials={
                              user &&
                              user?.firstName?.charAt(0) +
                                user?.lastName.charAt(0)
                            }
                            alt="User avatar"
                          />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900">
                        {user?.firstName + '' + user?.lastName}
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        {user?.email}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-xs font-light text-gray-400 italic">
                      {user?.createdAt.split('T')[0]}
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <Spinner aria-label="Loading spinner." />
                  </div>
                )}
              </li>
            </ul>
          </div>

          <Button onClick={showUpload}>
            <Upload size={20} className="mr-4" />
            Change picture
          </Button>

          {toggleUpload && (
            <>
              <label
                className="block mt-2 text-sm font-medium text-gray-900"
                htmlFor="file_input">
                Upload file
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                aria-describedby="file_input_help"
                id="file_input"
                accept="image/png, image/jpeg, image/jpg, image/webp"
                type="file"
                // ref={profilePictureRef}
                onChange={onFileChange}
              />
              <p
                className="text-xs text-gray-500 dark:text-gray-300"
                id="file_input_help">
                Only upload image files (SVG, PNG, or JPG&apos;s). Max size is
                1MB.
              </p>

              <Button
                // disabled={JSON.stringify(selectedFile) === '{}'}
                onClick={handleFileUpload}>
                <UploadSimple size={20} className="mr-4" />
                Upload
              </Button>
            </>
          )}
        </Card>
      </div>
    </Layout>
  )
}

export default Account
