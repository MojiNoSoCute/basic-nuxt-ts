<script setup lang="ts">
    const route = useRoute()
    const slug = route.params.slug as string[]
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
      <div class="max-w-4xl w-full px-6 py-6 bg-white rounded-lg shadow-lg">
        <!-- <NuxtRouteAnnouncer />
        <NuxtWelcome /> -->
        <h1 class="text-3xl text-blue-400 font-bold text-center underline animate-bounce">BackEnd Page</h1>
        <p class="text-2xl">BackEnd: {{ $route.params.slug }}</p>
        <ul>
            <li v-for="(item, index) in slug" :key="index" class="text-xl text-gray-700 my-2">item {{ index + 1 }}: {{ item }}</li>
        </ul>
      </div>
    </div>
</template>



<style scoped>

</style>