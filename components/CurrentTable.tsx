import axios from 'axios'
import Edit from 'components/Edit'
import { Tooltip } from 'flowbite-react'
import { Fragment, useEffect, useState } from 'react'

export const CurrentTable = () => {
  const [posts, setPosts] = useState([])
  var data
  const apiEndPoint =
    'https://soy-geography-370114.ue.r.appspot.com/schedule/currentDaySchedule'
  const apiEndPointUpdate =
    'https://soy-geography-370114.ue.r.appspot.com/schedule/currentDaySchedule'
  const apiEndPointDelete =
    'https://soy-geography-370114.ue.r.appspot.com/schedule/userSchedule/'
  const apiEndPointAdd =
    'https://soy-geography-370114.ue.r.appspot.com/schedule/newUserSchedule'

  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint)
      setPosts(res)
    }
    getPosts()
  }, [])

  const addPost = async () => {
    const post = {
      userId: '120',
      userName: 'Drake',
      scheduleDate: '2022-12-29',
      scheduleFrom: '2022-11-29T15:00:00',
      scheduleTo: '2022-11-29T15:30:00',
      providerGroup: 'Doctor',
      activity: 'Patient Visit',
      location: '405',
      patientId: '10304',
      scheduleStatus: 'New'
    }
    await axios.post(apiEndPointAdd, post, {
      headers: { 'Content-Type': 'application/json' }
    })
  }
  var getStateFromLocalStorage = () => {
    let data = localStorage.getItem('state')
    if (data !== undefined) {
      data = '2022-12'
    }
  }
  const handleUpdate = async (post) => {
    post.userName = 'Updated'
    await axios.put(apiEndPoint + '/' + post.id)
    const postsClone = [...posts]
    const index = postsClone.indexOf(post)
    postsClone[index] = { ...post }
    setPosts(postsClone)
  }

  const handleDelete = async (post) => {
    await axios.delete(apiEndPointDelete + post.id)
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  const [showEdit, setShowEditl] = useState(false)

  return (
    <div className="container absolute -z-1">
      <main>
        <table className="table absolute w-full text-sm text-left text-gray-500 dark:text-gray-400 -z-1">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                patientID
              </th>
              <th scope="col" className="py-3 px-6">
                roomNumber
              </th>
              <th scope="col" className="py-3 px-6">
                Schedule Activity
              </th>
              <th scope="col" className="py-3 px-6">
                Schedule Date
              </th>
              <th scope="col" className="py-3 px-6">
                Schedule Status
              </th>
              <th scope="col" className="py-3 px-6">
                Schedule From
              </th>
              <th scope="col" className="py-3 px-6">
                Schedule To
              </th>
              <th scope="col" className="py-3 px-6">
                UserID
              </th>
              <th scope="col" className="py-3 px-6">
                UserName
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 ">
                <td className="py-4 px-6">{post.id}</td>
                <td className="py-4 px-6">{post.patientId}</td>
                <td className="py-4 px-6">{post.roomNumber}</td>
                <td className="py-4 px-6">{post.scheduleActivity}</td>
                <td className="py-4 px-6">{post.scheduleDate}</td>
                <td className="py-4 px-6">{post.scheduleStatus}</td>
                <td className="py-4 px-6">{post.scheduleFrom}</td>
                <td className="py-4 px-6">{post.scheduleTo}</td>
                <td className="py-4 px-6">{post.userId}</td>
                <td className="py-4 px-6">{post.userName}</td>
                <td>
                  <Fragment>
                    <Tooltip content={'Edit'}>
                      <button
                        onClick={() => setShowEditl(true)}
                        className="btn btn-info btn-sm bg-green-400 text-white">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                      </button>
                      <Edit
                        isVisible={showEdit}
                        onClose={() => setShowEditl(false)}></Edit>
                    </Tooltip>
                  </Fragment>
                </td>
                <td>
                  <Tooltip content={'Delete'}>
                    <button
                      onClick={() => handleDelete(post)}
                      className="btn btn-danger btn-sm bg-red-600 text-white">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  )
}
