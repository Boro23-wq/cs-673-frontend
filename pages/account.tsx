import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'
import { Case, User } from 'database'
import { Avatar, Button, Card, Spinner } from 'flowbite-react'
import fetchJson from 'lib/fetchJson'
import moment from 'moment'
import Link from 'next/link'
import { Upload, UploadSimple } from 'phosphor-react'
import { useState } from 'react'
import useSWR from 'swr'

// ! Please do not touch the existing code (still in works)
const Account = () => {
  const [toggleUpload, setToggleUpload] = useState<boolean>(false)
  const [selectedFile, setSelectedFile] = useState<any>({})

  const { data: user } = useSWR<User>(`/api/profile`, fetchJson)
  const { data: cases } = useSWR<Case[]>(`/api/casemanagers/cases`, fetchJson)

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

      <div className="mt-4 flex flex-col md:flex-row">
        <Card className="h-fit sm:mr-0 md:mr-4 lg:mr-4 min-w-fit">
          <div className=" items-center justify-between">
            <h5 className="text-xl font-bold leading-none text-gray-900">
              User Information
            </h5>
          </div>
          <div>
            <ul className="divide-y divide-gray-200">
              <li className="py-1 sm:py-4">
                {user ? (
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0">
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
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900">
                        {user?.firstName + ' ' + user?.lastName}
                      </p>
                      <p className="truncate text-sm text-gray-500">
                        {user?.email}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-xs font-light text-gray-400 italic">
                      {moment(user?.createdAt).format('ll')}
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
        <Card className="bg-white rounded-md w-full mt-4 md:mt-0">
          <h4 className="text-xl text-gray-900 font-bold">
            Contact Information
          </h4>
          <ul className=" text-gray-700">
            <li className="flex border-b py-2 border-gray-100">
              <span className="font-bold w-24">Joined:</span>
              <span className="text-gray-500">
                {moment(user?.createdAt, 'YYYYMMDD').fromNow()}
              </span>
            </li>
            <li className="flex border-b border-gray-100 py-2">
              <span className="font-bold w-24">Mobile:</span>
              <span className="text-gray-500">{user?.phone}</span>
            </li>
            <li className="flex py-2">
              <span className="font-bold w-24">Email:</span>
              <span className="text-gray-500">{user?.email}</span>
            </li>
          </ul>
        </Card>
      </div>

      <Card className="bg-white rounded-md mt-4">
        <h4 className="text-xl text-gray-900 font-bold">Cases log</h4>
        <div className="relative px-4">
          <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

          {cases?.slice(0, 4).map((patientCase, index) => (
            <div key={index} className="flex items-center w-full my-6 -ml-1.5">
              <div className="w-1/12 z-10">
                <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
              </div>
              <div className="w-11/12">
                <p className="text-sm">
                  Case{' '}
                  <a href="#" className="text-blue-600 font-bold">
                    #{patientCase.id}
                  </a>{' '}
                  was created. It is considered{' '}
                  {patientCase?.severityLevel.split('-')[1].toLowerCase()}. The
                  case is under the {patientCase?.categoryTitle.toLowerCase()}{' '}
                  (top-level) category.
                </p>
                <p className="text-xs text-gray-500">
                  {moment(user?.createdAt, 'YYYYMMDD').fromNow()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link className="text-gray-500 invisible sm:visible" href="/cases">
          View all cases &rarr;
        </Link>
      </Card>
    </Layout>
  )
}

export default Account
