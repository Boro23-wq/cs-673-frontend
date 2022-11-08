import { Navbar } from 'flowbite-react'
import { useRouter } from 'next/router'

interface HeaderLinksType {
  name: string
  path: string
}

const Header = ({
  authorized,
  unauthorized
}: {
  authorized: HeaderLinksType[]
  unauthorized: HeaderLinksType[]
}) => {
  const router = useRouter()
  const pathFromRouter = router.asPath.split('/')[1]

  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://carely.com/">
        {/* TODO: Add brand image */}
        {/* <img
          src=""
          className="mr-3 h-6 sm:h-9"
          alt="Carely Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <b>Carely</b>
        </span>
      </Navbar.Brand>

      <Navbar.Collapse className="mb-4 sm:mb-0">
        {['login', 'products', 'contact', 'pineapple'].includes(pathFromRouter)
          ? unauthorized.map((pathObj) => (
              <Navbar.Link
                key={pathObj.name}
                href={pathObj.path}
                active={pathObj.path.split('/')[1] === pathFromRouter}>
                {pathObj.name}
              </Navbar.Link>
            ))
          : authorized.map((pathObj) => (
              <Navbar.Link
                key={pathObj.name}
                href={pathObj.path}
                active={pathObj.path.split('/')[1] === pathFromRouter}>
                {pathObj.name}
              </Navbar.Link>
            ))}
      </Navbar.Collapse>

      <div className="md:hidden">
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}
export default Header
