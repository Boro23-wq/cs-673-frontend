import Header from '@/components/Header'
import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'

const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <NextHead
        title="Privacy and Policy - Carely"
        metaName="Carely"
        metaContent="Carely helps attain goal-oriented, culturally relevant
          and logical steps to assure that every client receive services in a supportive, effective, efficient, timely and cost-effective manner."
      />

      <Layout>
        <Header
          title="Privacy and Policy"
          description="This Privacy Policy, covers how we collect, handle and disclose personal data on our platform."
        />
      </Layout>
    </div>
  )
}

export default PrivacyPolicy
