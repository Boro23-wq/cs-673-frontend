import { Table } from 'flowbite-react'
import Link from 'next/link'
import { ArrowSquareOut } from 'phosphor-react'

const AppointmentsTable = () => {
  return (
    <Table hoverable={true}>
      <Table.Head>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Patient</Table.HeadCell>
        <Table.HeadCell>Email</Table.HeadCell>
        <Table.HeadCell>Doctor</Table.HeadCell>
        <Table.HeadCell>Date</Table.HeadCell>
        <Table.HeadCell>Duration (in hrs)</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">View</span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
            1
          </Table.Cell>
          <Table.Cell>Sam Doe</Table.Cell>
          <Table.Cell>sam@pt.io</Table.Cell>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>12-15-2022</Table.Cell>
          <Table.Cell>0.5</Table.Cell>
          <Table.Cell>Confirmed</Table.Cell>
          <Table.Cell>
            <Link href="/tables" className="font-medium text-gray-500">
              <ArrowSquareOut size={18} />
            </Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
            2
          </Table.Cell>
          <Table.Cell>Sam Doe</Table.Cell>
          <Table.Cell>sam@pt.io</Table.Cell>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>12-15-2022</Table.Cell>
          <Table.Cell>0.5</Table.Cell>
          <Table.Cell>Confirmed</Table.Cell>
          <Table.Cell>
            <Link href="/tables" className="font-medium text-gray-500">
              <ArrowSquareOut size={18} />
            </Link>
          </Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
            3
          </Table.Cell>
          <Table.Cell>Sam Doe</Table.Cell>
          <Table.Cell>sam@pt.io</Table.Cell>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>12-15-2022</Table.Cell>
          <Table.Cell>0.5</Table.Cell>
          <Table.Cell>Confirmed</Table.Cell>
          <Table.Cell>
            <Link href="/tables" className="font-medium text-gray-500">
              <ArrowSquareOut size={18} />
            </Link>
          </Table.Cell>
        </Table.Row>

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
          <Table.Cell></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default AppointmentsTable
