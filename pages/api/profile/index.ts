import axios from 'axios'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

async function caseManagersRoute(req: NextApiRequest, res: NextApiResponse) {
  const id = req.session.user?.id

  try {
    if (id) {
      const response = await axios.get(
        `${process.env.BASE_URI}/casemanagers/${id}`
      )

      const casemanager = response.data

      return res.status(200).json(casemanager)
    }
  } catch (error: any) {
    console.log(error)
    return res.status(500).json('Something went wrong.')
  }
}

export default withIronSessionApiRoute(caseManagersRoute, sessionOptions)
