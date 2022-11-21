import { Case } from 'database'
import { Badge, Table } from 'flowbite-react'
import Link from 'next/link'
import { ArrowSquareOut } from 'phosphor-react'

const CasesTable = ({
  cases,
  hasCriticalCase,
  isDashboard,
  statusOption,
  severityOption
}: {
  cases: Case[] | undefined
  hasCriticalCase?: number | undefined
  isDashboard: boolean
  statusOption?: string
  severityOption?: string
}) => {
  return (
    <>
      <Table hoverable={true}>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Created on</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Subject</Table.HeadCell>
          <Table.HeadCell>Severity</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">View</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {isDashboard &&
            // ? Display only critical cases that are active (dashboard)
            cases?.map(
              (c: Case) =>
                c.severityLevel === '1-Critical' &&
                c.status === 'Active' && (
                  <Table.Row key={c.id} className="bg-white">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                      {c.id}
                    </Table.Cell>
                    <Table.Cell>{c.createdAt.split('T')[0]}</Table.Cell>
                    <Table.Cell>
                      <Badge className="w-max" color="success">
                        {c.status}
                      </Badge>
                    </Table.Cell>
                    <Table.Cell>{c.categoryTitle}</Table.Cell>
                    <Table.Cell>
                      {c.subject.substring(0, 30) +
                        (c.subject.length > 30 ? '\u2026' : '')}
                    </Table.Cell>
                    <Table.Cell>{c.severityLevel}</Table.Cell>
                    <Table.Cell>
                      <Link href="/cases" className="font-medium text-gray-500">
                        <ArrowSquareOut size={18} />
                      </Link>
                    </Table.Cell>
                  </Table.Row>
                )
            )}

          {isDashboard && hasCriticalCase === 0 && (
            <Table.Row>
              <Table.Cell className="whitespace-nowrap font-normal text-gray-900">
                No critical cases.
              </Table.Cell>
            </Table.Row>
          )}

          {!isDashboard &&
            // ? Display only three critical cases based on the date (asc)
            cases?.map((c: Case) => (
              <Table.Row key={c.id} className="bg-white">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                  {c.id}
                </Table.Cell>
                <Table.Cell>{c.createdAt.split('T')[0]}</Table.Cell>
                <Table.Cell>
                  {c.status === 'Active' ? (
                    <Badge className="w-max" color="success">
                      {c.status}
                    </Badge>
                  ) : (
                    <Badge className="w-max" color="warning">
                      {c.status}
                    </Badge>
                  )}
                </Table.Cell>
                <Table.Cell>{c.categoryTitle}</Table.Cell>
                <Table.Cell>{c.subject}</Table.Cell>
                <Table.Cell>{c.severityLevel}</Table.Cell>
                <Table.Cell>
                  <Link href="/cases" className="font-medium text-gray-500">
                    <ArrowSquareOut size={18} />
                  </Link>
                </Table.Cell>
              </Table.Row>
            ))}

          {!isDashboard && cases && cases.length <= 0 && (
            <Table.Row>
              <Table.Cell className="whitespace-nowrap font-normal text-gray-900">
                No cases.
              </Table.Cell>
            </Table.Row>
          )}
          <Table.Row>
            <Table.Cell className="whitespace-nowrap text-xs text-gray-400 tracking-wide font-normal">
              END OF LIST
            </Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  )
}

export default CasesTable
