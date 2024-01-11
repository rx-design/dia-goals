import { addDoc, collection, deleteDoc, doc, setDoc } from 'firebase/firestore'
import { isAfter, isBefore, isThisWeek, isToday } from 'date-fns'
import { first, isEmpty, last } from 'lodash-es'
import { getDate, getDateString, getMidnight, getWeekDates } from '~/utils/date'
import { getOverallCompletionRate } from '~/utils/rate'
import type { Goal } from '~/types/goal'
import { GoalType } from '~/types/enums'

export function useGoals() {
  const fire = useFirestore()
  const user = useCurrentUser()
  const { categories } = storeToRefs(useGoalsStore())
  const { showProgress } = useModals()

  const list = useCollection<Goal>(() =>
    user.value
      ? collection(fire, 'users', user.value.uid, 'goals')
      : null)

  const dailyGoals = computed(() => list.value
    .filter(goal => goal.type === GoalType.D))

  const weeklyGoals = computed(() => list.value
    .filter(goal => goal.type === GoalType.W))

  const completionRate = computed(() => {
    if (isEmpty(list.value)) {
      return -1
    }

    return getOverallCompletionRate(list.value)
  })

  const completionRateString = computed(() =>
    completionRate.value === -1
      ? 'N/A'
      : `${completionRate.value}%`)

  function create(goal: Goal) {
    if (!user.value) {
      return Promise.resolve(null)
    }

    return addDoc(collection(fire, 'users', user.value.uid, 'goals'), goal)
  }

  function update(goalId: string, goal: Goal) {
    if (!user.value) {
      return Promise.resolve(null)
    }

    return setDoc(doc(fire, 'users', user.value.uid, 'goals', goalId), goal)
  }

  function remove(goalId: string) {
    if (!user.value) {
      return Promise.resolve(null)
    }

    return deleteDoc(doc(fire, 'users', user.value.uid, 'goals', goalId))
  }

  function isDone(goal: Goal) {
    const { completed, type } = goal

    return completed
      .some(dateString => type === GoalType.D
        ? isToday(getDate(dateString))
        : isThisWeek(getDate(dateString), { weekStartsOn: 1 }))
  }

  function isCompleted(goal: Goal) {
    if (isAfter(getMidnight(), getDate(goal.endDate))) {
      return true
    }
    else if (!isDone(goal)) {
      return false
    }

    return goal.type === GoalType.D
      ? isToday(getDate(goal.endDate))
      : isThisWeek(getDate(goal.endDate), { weekStartsOn: 1 })
  }

  function getCategory(goal: Goal) {
    return categories.value
      .find(c => c.uuid === goal.categoryUuid)!
  }

  function getDayProgress(date: Date) {
    if (isEmpty(dailyGoals.value)) {
      return 0
    }

    const dateString = getDateString(date)

    let total = 0
    let done = 0

    for (const goal of dailyGoals.value) {
      const goalStartDate = getDate(goal.startDate)
      const goalEndDate = getDate(goal.endDate)

      if (isBefore(goalEndDate, date) || isAfter(goalStartDate, date)) {
        continue
      }

      if (goal.completed.includes(dateString)) {
        done++
      }

      total++
    }

    if (total === 0) {
      return 0
    }

    return done / total * 100
  }

  function getWeekProgress(date: Date) {
    if (isEmpty(weeklyGoals.value)) {
      return 0
    }

    const weekDates = getWeekDates(date)
    const weekDateStrings = weekDates
      .map(getDateString)

    let total = 0
    let done = 0

    for (const goal of weeklyGoals.value) {
      const goalStartDate = getDate(goal.startDate)
      const goalEndDate = getDate(goal.endDate)

      if (isBefore(goalEndDate, first(weekDates)!) || isAfter(goalStartDate, last(weekDates)!)) {
        continue
      }

      const completed = goal.completed
        .some(dateString => weekDateStrings
          .includes(dateString))

      if (completed) {
        done++
      }

      total++
    }

    if (total === 0) {
      return 0
    }

    return done / total * 100
  }

  function checkProgress(goal: Goal) {
    const date = getMidnight()

    const dayProgress = getDayProgress(date)
    const weekProgress = getWeekProgress(date)

    if (dayProgress === 100 && weekProgress === 100) {
      showProgress('label.allGoalsCompleted')
    }
    else if (goal.type === GoalType.D && dayProgress === 100) {
      showProgress('label.dailyGoalsCompleted')
    }
    else if (goal.type === GoalType.W && weekProgress === 100) {
      showProgress('label.weeklyGoalsCompleted')
    }
  }

  return {
    list,
    dailyGoals,
    weeklyGoals,
    completionRate,
    completionRateString,
    create,
    update,
    remove,
    isDone,
    isCompleted,
    getCategory,
    getDayProgress,
    getWeekProgress,
    checkProgress,
  }
}
