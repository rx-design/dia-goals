<template>
  <Card
    class="min-h-full"
    :pt="{
      title: 'text-base',
      subtitle: 'text-xs',
      content: 'text-sm',
    }"
    :pt-options="{
      mergeProps: true,
    }"
  >
    <template #title>
      How to Take Care of Your Mental Health
    </template>
    <template #subtitle>
      Excerpt from typeonebetter.com
    </template>
    <template #content>
      <div>
        <p>
          The first step in taking care of your mental health is keeping yourself informed and realizing that living with T1D can add significant stress to your life.
        </p>
        <p>
          Generally, people with T1D should follow the same physical and mental health self-care recommendations as the general population.
        </p>
        <ul class="list-disc list-inside">
          <li>Stay informed about and practice healthy eating, but leave some room for treats every once in a while.</li>
          <li>Go to bed and wake up at regular hours.</li>
          <li>Do physical activity on a regular basis and aim for an ideal target of 150 minutes per week.</li>
          <li>Do relaxation activities, such as abdominal breathing and yoga.</li>
          <li>Seek social support (family, friends) and medical support (discuss stress, anxiety, depressive symptoms, etc. during appointments) when going through tough times.</li>
        </ul>
        <p>
          Don’t hesitate to discuss your mental health with your healthcare team if needed. It might be necessary, although difficult, to interrupt the regular flow of an appointment and seek help for a mental health issue. If needed, you can also consider getting help from a psychologist or psychiatrist.
        </p>
        <br>
        <p class="text-right">
          Source: typeonebetter.com
        </p>
      </div>
    </template>
    <template #footer>
      <slot />
    </template>
  </Card>
</template>
