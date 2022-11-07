import { Footer as FooterFlowBite } from 'flowbite-react'

const Footer = () => {
  return (
    <FooterFlowBite container={true}>
      <FooterFlowBite.Copyright href="#" by="Carely™" year={2022} />
      <FooterFlowBite.LinkGroup>
        <FooterFlowBite.Link href="#">About</FooterFlowBite.Link>
        <FooterFlowBite.Link href="#">Privacy Policy</FooterFlowBite.Link>
        <FooterFlowBite.Link href="#">Contact</FooterFlowBite.Link>
      </FooterFlowBite.LinkGroup>
    </FooterFlowBite>
  )
}

export default Footer
