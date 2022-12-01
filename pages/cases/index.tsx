import CasesTable from '@/components/CasesTable'
import { CustomSearch } from '@/components/CustomSearch'
import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'
import { Case } from 'database'
import { Button, Dropdown } from 'flowbite-react'
import fetchJson from 'lib/fetchJson'
import { useRouter } from 'next/router'
import { Plus } from 'phosphor-react'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

const Cases = () => {
  const router = useRouter()
  const { data } = useSWR<Case[]>(`/api/casemanagers/cases`, fetchJson)

  const [cases, setCases] = useState<Case[]>([])
  const [filteredCases, setFilteredCases] = useState<Case[]>([])
  const [casesBySeverity, setCasesBySeverity] = useState<Case[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [searchInput, setSearchInput] = useState<string>('')

  const filterItemsBySeverity = (severity: string) => {
    if (severity !== 'Clear') {
      const items = cases.filter((c) => c.severityLevel === severity)
      if (items.length === 0) {
        return
      }
      setCasesBySeverity(items)
      return
    }
    setCasesBySeverity([])
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)

    const filteredItems = cases.filter((caseItem) =>
      caseItem.subject.toLowerCase().includes(e.target.value.toLowerCase())
    )

    setFilteredCases(filteredItems)
  }

  useEffect(() => {
    if (data) {
      setCases(data)
      setLoading(false)
    }
  }, [data])

  return (
    <Layout>
      <NextHead
        title="Cases - Carely"
        metaName="Carely"
        metaContent="All the cases."
      />
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
        All Cases
      </h1>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        {/* TODO: Implement search feature  */}

        <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
          <Button onClick={async () => await router.push('/cases/new')}>
            Add new case <Plus className="ml-2" size={14} />
          </Button>
        </div>

        <div className="flex sm:mt-4 md:mt-0 lg:mt-0">
          {/* Filter cases by severity */}
          <Dropdown label="Severity" color="gray">
            <Dropdown.Header>
              <span className="block text-sm text-gray-400">
                Filter cases by severity
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => filterItemsBySeverity('1-Critical')}>
              1-Critical
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterItemsBySeverity('2-Major')}>
              2-Major
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterItemsBySeverity('3-Moderate')}>
              3-Moderate
            </Dropdown.Item>
            <Dropdown.Item onClick={() => filterItemsBySeverity('4-Low')}>
              4-Low
            </Dropdown.Item>

            <Dropdown.Divider />

            <Dropdown.Item onClick={() => filterItemsBySeverity('Clear')}>
              Clear
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <CustomSearch handleSearch={handleSearch} searchFor="cases by subject" />

      <p className="mb-5 text-gray-500">
        List of all the active and inactive cases.
      </p>

      {searchInput ? (
        <CasesTable
          cases={filteredCases}
          isDashboard={false}
          loading={loading}
        />
      ) : (
        <CasesTable
          cases={casesBySeverity.length > 0 ? casesBySeverity : cases}
          isDashboard={false}
          loading={loading}
        />
      )}
    </Layout>
  )
}

export default Cases
