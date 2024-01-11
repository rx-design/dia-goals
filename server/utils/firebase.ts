import { applicationDefault, initializeApp } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { getOverallCompletionRate, getRatesCount } from '~/utils/rate'
import type { Goal } from '~/types/goal'

initializeApp({
  credential: applicationDefault(),
})

const firestore = getFirestore()

async function getRatesList() {
  const list: number[] = []

  const docRefs = await firestore
    .collection('users')
    .listDocuments()

  for (const docRef of docRefs) {
    const doc = await docRef.get()

    const goalsList = await getGoalsList(doc.id)

    list.push(getOverallCompletionRate(goalsList))
  }

  return getRatesCount(list)
}

async function getGoalsList(userId: string) {
  const list: Goal[] = []

  const docRefs = await firestore
    .collection(`users/${userId}/goals`)
    .listDocuments()

  for (const docRef of docRefs) {
    const doc = await docRef.get()

    list.push(<Goal>doc.data())
  }

  return list
}

export {
  getRatesList,
}
