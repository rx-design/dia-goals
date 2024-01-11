import { chunk, countBy, isEmpty, sortBy, transform } from 'lodash-es'
import { mean, round } from 'mathjs'
import { isBefore } from 'date-fns'
import { getAllDates, getDate, getDateString, getEndOfWeek, getMidnight, getStartOfWeek } from '~/utils/date'
import type { Goal } from '~/types/goal'
import type { Point } from '~/types/point'
import { GoalType } from '~/types/enums'

function getDailyCompletionRate(goal: Goal) {
  const { completed, startDate, endDate } = goal

  const today = getMidnight()
  const goalEndDate = getDate(endDate)

  const lastDate = isBefore(goalEndDate, today)
    ? goalEndDate
    : today

  const dates = getAllDates(getDate(startDate), lastDate)

  const total = dates
    .filter(d => completed
      .includes(getDateString(d)))

  return total.length / dates.length
}

function getWeeklyCompletionRate(goal: Goal) {
  const { completed, startDate, endDate } = goal

  const thisWeekEnd = getEndOfWeek(getMidnight())
  const lastWeekEnd = getEndOfWeek(getDate(endDate))

  const weekEnd = isBefore(lastWeekEnd, thisWeekEnd)
    ? lastWeekEnd
    : thisWeekEnd

  const weeks = chunk(
    getAllDates(
      getStartOfWeek(getDate(startDate)),
      weekEnd,
    ), 7)

  const total = weeks
    .filter(weekDates => weekDates
      .some(d => completed
        .includes(getDateString(d))))

  return total.length / weeks.length
}

function getCompletionRate(goal: Goal) {
  return goal.type === GoalType.D
    ? getDailyCompletionRate(goal)
    : getWeeklyCompletionRate(goal)
}

function getOverallCompletionRate(goals: Goal[]) {
  const rates = goals.map(getCompletionRate)

  if (isEmpty(rates)) {
    return 0
  }

  return round(mean(rates) * 100)
}

function getRatesCount(rates: number[]) {
  const counted = countBy(rates)

  const transformed = transform(counted, (result, value, key) => {
    result.push({
      x: parseInt(key),
      y: value,
    })
  }, [] as Point[])

  return sortBy(transformed, ['x'])
}

export {
  getOverallCompletionRate,
  getRatesCount,
}
