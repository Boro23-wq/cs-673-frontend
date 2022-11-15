import axios from 'axios'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { email, role } = await req.body

  try {
    const response = await axios.get(
      `${process.env.BASE_URI}/${role as string}?email=${email as string}`
    )
    const userData = response.data

    const user = { isLoggedIn: true, ...userData }

    req.session.user = user
    console.log(req.session)
    await req.session.save()
    // console.log(user)
    return res.status(200).json({ user })
  } catch (error: any) {
    if (error.response) {
      return res.status(404).json({ message: error.response.data })
    }
    return res.status(404).json({ message: (error as Error).message })
  }
}

export default withIronSessionApiRoute(loginRoute, sessionOptions)
