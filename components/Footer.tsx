import { Footer as FooterFlowBite } from 'flowbite-react'

const Footer = () => {
  return (
    <FooterFlowBite
      container={true}
      className="border-t-2 border-gray-100 rounded-none">
      <FooterFlowBite.Copyright href="/" by="Carely™" year={2022} />
      <FooterFlowBite.LinkGroup>
        <FooterFlowBite.Link href="/legal/privacy-policy">
          Privacy Policy
        </FooterFlowBite.Link>
      </FooterFlowBite.LinkGroup>
    </FooterFlowBite>
  )
}

export default Footer
