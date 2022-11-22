import { Case, Milestone, Note, Solution } from 'database'
import { Timeline } from 'flowbite-react'
import { NotesIcon } from './Icons'

export const CaseBasicDetailTabData = ({
  caseBasicDetail
}: {
  caseBasicDetail: Case | undefined
}) => {
  return (
    <>
      {/* Status */}
      <div className="mb-6">
        <h4 className="font-bold text-lg"> Status</h4>
        <p className="mt-1 text-gray-400">{caseBasicDetail?.status}</p>
      </div>
      {/* Patient */}
      <div className="mb-6">
        <h4 className="font-bold text-lg">Patient</h4>
        <p className="mt-1 text-gray-400">{caseBasicDetail?.patientEmail}</p>
      </div>
      {/* Doctor */}
      <div className="mb-6">
        <h4 className="font-bold text-lg">Assigned to </h4>
        <p className="mt-1 text-gray-400">{caseBasicDetail?.doctorEmail}</p>
      </div>
      {/* Case manager */}
      <div className="mb-6">
        <h4 className="font-bold text-lg">Managed by</h4>
        <p className="mt-1 text-gray-400">
          {caseBasicDetail?.caseManagerEmail}
        </p>
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
          <Timeline key={index}>
            <Timeline.Item>
              <Timeline.Point className="bg-red-800" icon={NotesIcon} />
              <Timeline.Content>
                <Timeline.Time>{note?.createdAt?.split('T')[0]}</Timeline.Time>
                <Timeline.Title>Case Note - {note.id}</Timeline.Title>
                <Timeline.Body>{note?.comment}</Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
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
                  {milestone?.createdAt?.split('T')[0]}
                </Timeline.Time>
                <Timeline.Title>Milestone - {milestone?.id}</Timeline.Title>
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
