export interface User {
  isLoggedIn: boolean
  id: number
  createdAt: string
  modifiedAt: string
  firstName: string
  lastName: string
  phone: string
  email: string
  profileUrl?: string | null | undefined
}

export interface Case {
  caseManagerEmail: string
  categoryTitle: string
  createdAt: string
  doctorEmail: string
  id: number
  modifiedAt: string
  patientEmail: string
  severityLevel: string
  status: string
  subject: string
}
