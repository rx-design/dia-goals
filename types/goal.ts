import { GoalType } from '~/types/enums'

export interface Goal {
  id?: string
  categoryUuid: string
  text: string
  type: GoalType
  startDate: string
  endDate: string
  reminderTime: string
  completed: string[]
}
