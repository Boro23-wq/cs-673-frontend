// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from 'iron-session'
import type { User } from 'pages/api/user'

const dayInSeconds: number = 1440 * 60

export const sessionOptions: IronSessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: 'carely-cookie',
  // The next line makes sure browser will expire cookies before seals are considered expired by the server. It also allows for clock difference of 60 seconds maximum between servers and clients.
  ttl: dayInSeconds,
  cookieOptions: {
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  }
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
  interface IronSessionData {
    user?: User
  }
}
