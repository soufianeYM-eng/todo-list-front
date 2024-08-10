export type StatusType = 'New' | 'In Progress' | 'Done'

export interface Task {
  id: number
  name: string
  description: string
  status: StatusType
  date: string
}
