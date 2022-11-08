import { Footer as FooterFlowBite } from 'flowbite-react'

const Footer = () => {
  return (
    <FooterFlowBite container={true}>
      <FooterFlowBite.Copyright href="/" by="Carely™" year={2022} />
      <FooterFlowBite.LinkGroup>
        <FooterFlowBite.Link href="/legal/privacy-policy">
          Privacy Policy
        </FooterFlowBite.Link>
        <FooterFlowBite.Link href="/contact">Contact</FooterFlowBite.Link>
      </FooterFlowBite.LinkGroup>
    </FooterFlowBite>
  )
}

export default Footer
