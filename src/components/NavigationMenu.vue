<script setup lang="ts">
import { ref, defineComponent, onMounted, watchEffect } from 'vue';
import { type NavigationMenuResponse } from '../types/menu';

const menu = ref<NavigationMenuResponse | null>(null);

watchEffect(async () => {
  // CORS
  const res = await fetch('/api/frontendapi/getmenu', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const json: NavigationMenuResponse = await res.json();
  menu.value = json;
});
</script>

<template>
  <div v-if="menu">
    <ul>
      <h2>{{ menu.desktopMenu.products.first.title }}</h2>
      <li
        v-for="item in menu.desktopMenu.products.first.menuItems"
        :key="item.url"
      >
        <a :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
    <ul>
      <h2>{{ menu.desktopMenu.products.second.title }}</h2>
      <li
        v-for="item in menu.desktopMenu.products.second.menuItems"
        :key="item.url"
      >
        <a :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
    <ul>
      <h2>{{ menu.desktopMenu.article.title }}</h2>
      <li v-for="item in menu.desktopMenu.article.menuItems" :key="item.url">
        <a :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
    <ul>
      <h2>{{ menu.desktopMenu.category.title }}</h2>
      <li v-for="item in menu.desktopMenu.category.menuItems" :key="item.url">
        <a :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
  </div>
  <!-- <pre style="text-align: left">{{ menu }}</pre> -->
</template>
