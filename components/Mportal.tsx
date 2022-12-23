import Modal from 'components/Modal'
import Link from 'next/link'
import { Fragment, useState } from 'react'

export const Mportal = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <section>
      <div
        suppressHydrationWarning={true}
        className="Relative left-20 px-2 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-20 section1  -z-10">
        <main>
          <body>
            <h1 className="font-bold text-xl cursor-pointer">
              Practice management portal:
            </h1>
            <br></br>
            <div className="container row ml-10 flex items-baseline space-x-4">
              <br></br>
              <Fragment>
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Create schedule
                </button>
                <Modal
                  isVisible={showModal}
                  onClose={() => setShowModal(false)}
                />
              </Fragment>
              <button
                type="button"
                data-modal-toggle="popup-modal"
                className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                <Link href="/practice" passHref>
                  Current Schedule
                </Link>
              </button>
            </div>
          </body>
        </main>
      </div>
    </section>
  )
}
