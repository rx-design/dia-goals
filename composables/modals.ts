import {
  ModalAchievement,
  ModalGoalDetails,
  ModalGoalDetailsEdit,
  ModalGoalsProgress,
  ModalListCategories,
  ModalListCategoryGoals,
  ModalLoginVerification,
  ModalProgress,
  ModalResource,
  ModalTutorial,
} from '#components'
import type { ConfirmationResult } from '@firebase/auth'
import type { Category } from '~/types/category'
import type { Goal } from '~/types/goal'
import type { Resource } from '~/types/resource'

export function useModals() {
  const dialog = useDialog()
  const { t } = useI18n()
  const { gtag } = useGtag()

  const style = {
    width: '90vw',
    height: '90vh',
  }

  function showLoginVerification(result: ConfirmationResult, createVerifier: () => void) {
    dialog.open(ModalLoginVerification, {
      data: {
        result,
      },
      props: {
        contentClass: 'flex-1',
        header: t('modalHeader.loginVerification'),
        modal: true,
        style: {
          ...style,
          height: '50vh',
        },
      },
      onClose(options) {
        if (!options?.data?.isCompleted) {
          createVerifier()
        }
      },
    })
  }

  function showCategories() {
    dialog.open(ModalListCategories, {
      props: {
        contentClass: 'flex-1 !p-0',
        header: t('modalHeader.listCategories'),
        modal: true,
        style,
      },
    })
  }

  function showCategoryGoals(category: Category, cancel: () => void) {
    dialog.open(ModalListCategoryGoals, {
      data: {
        category,
      },
      props: {
        contentClass: 'flex-1 !p-0',
        header: t('modalHeader.listCategoryGoals'),
        modal: true,
        style,
      },
      onClose(options) {
        if (options?.data?.isCompleted) {
          cancel()
        }
      },
    })
  }

  function showGoalDetails(category: Category, goalText: string, cancel: () => void) {
    dialog.open(ModalGoalDetails, {
      data: {
        category,
        goalText,
      },
      props: {
        contentClass: 'flex-1 !p-0',
        header: t('modalHeader.goalDetails'),
        modal: true,
        style,
      },
      onClose(options) {
        if (options?.data?.isCompleted) {
          cancel()
        }
      },
    })
  }

  function showGoalDetailsEdit(goal: Goal, category: Category) {
    dialog.open(ModalGoalDetailsEdit, {
      data: {
        goal,
        category,
      },
      props: {
        contentClass: 'flex-1 !p-0',
        header: t('modalHeader.goalDetailsEdit'),
        modal: true,
        style,
      },
    })
  }

  function showTutorial() {
    dialog.open(ModalTutorial, {
      props: {
        contentClass: 'flex-1 !p-0',
        header: t('modalHeader.tutorial'),
        modal: true,
        style,
      },
    })

    gtag('event', 'tutorial_begin')
  }

  function showProgress(title: string) {
    dialog.open(ModalProgress, {
      data: {
        title: t(title),
      },
      props: {
        contentClass: 'flex-1 !p-0',
        header: t('modalHeader.progress'),
        modal: true,
        style,
      },
    })
  }

  function showGoalsProgress() {
    dialog.open(ModalGoalsProgress, {
      props: {
        contentClass: 'flex-1 !p-0',
        header: t('modalHeader.goalsProgress'),
        modal: true,
        style,
      },
    })
  }

  function showAchievement(achievementUuid: string) {
    dialog.open(ModalAchievement, {
      data: {
        achievementUuid,
      },
      props: {
        contentClass: 'flex-1 !p-0',
        header: t('modalHeader.achievement'),
        modal: true,
        style,
      },
    })

    gtag('event', 'unlock_achievement', {
      'achievement_id': achievementUuid,
    })
  }

  function showResource(resource: Resource) {
    dialog.open(ModalResource, {
      data: {
        name : resource.content,
      },
      props: {
        contentClass: 'flex-1 !p-0',
        header: t('modalHeader.resource'),
        modal: true,
        style,
      },
    })

    gtag('event', 'select_content', {
      'content_type': 'resource',
      'content_id' : resource.uuid,
    })
  }

  return {
    showAchievement,
    showCategories,
    showCategoryGoals,
    showGoalDetails,
    showGoalDetailsEdit,
    showGoalsProgress,
    showLoginVerification,
    showProgress,
    showResource,
    showTutorial,
  }
}
