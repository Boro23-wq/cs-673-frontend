import axios from 'axios'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

async function casesRoute(req: NextApiRequest, res: NextApiResponse) {
  const formData = JSON.parse(req.body)

  if (req.method === 'POST') {
    try {
      const response = await axios.post(
        `${process.env.BASE_URI}/cases`,
        formData
      )
      const newCase = response.data

      return res.status(200).json(newCase)
    } catch (error) {
      console.log(error)
      return res.status(500).json('Something went wrong.')
    }
  }
}

export default withIronSessionApiRoute(casesRoute, sessionOptions)
