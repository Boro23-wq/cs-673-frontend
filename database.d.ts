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
  caseNotes?: Note[]
  solutions?: Solution[]
  milestones?: Milestone[]
}

export interface Note {
  id: number
  createdAt: string
  modifiedAt: string
  comment: string
  caseId: number
  case: Case
}

interface Solution {
  id: number
  createdAt: string
  modifiedAt: string
  subject: string
  investigation: string
  resolution: string
  case: Case
  caseId: number
}

interface Milestone {
  id: number
  createdAt: string
  modifiedAt: string
  description: string
  case: Case
  caseId: number
}
