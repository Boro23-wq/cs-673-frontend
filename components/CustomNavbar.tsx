import { Navbar } from 'flowbite-react'
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
  const router = useRouter()
  const pathFromRouter = router.asPath.split('/')[1]

  return (
    <Navbar
      className="w-full space-between mb-10 border-b-2 border-gray-50"
      fluid={true}
      rounded={true}>
      <div className="flex">
        <Navbar.Brand href="/">
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
      </div>

      <div className="flex">
        <Navbar.Collapse className="mb-4 sm:mb-0">
          {['login', 'products', 'contact', 'pineapple', 'legal'].includes(
            pathFromRouter
          )
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
      </div>
    </Navbar>
  )
}
export default CustomNavbar
