import { Button, Label, Select, TextInput } from 'flowbite-react'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Login: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Carely - Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="max-w-4xl">
          <h1 className="px-2 mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 lg:text-6xl dark:text-white">
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
            we focus on providing effective care management by helping patients
            improve clinical values, reduce unnecessary care, and reduce health
            care costs.
          </p>
        </div>

        <form className="max-w-4xl px-2 mt-10 flex flex-col gap-4">
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
              // icon={HiMail}
              helperText={
                <React.Fragment>
                  We’ll never share your details. Read our{' '}
                  <a
                    href="/forms"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Privacy Policy
                  </a>
                  .
                </React.Fragment>
              }
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="identity" value="Choose your role" />
            </div>
            <Select id="resource-pool" required={true}>
              <option>Case manager</option>
              <option>Doctor</option>
              <option>Medical Practitioner</option>
            </Select>
          </div>
          <Button type="submit">Log in</Button>
        </form>
      </main>
    </div>
  )
}

export default Login
