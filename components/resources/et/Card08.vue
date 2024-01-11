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
      Kuidas hoolitseda oma vaimse tervise eest
    </template>
    <template #subtitle>
      Katkend saidilt typeonebetter.com
    </template>
    <template #content>
      <div>
        <p>
          Esimeseks sammuks vaimse tervise eest hoolitsemisel on enda informeerimine ja teadvustamine, et 1. tüüpi diabeediga elamine võib lisada märkimisväärset stressi sinu ellu.
        </p>
        <p>
          Üldiselt peaksid 1. tüüpi diabeediga inimesed järgima samu füüsilise ja vaimse tervise enesehoolduse soovitusi nagu üldine elanikkond.
        </p>
        <ul class="list-disc list-inside">
          <li>Ole teadlik ja praktiseeri tervislikku toitumist, kuid jäta aeg-ajalt ruumi ka maiustustele.</li>
          <li>Mine magama ja ärka regulaarsetel aegadel.</li>
          <li>Tee regulaarselt füüsilist tegevust ja püüa saavutada ideaalne eesmärk 150 minutit nädalas.</li>
          <li>Tee lõdvestumise tegevusi, nagu kõhuhingamine ja jooga.</li>
          <li>Otsi sotsiaalset tuge (pere, sõbrad) ja meditsiinilist tuge (räägi stressist, ärevusest, depressiivsetest sümptomitest jne arstigavisiidid ajal), kui läbid raskeid aegu.</li>
        </ul>
        <p>
          Ära kõhkle rääkimast oma vaimsest tervisest oma tervishoiumeeskonnaga, kui see on vajalik. Võib olla vajalik, kuigi raske, katkestada arstivisiidi tavaline kulg ja otsida abi vaimse tervise küsimustega. Vajadusel võib kaaluda abi saamist ka psühholoogilt või psühhiaatrilt.
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
