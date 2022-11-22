import axios from 'axios'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

async function closeCaseRoute(req: NextApiRequest, res: NextApiResponse) {
  const caseId = req.query.id
  try {
    const response = await axios.post(
      `${process.env.BASE_URI}/cases/${caseId}/close`
    )

    if (response.data) {
      return res.status(200).json('Case closed')
    }
  } catch (error) {
    return res.status(500).json('Something went wrong.')
  }
}

export default withIronSessionApiRoute(closeCaseRoute, sessionOptions)
