import { HeroFeaturesSection } from '@/components/HeroFeaturesSection'
import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'
import { Button, Label, Select, Spinner, TextInput } from 'flowbite-react'
import fetchJson, { FetchError } from 'lib/fetchJson'
import useUser from 'lib/useUser'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

// minified version
import 'react-toastify/dist/ReactToastify.min.css'

const Login: NextPage = () => {
  const [errorObj, setErrorObj] = useState<FetchError | any>({})
  const [role, setRole] = useState('casemanagers')
  const [loading, setLoading] = useState(false)

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
    setLoading(true)

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

    setLoading(false)
    console.log(errorObj)
  }

  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center">
        <NextHead
          title="Login - Carely"
          metaName="Carely"
          metaContent="Login to immediately access our products."
        />

        <main>
          <div className="flex">
            <div className="flex-col">
              <div className="max-w-6xl">
                <h1 className="px-2 mb-4 text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-gray-900 lg:text-6xl">
                  The only{' '}
                  <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                    care
                  </mark>{' '}
                  co-ordination and case management platform you need.
                </h1>
              </div>
              <div className="max-w-3xl">
                <p className="px-2 text-lg font-normal text-gray-500 lg:text-xl">
                  Here at{' '}
                  <b>
                    <i>Carely</i>
                  </b>{' '}
                  we focus on providing effective care management by helping
                  patients improve clinical values, reduce unnecessary care, and
                  reduce health care costs.
                </p>
              </div>
            </div>

            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                src="/hero.svg"
                alt="hero image"
                width={500}
                height={500}
              />
            </div>
          </div>

          <div className="mt-10">
            <h4 className="text-2xl font-bold px-2 mb-4">
              Login to access the platform
            </h4>

            <form
              onSubmit={handleLoginSubmit}
              className="max-w-full px-2 flex flex-col gap-4">
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
                      <Link
                        href="/legal/privacy-policy"
                        className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                        Privacy Policy
                      </Link>
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
              <Button disabled={loading} type="submit">
                {loading && <Spinner className="mr-2" size="sm" />}
                Log in
              </Button>
            </form>
          </div>
          <ToastContainer />
        </main>
        <HeroFeaturesSection />
      </div>
    </Layout>
  )
}

export default Login
