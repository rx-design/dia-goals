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
      Mida süüa, kui sul on esimest tüüpi diabeet
    </template>
    <template #subtitle>
      Autor: Mary Jo DiLonardo
      <br>
      Meditsiiniliselt üle kontrollinud: Michael Dansinger, MD
    </template>
    <template #content>
      <div>
        <p>
          On oluline süüa tervislikku toitu, kui sul on 1. tüüpi diabeet. See aga ei tähenda, et sa ei saaks nautida maitsvat toitu..
        </p>
        <br>
        <p class="font-semibold">
          Miks toitumine on oluline
        </p>
        <p>
          1. tüüpi diabeedi korral lõpetab sinu keha insuliini tootmise. Seega võtad igapäevaselt insuliini kas süstide või pumba abil. On oluline jälgida ka veresuhkru taset.
          <br>
          Insuliin on ainult osa suurest pildist. Toitumine ja liikumine mängivad samuti olulist rolli veresuhkru taseme stabiilsena hoidmisel. Kui teed tervislikke toiduvalikuid ja sööd päeva jooksul ühtlasi koguseid, võib see aidata kontrollida veresuhkrut. Samuti võib see vähendada riski selliste diabeediga seotud probleemide nagu südamehaigused, neeruhaigused ja närvikahjustused, tekkeks.
        </p>
        <br>
        <p class="font-semibold">
          Mida süüa
        </p>
        <p>
          Mõned eksperdid arvasid varem, et eksisteerib selline asi nagu "diabeedidieet". Arvati, et inimesed, kellel on diabeet, peaksid vältima kõiki suhkruga toite või lõpetama osade toitude söömise täielikult. Tegelikkuses võid 1. tüüpi diabeedi korral süüa sama tervislikku toitu nagu kõik teisedki.
          <br>
          Järgi mõningaid üldisi juhiseid:
        </p>
        <ul class="list-disc list-inside">
          <li>Söö vähem ebatervislikku rasva. Vähenda küllastunud rasvu, mida leidub rasvastes lihades nagu peekon ja tavaline veiseliha, samuti täispiimas ja võis. Ebatervislikud rasvad suurendavad südamehaiguste riski. Diabeedi korral on sul keskmisest kõrgem risk südamehaigusteks. Tee nutikaid toiduvalikuid, et seda riski vähendada.</li>
          <li>Saa piisavalt kiudaineid. See võib aidata kontrollida sinu veresuhkrut. Kiudaineid saad täisteratoodetest, ubadest, puu- ja köögiviljadest. Proovi saada 25-30 grammi päevas.</li>
        </ul>
        <p>
          Need kõrge kiudainesisaldusega toidud on alati paremad valikud kui madala kiudainesisaldusega süsivesikud nagu rafineeritud 'valged' teraviljad ja töödeldud suhkrurikkad toidud.
        </p>
        <br>
        <p class="font-semibold">
          Süsivesikute lugemine
        </p>
        <p>
          Süsivesikud on sinu keha peamine energiaallikas. Saad neid paljudest toitudest, nagu näiteks teraviljad (pasta, leib ja küpsised), puuviljad ja köögiviljad, piimatooted ning suhkrud.
          <br>
          Süsivesikud tõstavad sinu veresuhkru taset kiiremini kui ükski muu toit. Mitu ja millist süsivesikutega toitu sa sööd, võib mõjutada seda, kui hästi sa diabeeti kontrollida suudad.
          <br>
          Süsivesikute lugemine aitab sul jälgida, kui palju süsivesikuid sa sööd. Sa võid koostööd teha oma arstiga, et välja selgitada, kui palju gramme süsivesikuid peaksid iga söögikorra ja vahepalaga sööma. Sa võid kasutada pakendi silte, mõnda äppi või muud viidet, et üles lugeda süsivesikute grammid toitudes.
        </p>
        <br>
        <p class="font-semibold">
          Suhkur ja suhkruasendajad
        </p>
        <p>
          Mõned inimesed arvavad, et suhkur "põhjustab" diabeeti. 1. tüüpi diabeet on aga põhjustatud geneetikast ja muudest teguritest. Siiski on paljudes magusates toitudes palju süsivesikuid, mis võib mõjutada sinu veresuhkrut.
          <br>
          Kui toit on "suhkruvaba", see ei tähenda, et selles on vähem süsivesikuid või kaloreid. Loe silti, et saaksid teada, kui palju süsivesikuid sa saad. Võid kaaluda toite ja jooke, mis kasutavad vähese kalorsusega või kunstlikke magusaineid. Need võivad rahuldada su magusaisu ilma lisasüsivesikute ja kaloriteta.
        </p>
        <br>
        <p class="font-semibold">
          Diabeedi "supertoidud"
        </p>
        <p>
          Ameerika Diabeedi Assotsiatsioon soovitab süüa järgnevaid maitsvaid tooteid. Need on väikese süsivesikusisaldusega (tuntud ka kui madala glükeemilise indeksiga toidud). Ning need on rikkad oluliste toitainete poolest, nagu näiteks kaltsium, kaalium, kiudained, magneesium ja teised vitamiinid.
        </p>
        <ul class="list-disc list-inside">
          <li>Oad</li>
          <li>Tume ohelised lehtköögiviljad</li>
          <li>Tsitrusviljad</li>
          <li>Bataat</li>
          <li>Marjad</li>
          <li>Tomatid</li>
          <li>Omega-3 rasvhapete rohked kalad (nagu lõhe)</li>
          <li>Täisteratooted</li>
          <li>Pähklid</li>
          <li>Rasvavabad jogurtid ja piimad</li>
        </ul>
        <br>
        <p class="text-right">
          Allikas: WebMD
        </p>
      </div>
    </template>
    <template #footer>
      <slot />
    </template>
  </Card>
</template>
