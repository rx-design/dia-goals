import { isEmpty, isUndefined } from 'lodash-es'
import { addDoc, collection } from 'firebase/firestore'
import type { Achievement } from '~/types/achievement'
import type { Goal } from '~/types/goal'
import { GoalType } from '~/types/enums'

interface CategoryAchievements extends Record<Goal['categoryUuid'], {
  created: Achievement['uuid']
  updated: Achievement['uuid']
}> {}

export function useAchievements() {
  const categoryAchievements = ref<CategoryAchievements>({
    'category-00': {
      created: 'achievement-03',
      updated: 'achievement-04',
    },
    'category-01': {
      created: 'achievement-05',
      updated: 'achievement-06',
    },
    'category-02': {
      created: 'achievement-07',
      updated: 'achievement-08',
    },
    'category-03': {
      created: 'achievement-09',
      updated: 'achievement-10',
    },
  })

  const fire = useFirestore()
  const user = useCurrentUser()

  const { list: goalsList, isCompleted } = useGoals()
  const { findAchievement } = useAchievementsStore()
  const { showAchievement } = useModals()

  const list = useCollection<Achievement>(() =>
    user.value
      ? collection(fire, 'users', user.value.uid, 'achievements')
      : null)

  function hasAchievement(uuid: string) {
    return list.value
      .some(a => a.uuid === uuid)
  }

  function create(uuid: string) {
    if (!user.value || hasAchievement(uuid)) {
      return
    }

    const achievement = findAchievement(uuid)

    addDoc(collection(fire, 'users', user.value.uid, 'achievements'), achievement)
      .then(() => showAchievement(uuid))
  }

  function getGoalsListCompleted(goalId: string) {
    return goalsList.value.filter(g =>
      g.id === goalId || isCompleted(g))
  }

  function checkAchievements(goal: Goal) {
    if (!user.value || isEmpty(goalsList.value)) {
      return
    }

    if (isEmpty(list.value)) {
      create('achievement-00')
    }
    else if (isUndefined(goal.id)) {
      const sameCategoryGoals = goalsList.value
        .filter(g => g.categoryUuid === goal.categoryUuid)

      if (sameCategoryGoals.length === 3) {
        const { created: uuid } = categoryAchievements
          .value[goal.categoryUuid]

        create(uuid)
      }
    }
    else if (isCompleted(goal)) {
      const goalsListCompleted = getGoalsListCompleted(goal.id)

      const sameTypeGoals = goalsListCompleted
        .filter(g => g.type === goal.type)

      if (sameTypeGoals.length === 1) {
        goal.type === GoalType.D
          ? create('achievement-01')
          : create('achievement-02')
      }

      const sameCategoryGoals = goalsListCompleted
        .filter(g => g.categoryUuid === goal.categoryUuid)

      if (sameCategoryGoals.length === 3) {
        const { updated: uuid } = categoryAchievements
          .value[goal.categoryUuid]

        create(uuid)
      }
    }
  }

  return {
    list,
    checkAchievements,
  }
}
