import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import fetchJson from 'lib/fetchJson'
import useUser from 'lib/useUser'
import Link from 'next/link'
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

  const handleLogout = async () => {
    mutateUser(await fetchJson('/api/logout', { method: 'POST' }), false)
    router.push('/login')
  }

  const handleContactRedirect = () => {
    router.push('/contact')
  }

  const handleProfileRedirect = () => {
    router.push('/account')
  }

  return (
    <Navbar
      className="w-full space-between mb-10 border-b-2 border-gray-100 "
      fluid={true}
      rounded={true}>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold">
          <b>Carely</b>
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        {user?.isLoggedIn ? (
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                rounded={true}
                placeholderInitials={
                  user?.firstName.charAt(0) + user?.lastName.charAt(0)
                }
                status="online"
              />
            }>
            <Dropdown.Header>
              <span className="block text-sm">
                {user?.firstName + ' ' + user?.lastName}
              </span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={handleProfileRedirect}>
              Account
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Button onClick={() => handleContactRedirect()}>Contact us</Button>
        )}
        <div className="md:hidden items-center">
          <Navbar.Toggle className="bg-gray-100 ml-2" />
        </div>
      </div>

      <Navbar.Collapse className="mb-4 sm:mb-0">
        {!user?.isLoggedIn
          ? unauthorized.map((pathObj) => (
              <Link
                legacyBehavior
                passHref
                key={pathObj.name}
                href={pathObj.path}>
                <a
                  className={
                    pathObj.path.split('/')[1] === pathFromRouter
                      ? 'text-blue-600'
                      : ''
                  }>
                  {pathObj.name}
                </a>
              </Link>
            ))
          : authorized.map((pathObj) => (
              <Link
                legacyBehavior
                passHref
                key={pathObj.name}
                href={pathObj.path}>
                <a
                  className={
                    pathObj.path.split('/')[1] === pathFromRouter
                      ? 'text-blue-600'
                      : ''
                  }>
                  {pathObj.name}
                </a>
              </Link>
            ))}
      </Navbar.Collapse>
    </Navbar>
  )
}
export default CustomNavbar
