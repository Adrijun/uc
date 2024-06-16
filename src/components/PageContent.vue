<script setup lang="ts">
import NavigationMenu from './NavigationMenu.vue';
import SideContent from './SideContent.vue';
</script>

<template>
  <div class="py-8">
    <div class="mx-auto max-w-7xl pr-6 lg:pr-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-3 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <div class="lg:pr-4">
          <div class="min-h-96 mb-8"><NavigationMenu /></div>

          <SideContent />
        </div>
        <div class="col-span-2">
          <div class="text-base leading-7 text-gray-100 lg:max-w-lg">
            <h1
              class="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl"
            >
              Hur funkar Förlustanmälan?
            </h1>
            <div class="max-w-xl">
              <p class="mt-6">
                Om du förlorat ditt ID-kort, körkort eller pass bör du anmäla
                det direkt till oss på UC. Då minskar risken för dig att bli
                utsatt för bedrägerier. Alla som är folkbokförda i Sverige, och
                är över 16 år, kan förlustanmäla borttappad eller stulen
                ID-handling till oss på UC. Det gör du genom att ringa vår
                automatiska telefontjänst, dygnet runt, 0900-101 20 30. Samtalet
                kostar 95 kr. Tjänsten fungerar inte med kontantkort. Beställer
                du UC ID-Skydd så bjuder vi dig på Förlustanmälningsavgiften (95
                kr) - för att beställa, ring UC Kundservice på telefon: 0771-20
                22 77.
              </p>
              <h2
                class="mt-2 text-2xl font-bold tracking-tight text-gray-300 sm:text-2xl"
              >
                Förlustanmälan - en enkel åtgärd som ger bra skydd.
              </h2>
              <p class="mt-8">
                Du ringer till UC automatiska telefontjänst och anmäler
                borttappad eller stulen ID-handling. Dygnet runt. Samtalet
                kostar 95 kr, vilket dras på din telefonräkning. Vi lägger in en
                notering om förlorad ID-handling i din kreditupplysning. När ett
                företag tar en kreditupplysning från UC på dig ser de att du
                förlorat din ID-handling. På så sätt kan företaget upptäcka om
                personen som använder din ID-handling försöker missbruka den. Du
                själv kan dock legitimera dig med annan eller ny legitimation.
                Vår notering om förlorad ID-handling ligger kvar i två år. Du
                kan närsomhelst återkalla uppgifterna om du tex själv hittar din
                ID-handling. Vill du häva din spärr använder du den blankett du
                fick skickad till dig när spärren aktiverades. Pass och andra
                ID-handlingar bör även förlustanmälas hos Polisen för att det
                ska spärras som resehandling.
              </p>
              <p class="mt-8">
                När vi registrerat förlustanmälan i din kreditupplysning gör
                kreditgivare en extra kontroll. Då kan de vara säkra på att det
                är du, och ingen annan, som ansöker om en kredit. Och du kan
                vara säker på att ingen okänd kan använda din ID-handling utan
                risk att kontrolleras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
