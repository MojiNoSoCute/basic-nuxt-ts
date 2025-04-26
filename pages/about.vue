<script setup lang="ts">
  useHead({
    title: 'About - Nuxt Framework',
    meta: [
      {
        name: 'description',
        content: 'About page of the Nuxt Framework',
      },
      {
        name: 'keywords',
        content: 'nuxt, vue, javascript',
      },
    ]
  })
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
      <div class="max-w-4xl w-full px-6 py-6 bg-white rounded-lg shadow-lg">
        <!-- <NuxtRouteAnnouncer />
        <NuxtWelcome /> -->
        <h1 class="text-3xl text-blue-400 font-bold text-center underline animate-bounce">About Page</h1>
        <p class="text-2xl">About us</p>
      </div>
    </div>
  </template>