import axios from 'axios'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

async function caseSolutionsRoute(req: NextApiRequest, res: NextApiResponse) {
  const caseId = req.query.id
  try {
    const response = await axios.get(
      `${process.env.BASE_URI}/cases/${caseId}/solutions`
    )
    const solutions = response.data
    return res.status(200).json(solutions)
  } catch (error) {
    return res.status(500).json('Something went wrong.')
  }
}

export default withIronSessionApiRoute(caseSolutionsRoute, sessionOptions)
