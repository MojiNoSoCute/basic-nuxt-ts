<script setup lang="ts">

</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
      <div class="max-w-4xl w-full px-6 py-6 bg-white rounded-lg shadow-lg">
        <!-- <NuxtRouteAnnouncer />
        <NuxtWelcome /> -->
        <h1 class="text-3xl text-blue-400 font-bold text-center underline animate-bounce">Category Page</h1>
        <p class="text-2xl" v-if="$route.params.slug" >Category {{ $route.params.slug }}</p>
        <p v-else>No Category</p>
      </div>
    </div>
</template>   

<style scoped>

</style>