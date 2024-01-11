import { getRatesList } from '~/server/utils/firebase'

export default defineEventHandler(async () => {
  return await getRatesList()
})
