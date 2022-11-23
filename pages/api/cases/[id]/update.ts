import axios from 'axios'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

async function updateCaseRoute(req: NextApiRequest, res: NextApiResponse) {
  const caseId = req.query.id
  const formData = JSON.parse(req.body)

  try {
    const response = await axios.patch(
      `${process.env.BASE_URI}/cases/${caseId}/`,
      formData
    )

    if (response.status === 200) {
      return res.status(200).json('Case updated')
    }
  } catch (error) {
    return res.status(500).json('Something went wrong.')
  }
}

export default withIronSessionApiRoute(updateCaseRoute, sessionOptions)
