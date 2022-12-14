import { Case, Milestone, Note, Solution, User } from 'database'
import { Accordion, Timeline } from 'flowbite-react'
import fetchJson from 'lib/fetchJson'
import moment from 'moment'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { NotesIcon } from './Icons'

export const CaseBasicDetailTabData = ({
  caseBasicDetail
}: {
  caseBasicDetail: Case | undefined
}) => {
  const [patientData, setPatientData] = useState<User>()
  const [doctorData, setDoctorData] = useState<User>()
  const [caseManagerData, setCaseManagerData] = useState<User>()

  const { data: patient } = useSWR<User>(
    `/api/patients?email=${caseBasicDetail?.patientEmail}`,
    fetchJson
  )

  const { data: doctor } = useSWR<User>(
    `/api/doctors?email=${caseBasicDetail?.doctorEmail}`,
    fetchJson
  )

  const { data: casemanager } = useSWR<User>(
    `/api/casemanagers?email=${caseBasicDetail?.caseManagerEmail}`,
    fetchJson
  )

  useEffect(() => {
    if (patient) {
      setPatientData(patient)
    }

    if (doctor) {
      setDoctorData(doctor)
    }

    if (casemanager) {
      setCaseManagerData(casemanager)
    }
  }, [patient, doctor, casemanager])

  return (
    <>
      {/* Detail */}
      <div className="mb-6 bg-slate-100 rounded-md px-4 py-2">
        <h4 className="font-bold text-lg">
          {moment(caseBasicDetail?.createdAt).format('ll')}
        </h4>
        <p className="mt-1 text-gray-400">
          Case was received and a receipt notice was sent.
        </p>
      </div>

      {/* Status */}
      <div className="bg-slate-50 rounded-md px-4 py-2 border-t-4 border-slate-500">
        <div className="mb-6">
          <h4 className="font-bold text-lg"> Status</h4>
          <p className="mt-1 text-gray-400">{caseBasicDetail?.status}</p>
        </div>

        {/* Accordion */}
        <div className="mb-6">
          <h4 className="font-bold text-lg mb-2">Patient</h4>
          <Accordion alwaysOpen={true}>
            <Accordion.Panel>
              <Accordion.Title>
                {patient?.firstName + ' ' + patient?.lastName}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <span className="font-bold">Email:</span>{' '}
                  {caseBasicDetail?.patientEmail}
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <span className="font-bold">Contact:</span>{' '}
                  {patientData?.phone}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>

        {/* Accordion */}
        <div className="mb-6">
          <h4 className="font-bold text-lg mb-2">Doctor</h4>
          <Accordion alwaysOpen={true}>
            <Accordion.Panel>
              <Accordion.Title>
                {doctor?.firstName + ' ' + doctor?.lastName}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <span className="font-bold">Email:</span>{' '}
                  {caseBasicDetail?.doctorEmail}
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <span className="font-bold">Contact:</span>{' '}
                  {doctorData?.phone}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>

        {/* Case manager */}
        {/* Accordion */}
        <div className="mb-6">
          <h4 className="font-bold text-lg mb-2">Case Manager</h4>
          <Accordion alwaysOpen={true}>
            <Accordion.Panel>
              <Accordion.Title>
                {casemanager?.firstName + ' ' + casemanager?.lastName}
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <span className="font-bold">Email:</span>{' '}
                  {caseBasicDetail?.caseManagerEmail}
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  <span className="font-bold">Contact:</span>{' '}
                  {caseManagerData?.phone}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>

        {/* Category */}
        <div className="mb-6">
          <h4 className="font-bold text-lg">Top-level category</h4>
          <p className="mt-1 text-gray-400">{caseBasicDetail?.categoryTitle}</p>
        </div>

        {/* Subject  */}
        <div className="mb-6">
          <h4 className="font-bold text-lg">Case subject</h4>
          <p className="mt-1 text-gray-400">{caseBasicDetail?.subject}</p>
        </div>

        {/* Severity  */}
        <div className="mb-6">
          <h4 className="font-bold text-lg">Case severity</h4>
          <p className="mt-1 text-gray-400">{caseBasicDetail?.severityLevel}</p>
        </div>

        <p className="text-gray-300 italic text-xs mt-10">
          Case was last modified on{' '}
          {moment(caseBasicDetail?.modifiedAt).format('ll')}
        </p>
      </div>
    </>
  )
}

export const CaseNotesTabData = ({
  casenotes
}: {
  casenotes: Note[] | undefined
}) => {
  return (
    <>
      {casenotes && casenotes.length > 0 ? (
        casenotes?.map((note, index) => (
          <div
            key={index}
            className="mb-5 max-w-fit bg-slate-50 px-6 py-4 rounded-md">
            <NotesIcon />
            <p className="text-md text-gray-500 mt-4">{note?.comment}</p>
            <p className="text-xs text-gray-400 italic flex justify-end">
              {moment(note?.createdAt).format('ll')}{' '}
            </p>
          </div>
        ))
      ) : (
        <p className="mt-1 text-gray-400">
          No case notes available for the case.
        </p>
      )}
    </>
  )
}

export const MilestonesTabData = ({
  milestones
}: {
  milestones: Milestone[] | undefined
}) => {
  return (
    <>
      {milestones && milestones.length > 0 ? (
        milestones?.map((milestone, index) => (
          <Timeline key={index}>
            <Timeline.Item>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>
                  {moment(milestone?.createdAt).format('ll')}
                </Timeline.Time>
                <Timeline.Title>Milestone ID - {milestone?.id}</Timeline.Title>
                <Timeline.Body>{milestone?.description}</Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        ))
      ) : (
        <p className="mt-1 text-gray-400">
          No milestones available for the case.
        </p>
      )}
    </>
  )
}

export const SolutionsTabData = ({
  solutions
}: {
  solutions: Solution[] | undefined
}) => {
  return (
    <>
      {solutions && solutions?.length > 0 ? (
        solutions?.map((solution, index) => (
          <div key={index} className="mb-6">
            <h4 className="font-bold text-lg"> Solution - {solution?.id}</h4>
            <p className="mt-1 text-gray-400">{solution?.investigation}</p>
            <p className="mt-1 text-gray-400">{solution?.resolution}</p>
          </div>
        ))
      ) : (
        <p className="mt-1 text-gray-400">
          No solutions available for the case.
        </p>
      )}
    </>
  )
}
