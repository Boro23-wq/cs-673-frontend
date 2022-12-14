import axios from 'axios'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

async function patientsRoute(req: NextApiRequest, res: NextApiResponse) {
  const patientEmail = req.query.email

  try {
    if (patientEmail) {
      const response = await axios.get(
        `${process.env.BASE_URI}/patients?email=${patientEmail}`
      )

      const patient = response.data

      return res.status(200).json(patient)
    }
  } catch (error: any) {
    console.log(error)
    return res.status(500).json('Something went wrong.')
  }
}

export default withIronSessionApiRoute(patientsRoute, sessionOptions)
