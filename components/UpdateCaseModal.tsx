import { Case } from 'database'
import {
  Button,
  Label,
  Modal,
  Select,
  Spinner,
  Textarea,
  TextInput
} from 'flowbite-react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export const UpdateCaseModal = ({
  active,
  onModalClose,
  caseBasicData
}: {
  active: boolean
  onModalClose: () => void
  caseBasicData: Case
}) => {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const [updatedFormData, setUpdatedFormData] = useState({
    caseManagerEmail: caseBasicData?.caseManagerEmail,
    doctorEmail: caseBasicData?.doctorEmail,
    subject: caseBasicData?.subject,
    severityLevel: caseBasicData?.severityLevel
  })

  const handleSubmit = async () => {
    setLoading(true)
    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify(updatedFormData as any)
    }

    const response = await fetch(
      `/api/cases/${caseBasicData?.id}/update`,
      requestOptions
    )

    if (response) {
      setLoading(false)
      onModalClose()
      router.push('/cases')
    }
  }

  return (
    <React.Fragment>
      {/* <Modal show={false} onClose={onClose}> */}
      <Modal show={active} onClose={onModalClose}>
        <Modal.Header>Update case</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={handleSubmit}>
              <div className="w-full md:mb-10 lg:mb-10 flex flex-col gap-4 ">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email1" value="Transfer case" />
                  </div>
                  <TextInput
                    id="email1"
                    type="email"
                    placeholder="New case-manager email"
                    required={true}
                    value={updatedFormData?.caseManagerEmail}
                    addon="@"
                    onChange={(e) => {
                      setUpdatedFormData({
                        ...updatedFormData,
                        caseManagerEmail: e.target.value
                      })
                    }}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email2" value="Change assignee" />
                  </div>
                  <TextInput
                    id="email2"
                    type="email"
                    placeholder="New doctor email"
                    required={true}
                    value={updatedFormData?.doctorEmail}
                    addon="@"
                    onChange={(e) => {
                      setUpdatedFormData({
                        ...updatedFormData,
                        doctorEmail: e.target.value
                      })
                    }}
                  />
                </div>

                {/* Subject */}
                <div id="textarea">
                  <div className="mb-2 block">
                    <Label htmlFor="subject" value="Update subject" />
                  </div>
                  <Textarea
                    id="subject"
                    placeholder="Please input general information or details about the case."
                    rows={3}
                    value={updatedFormData?.subject}
                    onChange={(e) => {
                      setUpdatedFormData({
                        ...updatedFormData,
                        subject: e.target.value
                      })
                    }}
                  />
                </div>

                {/* Severity */}
                <div id="select">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="severity"
                      value="Update severity of the case"
                    />
                  </div>
                  <Select
                    value={updatedFormData?.severityLevel}
                    onChange={(e) => {
                      setUpdatedFormData({
                        ...updatedFormData,
                        severityLevel: e.target.value
                      })
                    }}>
                    <option value="1-Critical">1-Critical</option>
                    <option value="2-Major">2-Major</option>
                    <option value="3-Moderate">3-Moderate</option>
                    <option value="4-Low">4-Low</option>
                  </Select>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={onClick}>I accept</Button> */}
          <Button onClick={handleSubmit} type="submit">
            {loading && <Spinner className="mr-2" size="sm" />}
            Update
          </Button>
          {/* <Button color="gray" onClick={onClick}> */}
          <Button color="gray" onClick={onModalClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}
