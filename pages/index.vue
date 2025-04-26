<script setup lang="ts">
  useHead({
    title: 'Home - Nuxt Framework',
    meta: [
      {
        name: 'description',
        content: 'Home page of the Nuxt Framework',
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
        <h1 class="text-3xl text-blue-400 font-bold text-center underline animate-bounce">Hello Nuxt 3</h1>
        <p class="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iste, et eius nobis a itaque consectetur magni, ducimus, vel sequi perferendis esse facilis voluptate? Voluptatem veniam beatae distinctio numquam dolore.</p>
      </div>
    </div>
  </template>