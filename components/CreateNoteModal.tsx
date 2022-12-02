import { Button, Label, Modal, Spinner, Textarea } from 'flowbite-react'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

export const CreateNoteModal = ({
  onModalClose,
  active
}: {
  onModalClose: () => void
  active: boolean
}) => {
  const router = useRouter()

  const [comment, setComment] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit = async () => {
    setLoading(true)

    const body = {
      comment,
      caseId: Number(router.query.id)
    }

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }

    const response = await fetch(
      `/api/cases/${router.query.id}/casenotes`,
      requestOptions
    )

    if (response) {
      setLoading(false)
      console.log(await response.json())
      onModalClose()
      setComment('')
    }
  }

  return (
    <React.Fragment>
      <Modal show={active} onClose={onModalClose}>
        <Modal.Header>Add case note</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form onSubmit={handleSubmit}>
              <div className="w-full md:mb-5 lg:mb-5 flex flex-col gap-4 ">
                {/* Comment */}
                <div id="textarea">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Add a comment" />
                  </div>
                  <Textarea
                    id="comment"
                    placeholder="Please input a note/comment on the case."
                    rows={3}
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value)
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleSubmit} type="submit">
            {loading && <Spinner className="mr-2" size="sm" />}
            Add
          </Button>
          <Button onClick={onModalClose} color="gray">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}
