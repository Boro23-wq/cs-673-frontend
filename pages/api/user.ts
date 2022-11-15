import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

export interface User {
  isLoggedIn: boolean
  id: number
  createdAt: string
  modifiedAt: string
  firstName: string
  lastName: string
  phone: string
  email: string
  profileUrl?: string | null
}

async function userRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  if (req.session.user) {
    // ? in a real world application you might read the user id from the session and then do a database request
    // ? to get more information on the user if needed
    res.json({
      ...req.session.user,
      isLoggedIn: true
    })
  } else {
    res.json({
      isLoggedIn: false,
      id: 0,
      createdAt: '',
      modifiedAt: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      profileUrl: null
    })
  }
}

export default withIronSessionApiRoute(userRoute, sessionOptions)
