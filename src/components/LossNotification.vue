<script setup lang="ts">
import { ref, defineComponent, onMounted, watchEffect } from 'vue';
import { type CmsResponse } from '../types/cms-response';

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
  <div v-if="data">
    <div v-html="data.mainContentArea.expandedValue[0].text.value" />
    <img
      :src="
        BASE_URL +
        data.mainContentArea.expandedValue[0].backgroundImageDesktop.value.url
      "
    />
  </div>
  <!-- <pre style="text-align: left">{{ data }}</pre> -->
</template>
