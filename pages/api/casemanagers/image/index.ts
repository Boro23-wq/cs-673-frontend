import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false
  }
}

// ! Please do not touch this code (still in works)
async function uploadProfilePictureRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.session.user?.id
  const formData = req.body

  const requestOptions: RequestInit = {
    method: 'POST',
    body: formData
  }

  try {
    const response = await fetch(
      `${process.env.BASE_URI}/casemanagers/${id}/upload`,
      requestOptions
    )
    console.log(await response)
    console.log(await response.json())
    return res.status(200).json('Profile picture updated.')
  } catch (error: any) {
    console.log(error)
    return res.status(500).json('Something went wrong.')
  }
}

export default withIronSessionApiRoute(
  uploadProfilePictureRoute,
  sessionOptions
)
