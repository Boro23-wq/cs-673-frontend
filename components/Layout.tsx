import { navLinksAuthorized } from 'lib/navLinksAuthorized'
import { navLinksUnauthorized } from 'lib/navLinksUnauthorized'
import React from 'react'
import CustomNavbar from './CustomNavbar'
import Footer from './Footer'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <CustomNavbar
        authorized={navLinksAuthorized}
        unauthorized={navLinksUnauthorized}
      />
      <div className="flex flex-col h-screen justify-between">
        <div className="flex flex-col">
          <section className="bg-white dark:bg-black ">
            <div className="grid max-w-screen-xl px-4 sm:px-4 lg:px-4 py-8 mx-auto lg:gap-0 xl:gap-0 lg:py-8 lg:grid-cols-1">
              {children}
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}
