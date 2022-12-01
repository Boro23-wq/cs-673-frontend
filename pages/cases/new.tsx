import { Layout } from '@/components/Layout'
import { NextHead } from '@/components/NextHead'
import {
  Button,
  Label,
  Select,
  Spinner,
  Textarea,
  TextInput
} from 'flowbite-react'
import { Plus } from 'phosphor-react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

// minified version
import 'react-toastify/dist/ReactToastify.min.css'

const AddCase = () => {
  // form data
  const [caseManagerEmail, setCaseManagerEmail] = useState<string>('')
  const [patientEmail, setPatientEmail] = useState<string>('')
  const [doctorEmail, setDoctorEmail] = useState<string>('')
  const [category, setCategory] = useState<string>('Blood')
  const [severity, setSeverity] = useState<string>('1-Critical')
  const [subject, setSubject] = useState<string>('')

  // loading state
  const [loading, setLoading] = useState<boolean>(false)

  // toast
  const notifyError = (description: string) => toast.error(description)
  const notifySuccess = () => toast.success('Created a new case')

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    setLoading(true)

    const formData = {
      status: 'Active',
      caseManagerEmail,
      patientEmail,
      doctorEmail,
      subject,
      categoryTitle: category,
      severityLevel: severity
    }

    const requestOptions: RequestInit = {
      method: 'POST',
      body: JSON.stringify(formData)
    }

    const response = await fetch(`/api/cases/`, requestOptions)
    console.log(response)

    if (response.ok) {
      notifySuccess()

      setCaseManagerEmail('')
      setPatientEmail('')
      setDoctorEmail('')
      setCategory('')
      setSubject('')
      setSeverity('1-Critical')
      setCategory('Blood')
    } else {
      notifyError("Couldn't create a case please try later")
    }

    setLoading(false)
  }

  return (
    <Layout>
      <NextHead
        title="Cases - Carely"
        metaName="Carely"
        metaContent="All the cases."
      />
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-5xl">
        Create a new case
      </h1>

      <p className="mb-5 text-gray-500">
        The required fields are marked with an asterisk (*).
      </p>

      {/* Case information form */}
      <div className="bg-none md:bg-gray-50 lg:bg-gray-50 px-0 md:px-10 lg:px-10 pt-4 md:pt-6 lg:pt-6 pb-5 md:pb-10 lg:pb-10 rounded-md">
        <h1 className="max-w-2xl mb-4 text-xl font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl ">
          Case information
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="w-full mb-5 md:mb-10 lg:mb-10 flex flex-col gap-4 ">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Casemanager email *" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="casemanager@carely.io"
                required={true}
                value={caseManagerEmail}
                addon="@"
                onChange={(e) => setCaseManagerEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Patient email *" />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="patient@carely.io"
                required={true}
                value={patientEmail}
                addon="@"
                onChange={(e) => setPatientEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email2" value="Doctor email *" />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="doctor@carely.io"
                required={true}
                value={doctorEmail}
                addon="@"
                onChange={(e) => setDoctorEmail(e.target.value)}
              />
            </div>
            {/* Category */}
            <div id="select">
              <div className="mb-2 block">
                <Label
                  htmlFor="category"
                  value="Select a category for the case *"
                />
              </div>
              <Select
                onChange={(e) => setCategory(e.target.value)}
                id="category"
                required={true}
                value={category}>
                <option value="Blood">Blood</option>
                <option value="Ear">Ear</option>
                <option value="Eye">Eye</option>
                <option value="Cancer and neoplasms">
                  Cancer and neoplasms
                </option>
              </Select>
            </div>
            {/* Subject */}
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="subject" value="Case subject *" />
              </div>
              <Textarea
                id="subject"
                placeholder="Please input general information or details about the case."
                required={true}
                rows={3}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            {/* Severity */}
            <div id="select">
              <div className="mb-2 block">
                <Label
                  htmlFor="severity"
                  value="Select a severity for the case *"
                />
              </div>
              <Select
                onChange={(e) => setSeverity(e.target.value)}
                id="severity"
                required={true}
                value={severity}>
                <option value="1-Critical">1-Critical</option>
                <option value="2-Major">2-Major</option>
                <option value="3-Moderate">3-Moderate</option>
                <option value="4-Low">4-Low</option>
              </Select>
            </div>
            {/* Status */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Status" />
              </div>
              <label className="inline-flex relative items-center cursor-pointer">
                <input
                  type="checkbox"
                  value="Active"
                  className="sr-only peer"
                  checked
                  disabled
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-400">
                  Active
                </span>
              </label>
            </div>
          </div>

          <Button
            disabled={loading}
            className="w-full md:w-fit lg:w-fit"
            type="submit">
            {loading ? (
              <Spinner
                className="mr-2"
                size="sm"
                aria-label="Loading spinner"
              />
            ) : (
              <Plus className="mr-2" size={14} />
            )}
            Create case
          </Button>
        </form>

        <ToastContainer />
      </div>
    </Layout>
  )
}

export default AddCase
