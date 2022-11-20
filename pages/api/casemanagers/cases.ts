import axios from 'axios'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

async function casesRoute(req: NextApiRequest, res: NextApiResponse) {
  const email = req.session.user?.email

  try {
    const response = await axios.get(
      `${process.env.BASE_URI}/casemanagers/${email}/cases`
    )

    const cases = response.data

    return res.status(200).json(cases)
  } catch (error: any) {
    console.log(error)
    return res.status(500).json('Something went wrong.')
  }
}

export default withIronSessionApiRoute(casesRoute, sessionOptions)
