import { Layout } from '@/components/Layout'
import useUser from 'lib/useUser'

const Dashboard = () => {
  const { user } = useUser({
    redirectTo: '/login'
  })

  return (
    <Layout>
      <div>Dashboard Page</div>

      {user && (
        <>
          <p>User public data</p>

          {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
        </>
      )}
    </Layout>
  )
}

export default Dashboard
