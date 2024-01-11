<template>
  <div
    v-if="betterThan !== -1"
    class="mt-5"
  >
    {{ t('label.betterThan', { betterThan }) }}
  </div>
  <chart
    :options="chartOptions"
    class="mt-5"
  />
</template>

<script setup lang="ts">
  import Highcharts from 'highcharts'
  import HighchartsA11y from 'highcharts/modules/accessibility'
  import { Chart } from 'highcharts-vue'
  import { filter, sumBy } from 'lodash-es'
  import { round } from 'mathjs'
  import type { Options, SeriesColumnOptions } from 'highcharts'
  import type { Point } from '~/types/point'

  HighchartsA11y(Highcharts)

  const { data } = useFetch<Point[]>('/api/stats')
  const { completionRate } = useGoals()
  const { t } = useI18n()

  const betterThan = computed(() => {
    if (completionRate.value === -1) {
      return -1
    }
    else if (!data.value) {
      return -1
    }
    else if (data.value.length === 1) {
      return 100
    }

    const worseRates = filter(data.value,
      (o) => o.x < completionRate.value)

    const usersCount = sumBy(data.value, 'y')
    const usersCountBehind = sumBy(worseRates, 'y')

    return round(usersCountBehind / usersCount * 100)
  })

  const chartSeries = computed(() => {
    const series: SeriesColumnOptions = {
      type: 'column',
      data: data.value ?? [],
      color: '#FDBA74',
    }

    return [series]
  })

  const plotLines = computed(() => {
    if (completionRate.value === -1) {
      return undefined
    }

     return [{
       value: completionRate.value,
       label: {
         text: t('label.you'),
       },
     }]
  })

  const chartOptions = computed(() => {
    const options: Options = {
      chart: {
        type: 'column',
      },
      accessibility: {
        enabled: false,
      },
      title: {
        text: '',
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      xAxis: {
        min: 0,
        max: 100,
        title: {
          text: t('label.completionRate'),
        },
        tickLength: 0,
        plotLines: plotLines.value,
      },
      yAxis: {
        min: 0,
        title: {
          text: t('label.usersCount'),
        },
        tickInterval: 1,
      },
      plotOptions: {
        series: {
          enableMouseTracking: false,
        },
      },
      series: chartSeries.value,
    }

    return options
  })
</script>
