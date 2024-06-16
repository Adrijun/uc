<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue';
import { type NavigationMenuResponse } from '../types/menu';

const menu = ref<NavigationMenuResponse | null>(null);

watchEffect(async () => {
  // This is a watcher that runs the code inside the function whenever the dependencies change
  // CORS
  const res = await fetch('/api/frontendapi/getmenu', {
    // This is the URL that the request is sent to
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const json: NavigationMenuResponse = await res.json(); // This is the response from the server
  menu.value = json;
});

const formattedMenu = computed(() => {
  // This is a computed property that returns the value of the menu
  if (!menu.value) return []; // If the menu is not available, return an empty array
  return [
    // Otherwise, return an array of objects
    {
      label: menu.value.desktopMenu.products.first.title,
      items: menu.value.desktopMenu.products.first.menuItems.map(
        (item: { name: string; url: string }) => ({
          label: item.name,
          url: item.url,
        })
      ),
    },
    {
      label: menu.value.desktopMenu.products.second.title,
      items: menu.value.desktopMenu.products.second.menuItems.map(
        (item: { name: string; url: string }) => ({
          label: item.name,
          url: item.url,
        })
      ),
    },
    {
      label: menu.value.desktopMenu.article.title,
      items: menu.value.desktopMenu.article.menuItems.map(
        (item: { name: string; url: string }) => ({
          label: item.name,
          url: item.url,
        })
      ),
    },
    {
      label: menu.value.desktopMenu.category.title,
      items: menu.value.desktopMenu.category.menuItems.map(
        (item: { name: string; url: string }) => ({
          label: item.name,
          url: item.url,
        })
      ),
    },
  ];
});
</script>

<template>
  <div class="">
    <PanelMenu :model="formattedMenu" class="w-full md:w-80" />
  </div>
</template>
