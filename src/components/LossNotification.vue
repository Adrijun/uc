<script setup lang="ts">
import { ref, defineComponent, onMounted, watchEffect } from 'vue';
import { type CmsResponse } from '../types/cms-response';
import '../assets/lossnotification.css';
const data = ref<CmsResponse | null>(null);

const BASE_URL = 'https://www1.minuc.se';

watchEffect(async () => {
  const res = await fetch('/api/forlustanmalan?expand=*&expand=*', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const json: CmsResponse = await res.json();
  data.value = json;
});
</script>

<template>
  <div class="relative">
    <div
      v-html="data?.mainContentArea?.expandedValue[0]?.text?.value"
      class="z-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    ></div>
    <img
      :src="
        BASE_URL +
        data?.mainContentArea?.expandedValue[0]?.backgroundImageDesktop?.value
          ?.url
      "
      class="max-w-full"
    />
  </div>
</template>
