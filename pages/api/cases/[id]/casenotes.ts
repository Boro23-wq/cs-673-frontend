import axios from 'axios'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

async function caseNotesRoute(req: NextApiRequest, res: NextApiResponse) {
  const caseId = req.query.id
  const formData = req.body

  if (req.method === 'POST') {
    try {
      const response = await axios.post(
        `${process.env.BASE_URI}/cases/${caseId}/casenotes`,
        formData
      )
      const newNote = response.data

      return res.status(200).json(newNote)
    } catch (error) {
      console.log(error)
      return res.status(500).json('Something went wrong.')
    }
  } else if (req.method === 'GET') {
    try {
      const response = await axios.get(
        `${process.env.BASE_URI}/cases/${caseId}/casenotes`
      )
      const casenotes = await response.data
      return res.status(200).json(casenotes)
    } catch (error) {
      return res.status(500).json('Something went wrong.')
    }
  }
}

export default withIronSessionApiRoute(caseNotesRoute, sessionOptions)
