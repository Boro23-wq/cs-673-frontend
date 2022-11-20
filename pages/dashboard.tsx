import AppointmentsTable from '@/components/AppointmentsTable'
import CasesTable from '@/components/CasesTable'
import DashboardCard from '@/components/DashboardCard'
import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'
import { Case } from 'database'
import { Button } from 'flowbite-react'
import fetchJson from 'lib/fetchJson'
import useUser from 'lib/useUser'
import Link from 'next/link'
import { Plus } from 'phosphor-react'
import useSWR from 'swr'

const Dashboard = () => {
  const { user } = useUser({
    redirectTo: '/login'
  })

  const { data: cases } = useSWR<Case[]>(`/api/casemanagers/cases`, fetchJson)

  // ? Function to find number of active cases
  const activeCases = cases?.filter((c) => {
    if (c.status === 'Active') {
      return true
    }

    return false
  }).length

  // ? Function to find critical cases
  const hasCriticalCase = cases?.filter((c: Case) => {
    if (c.severityLevel === '1-Critical') {
      return true
    } else {
      return false
    }
  }).length

  return (
    <Layout>
      <NextHead
        title="Dashboard - Carely"
        metaName="Carely"
        metaContent="Display metrics and details regarding appointments, and cases."
      />
      {user && (
        <>
          {/* Heading section */}
          <div className="flex flex-col md:flex-row justify-between">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
              Welcome, {user?.firstName + ' ' + user?.lastName}.
            </h1>
            <div className="flex flex-wrap gap-2">
              <Button>
                Add new case <Plus className="ml-2" size={14} />
              </Button>
              <Button>
                Add new patient <Plus className="ml-2" size={14} />
              </Button>
            </div>
          </div>

          {/* Cards section */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mb-4">
            <DashboardCard
              title="Appointments"
              count={7}
              category={{ type: 'Upcoming appointments', value: 2 }}
              description="Count of all upcoming and previous appointments."
            />
            <DashboardCard
              title="Patients"
              count={10}
              category={{ type: 'Active', value: 7 }}
              description="Count of all active and inactive patients."
            />
            <DashboardCard
              title="Cases"
              count={cases?.length}
              category={{ type: 'Active', value: activeCases }}
              description="Count of all active and inactive cases."
            />
          </div>

          {/* Appointments table section */}
          <div className="mt-6">
            <div className="flex justify-between">
              <h1 className="mb-4 flex items-center text-3xl font-extrabold ">
                Appointments
                <span className="bg-blue-50 text-blue-600 text-xs font-semibold mr-2 px-2 py-0.5 rounded ml-2">
                  UPCOMING
                </span>
              </h1>
              <Link
                className="text-gray-500 invisible sm:visible"
                href="/appointments">
                View All &rarr;
              </Link>
            </div>
            <p className="mb-5 text-gray-500">
              List of appointments sorted by date.
            </p>
          </div>
          <AppointmentsTable />

          {/* Critical cases table section */}
          <div className="mt-12">
            <div className="flex justify-between">
              <h1 className="mb-4 flex items-center text-3xl font-extrabold ">
                Cases
                <span className="bg-red-50 text-red-600 text-xs font-semibold mr-2 px-2 py-0.5 rounded ml-2">
                  CRITICAL
                </span>
              </h1>

              <Link
                className="text-gray-500 invisible sm:visible"
                href="/cases">
                View All &rarr;
              </Link>
            </div>
            <p className="mb-5 text-gray-500">
              List of critical cases sorted by date.
            </p>
          </div>
          <CasesTable
            cases={cases}
            hasCriticalCase={hasCriticalCase}
            isDashboard={true}
          />
        </>
      )}
    </Layout>
  )
}

export default Dashboard
