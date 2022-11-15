import { Navbar } from 'flowbite-react'
import fetchJson from 'lib/fetchJson'
import useUser from 'lib/useUser'
import { useRouter } from 'next/router'

interface HeaderLinksType {
  name: string
  path: string
}

const CustomNavbar = ({
  authorized,
  unauthorized
}: {
  authorized: HeaderLinksType[]
  unauthorized: HeaderLinksType[]
}) => {
  const { user, mutateUser } = useUser()
  const router = useRouter()
  const pathFromRouter = router.asPath.split('/')[1]

  const handleLogout = async (e: any) => {
    e.preventDefault()
    mutateUser(await fetchJson('/api/logout', { method: 'POST' }), false)
    router.push('/login')
  }

  return (
    <Navbar
      className="w-full space-between mb-10 border-b-2 border-gray-100"
      fluid={true}
      rounded={true}>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          <b>Carely</b>
        </span>
      </Navbar.Brand>

      <Navbar.Collapse className="mb-4 sm:mb-0">
        {!user?.isLoggedIn
          ? unauthorized.map((pathObj) => (
              <Navbar.Link
                key={pathObj.name}
                href={pathObj.path}
                active={pathObj.path.split('/')[1] === pathFromRouter}>
                {pathObj.name}
              </Navbar.Link>
            ))
          : authorized.map((pathObj) =>
              pathObj.path.split('/')[1] === 'logout' ? (
                <Navbar.Link
                  key={pathObj.name}
                  href={'/api/logout'}
                  onClick={handleLogout}>
                  {pathObj.name}
                </Navbar.Link>
              ) : (
                <Navbar.Link
                  key={pathObj.name}
                  href={pathObj.path}
                  active={pathObj.path.split('/')[1] === pathFromRouter}>
                  {pathObj.name}
                </Navbar.Link>
              )
            )}
      </Navbar.Collapse>

      <div className="md:hidden">
        <Navbar.Toggle className="mt-1.5 bg-gray-100" />
      </div>
    </Navbar>
  )
}
export default CustomNavbar
