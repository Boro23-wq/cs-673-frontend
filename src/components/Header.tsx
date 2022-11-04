import { Navbar } from 'flowbite-react'

const Header = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://carely.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>

      <Navbar.Collapse className="mb-4 sm:mb-0">
        <Navbar.Link href="/login" active={true}>
          Login
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/services">Services</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>

      <div className="md:hidden">
        <Navbar.Toggle />
      </div>
    </Navbar>
  )
}
export default Header
