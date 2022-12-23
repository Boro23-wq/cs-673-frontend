import axios from 'axios'
import React from 'react'
const Edit = ({ isVisible, onClose }) => {
  if (!isVisible) return null

  const apiEndPoint =
    'https://soy-geography-370114.ue.r.appspot.com/schedule/newUserSchedule'
  if (!isVisible) return null

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose()
  }
  const PatientId = React.useRef()
  const roomNumber = React.useRef()
  const scheduleDate = React.useRef()
  const scheduleFrom = React.useRef()
  const scheduleTo = React.useRef()
  const userName = React.useRef()
  const scheduleActivity = React.useRef()
  const providerGroup = React.useRef()
  const userId = React.useRef()

  const handleUpdate = async (post) => {
    post.userName = 'Updated'
    await axios.put(apiEndPoint + '/' + post.id)
    const postsClone = [...posts]
    const index = postsClone.indexOf(post)
    postsClone[index] = { ...post }
    setPosts(postsClone)
  }
  const handleSubmit = async () => {
    alert('the form is being submitted you may close the form now')
    const post = {
      userId: userId.current.value,
      userName: userName.current.value,
      scheduleDate: scheduleDate.current.value,
      scheduleFrom:
        scheduleDate.current.value + 'T' + scheduleFrom.current.value,
      scheduleTo: scheduleDate.current.value + 'T' + scheduleTo.current.value,
      providerGroup: providerGroup.current.value,
      activity: scheduleActivity.current.value,
      location: roomNumber.current.value,
      patientId: PatientId.current.value,
      scheduleStatus: 'New'
    }
    console.log(post)
    await axios.post(apiEndPoint, post, {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return (
    <div
      suppressHydrationWarning={true}
      className=" flex  fixed inset-0 left-[-16px]  bg-opacity-25 backdrop-blur-sm justify-center items-center overflow-auto z-10 "
      id="wrapper"
      onClick={handleClose}>
      <body>
        <div className="w-[600px] flex flex-col">
          <button
            className=" text-black text-xl place-self-end"
            onClick={() => onClose()}>
            x
          </button>
          <br></br>
          <br></br>
          <div className="bg-white p-2 relative top-20  rounded object-scale-down scale-75 overflow-auto">
            <b>Create a schedule</b>
            <br></br>
            <br></br>
            <form
              action="/url"
              method="GET"
              className=" row"
              onSubmit={handleSubmit}>
              <ul>
                <div className="mb-6">
                  <label
                    for="patientID"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    PatientID
                  </label>
                  <input
                    type="text"
                    id="patientID"
                    ref={PatientId}
                    placeholder="please type the Patient ID"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <br></br>
                <div class="mb-6">
                  <label
                    for="userId"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    UserID
                  </label>
                  <input
                    type="text"
                    id="userId"
                    ref={userId}
                    placeholder="user ID"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <br></br>
                <div class="mb-6">
                  <label
                    for="providerGroup"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Role
                  </label>
                  <input
                    type="text"
                    id="providerGroup"
                    ref={providerGroup}
                    placeholder="(e.g: Doctor , lab technician etc )"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <br></br>
                <div class="mb-6">
                  <label
                    for="roomNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Room no:
                  </label>
                  <input
                    type="text"
                    id="roomNumber"
                    ref={roomNumber}
                    placeholder="Room Number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <br></br>
                <div class="mb-6">
                  <label
                    for="scheduleDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Date <b>(Format: yyyy-MM-DD)</b>
                  </label>
                  <input
                    type="text"
                    id="scheduleDate"
                    ref={scheduleDate}
                    placeholder="Date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <br></br>
                <div class="mb-6">
                  <label
                    for="scheduleFrom"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Time From <b>(24HR-Format: HH:MM:SS)</b>
                  </label>
                  <input
                    type="text"
                    id="scheduleFrom"
                    ref={scheduleFrom}
                    placeholder="time"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <br></br>
                <br></br>
                <div class="mb-6">
                  <label
                    for="scheduleTo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Time To <b>(24HR-Format: HH:MM:SS)</b>
                  </label>
                  <input
                    type="text"
                    id="scheduleTo"
                    ref={scheduleTo}
                    placeholder="time"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <br></br>
                <div class="mb-6">
                  <label
                    for="userName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Username
                  </label>
                  <input
                    type="text"
                    id="userName"
                    ref={userName}
                    placeholder="type out the UserName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <br></br>
                <label
                  for="scheduleActivity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Reason
                </label>
                <textarea
                  id="scheduleActivity"
                  ref={scheduleActivity}
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Reason for visit"></textarea>
                <br></br>
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="text-white bg-gray-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Reschedule
                </button>
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="text-white bg-gray-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Close
                </button>
              </ul>
            </form>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Edit
