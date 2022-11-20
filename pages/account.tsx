import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'

const Account = () => {
  return (
    <Layout>
      <NextHead
        title="Dashboard - Carely"
        metaName="Carely"
        metaContent="Display metrics and details regarding appointments, and cases."
      />
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl dark:text-white">
        Personal Account
      </h1>
    </Layout>
  )
}

export default Account
