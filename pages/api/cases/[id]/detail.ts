import axios from 'axios'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

async function caseBasicDetailRoute(req: NextApiRequest, res: NextApiResponse) {
  const caseId = req.query.id
  try {
    const response = await axios.get(`${process.env.BASE_URI}/cases/${caseId}`)
    const caseDetail = response.data
    return res.status(200).json(caseDetail)
  } catch (error) {
    return res.status(500).json('Something went wrong.')
  }
}

export default withIronSessionApiRoute(caseBasicDetailRoute, sessionOptions)
