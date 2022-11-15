import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'
import { Button, Label, Select, TextInput } from 'flowbite-react'
import fetchJson, { FetchError } from 'lib/fetchJson'
import useUser from 'lib/useUser'
import type { NextPage } from 'next'
import { Fragment, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

// minified version
import 'react-toastify/dist/ReactToastify.min.css'

const Login: NextPage = () => {
  const [errorObj, setErrorObj] = useState<FetchError | any>({})
  const [role, setRole] = useState('casemanagers')

  const notifyError = (description: string) => toast.error(description)
  const notifySuccess = () => toast.success('Logging in...')

  // here we just check if user is already logged in and redirect to profile
  const { mutateUser } = useUser({
    redirectTo: '/dashboard',
    redirectIfFound: true
  })

  const handleRoleChange = (event: any) => {
    setRole(event.target.value)
  }

  const handleLoginSubmit = async (event: any) => {
    event.preventDefault()

    const body = {
      email: event.target.email.value,
      role
    }

    try {
      mutateUser(
        await fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        })
      )

      notifySuccess()
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorObj(error.data.message)
        notifyError(error.data.message)
      } else {
        console.error('An unexpected error happened:', error)
      }
    }

    console.log(errorObj)
  }

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center">
        <NextHead
          title="Carely - Login"
          metaName="Carely"
          metaContent="Login to immediately access our products."
        />

        <main>
          <div className="max-w-4xl">
            <h1 className="px-2 mb-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-gray-900 lg:text-6xl dark:text-white">
              The only{' '}
              <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                care
              </mark>{' '}
              co-ordination and case management platform you need.
            </h1>
          </div>
          <div className="max-w-4xl">
            <p className="px-2 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Here at{' '}
              <b>
                <i>Carely</i>
              </b>{' '}
              we focus on providing effective care management by helping
              patients improve clinical values, reduce unnecessary care, and
              reduce health care costs.
            </p>
          </div>

          <form
            onSubmit={handleLoginSubmit}
            className="max-w-4xl px-2 mt-10 flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@carely.com"
                required={true}
                addon="@"
                helperText={
                  <Fragment>
                    We’ll never share your details. Read our{' '}
                    <a
                      href="/forms"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                      Privacy Policy
                    </a>
                    .
                  </Fragment>
                }
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="identity" value="Choose your role" />
              </div>
              <Select
                onChange={(event) => handleRoleChange(event)}
                value={role}
                id="resource-pool"
                required={true}>
                <option value="none" disabled>
                  Choose your role
                </option>
                <option value="casemanagers">Case manager</option>
                <option value="doctors">Doctor</option>
              </Select>
            </div>
            <Button type="submit">Log in</Button>
          </form>
          <ToastContainer />
        </main>
      </div>
    </Layout>
  )
}

export default Login
