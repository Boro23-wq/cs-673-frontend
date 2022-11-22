import { CustomDeleteModal } from '@/components/CustomDeleteModal'
import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'
import { Case, Milestone, Note, Solution } from 'database'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useSWR from 'swr'

// minified version
import {
  CaseBasicDetailTabData,
  CaseNotesTabData,
  MilestonesTabData,
  SolutionsTabData
} from '@/components/CaseDetailsTabData'
import { Button, Spinner, Tabs } from 'flowbite-react'
import fetchJson from 'lib/fetchJson'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

const CaseDetailPage = () => {
  const [closeCaseModal, setCloseCaseModal] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const router = useRouter()
  const caseId = router.query.id

  const notifyError = (description: string) => toast.error(description)
  const notifySuccess = (description: string) => toast.success(description)

  const { data: caseBasicData, mutate: mutateCaseBasicData } = useSWR<
    Case | any
  >(`/api/cases/${caseId}/detail`, fetchJson)

  const { data: caseNotesData } = useSWR<Note | any>(
    `/api/cases/${caseId}/casenotes`,
    fetchJson
  )
  const { data: caseMilestonesData } = useSWR<Milestone | any>(
    `/api/cases/${caseId}/milestones`,
    fetchJson
  )
  const { data: caseSolutionsData } = useSWR<Solution | any>(
    `/api/cases/${caseId}/solutions`,
    fetchJson
  )

  const handleClosingCase = async () => {
    setLoading(true)
    const requestOptions: RequestInit = {
      method: 'POST'
    }

    const response = await fetch(`/api/cases/${caseId}/close`, requestOptions)

    if (response.ok) {
      setLoading(false)

      // ? optimistically set the status to inactive...
      await mutateCaseBasicData((data: Case) => {
        return {
          ...data,
          status: 'Inactive'
        }
      })

      notifySuccess(await response.json())
    } else {
      notifyError("Case couldn't be closed. Please try again later")
    }

    setCloseCaseModal(false)
  }

  return (
    <Layout>
      <NextHead
        title="Case Detail - Carely"
        metaName="Carely"
        metaContent="Display important components of the case."
      />

      <div className="mb-4 flex justify-between">
        <div className="flex flex-col">
          <h1 className="max-w-2xl mb-2 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
            Case - #{caseBasicData && caseBasicData?.id}
          </h1>
          <p className="text-gray-400 italic">
            Case created on{' '}
            {caseBasicData && caseBasicData?.createdAt?.split('T')[0]}
          </p>
        </div>
        <div className="flex">
          <Button
            disabled={caseBasicData && caseBasicData?.status === 'Inactive'}
            onClick={() => setCloseCaseModal(true)}
            color="failure"
            className="disabled:hover:bg-red-700">
            Close case
          </Button>
        </div>
      </div>

      {caseBasicData &&
      caseNotesData &&
      caseMilestonesData &&
      caseSolutionsData ? (
        <Tabs.Group aria-label="Tabs with icons" style="underline">
          <Tabs.Item active={true} title="Basic information">
            <CaseBasicDetailTabData caseBasicDetail={caseBasicData} />
          </Tabs.Item>
          <Tabs.Item title="Case Notes">
            <CaseNotesTabData casenotes={caseNotesData} />
          </Tabs.Item>
          <Tabs.Item title="Milestones">
            <MilestonesTabData milestones={caseMilestonesData} />
          </Tabs.Item>
          <Tabs.Item title="Solutions">
            <SolutionsTabData solutions={caseSolutionsData} />
          </Tabs.Item>
        </Tabs.Group>
      ) : (
        <Spinner />
      )}

      <CustomDeleteModal
        entity="case"
        active={closeCaseModal}
        type="failure"
        description={`Are you sure you want to close case #${
          caseBasicData && caseBasicData?.id
        }?`}
        onClose={() => setCloseCaseModal(false)}
        onCaseClose={async () => await handleClosingCase()}
        loading={loading}
      />

      <ToastContainer />
    </Layout>
  )
}

export default CaseDetailPage
