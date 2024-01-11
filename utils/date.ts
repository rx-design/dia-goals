import {
  type Locale,
  addDays,
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  format,
  formatDuration,
  formatISO,
  intervalToDuration,
  parseISO,
  startOfToday,
  startOfWeek,
  subWeeks,
} from 'date-fns'

function getDate(dateString: string) {
  return parseISO(dateString)
}

function getDateString(date: Date) {
  return formatISO(date, {
    representation: 'date',
  })
}

function getTimeString(date: Date, locale: Locale) {
  return format(date, 'p', {
    locale,
  })
}

function getWeekDayString(date: Date, locale: Locale) {
  return format(date, 'EEEEEE', {
    locale,
  })
}

function getMonthDayString(date: Date, locale: Locale) {
  return format(date, 'd', {
    locale,
  })
}

function getMonthString(date: Date, locale: Locale) {
  return format(date, 'LLLL yyyy', {
    locale,
  })
}

function getDurationDays(start: Date, end: Date) {
  const { days } = intervalToDuration({
    start,
    end,
  })

  return (days ?? 0) + 1
}

function getDurationWeeks(start: Date, end: Date) {
  const { weeks } = intervalToDuration({
    start,
    end,
  })

  return (weeks ?? 0) + 1
}

function getDurationDaysEnd(date: Date, n: number) {
  return addDays(date, n)
}

function getDurationDaysString(days: number, locale: Locale) {
  return formatDuration({ days }, { locale })
}

function getDurationWeeksString(weeks: number, locale: Locale) {
  return formatDuration({ weeks }, { locale })
}

function getStartOfWeek(date: Date) {
  return startOfWeek(date, { weekStartsOn: 1 })
}

function getEndOfWeek(date: Date) {
  return endOfWeek(date, { weekStartsOn: 1 })
}

function getWeekDates(date: Date) {
  return eachDayOfInterval({
    start: getStartOfWeek(date),
    end: getEndOfWeek(date),
  })
}

function getAllDates(start: Date, end: Date) {
  return eachDayOfInterval({
    start,
    end,
  })
}

function getPrevWeek(date: Date) {
  return subWeeks(date, 1)
}

function getNextWeek(date: Date) {
  return addWeeks(date, 1)
}

function getMidnight() {
  return startOfToday()
}

export {
  getDate,
  getDateString,
  getTimeString,
  getWeekDayString,
  getMonthDayString,
  getMonthString,
  getDurationDays,
  getDurationWeeks,
  getDurationDaysEnd,
  getDurationDaysString,
  getDurationWeeksString,
  getStartOfWeek,
  getEndOfWeek,
  getWeekDates,
  getAllDates,
  getPrevWeek,
  getNextWeek,
  getMidnight,
}
