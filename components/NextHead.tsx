import Head from 'next/head'

export const NextHead = ({
  title,
  metaName,
  metaContent
}: {
  title: string
  metaName: string
  metaContent: string
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="Carely"
        content="Carely will help you attain goal-oriented, culturally relevant
          and logical steps to assure that you receive services in a supportive, effective, efficient, timely and cost-effective manner."
      />
    </Head>
  )
}
