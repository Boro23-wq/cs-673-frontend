import { Button, Modal, Spinner } from 'flowbite-react'
import React from 'react'

export const CustomDeleteModal = ({
  type,
  description,
  entity,
  onModalClose,
  active,
  onCaseClose,
  loading
}: {
  type: string
  description: string
  entity: string
  onModalClose: any
  active: any
  onCaseClose: any
  loading: boolean
}) => {
  return (
    <React.Fragment>
      {/* <Modal show={false} onClose={onClose}> */}
      <Modal show={active} onClose={onModalClose}>
        <Modal.Header>Delete {entity}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button disabled={loading} color={type} onClick={onCaseClose}>
            {loading && <Spinner className="mr-2" size="sm" color="failure" />}
            Confirm
          </Button>
          <Button color="gray" onClick={onModalClose}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}
