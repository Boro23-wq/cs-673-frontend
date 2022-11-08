import {
  BillingAndRevenueIcon,
  CaseManagementReportsIcon,
  PatientPortalIcon,
  PracticeManagementPortalIcon
} from '@/components/Icons'

export const products = [
  {
    name: 'Case Management Reports',
    description:
      "Generate comprehensive plan of care of client's problems, needs, and desires, based on the client's assessment.",
    icon: CaseManagementReportsIcon
  },
  {
    name: 'Patient portal',
    description:
      'Enable secure online platform to access relevant patient information conveniently, from anywhere.',
    icon: PatientPortalIcon
  },
  {
    name: 'Practice management portal',
    description:
      'Designed to help healthcare practitioners handle billing, patient consultations, inventory, and more.',
    icon: PracticeManagementPortalIcon
  },
  {
    name: 'Billing and Revenues',
    description:
      'Comprehensive billing operations. Ensure customer satisfaction with an accurate billing experience.',
    icon: BillingAndRevenueIcon
  }
]
