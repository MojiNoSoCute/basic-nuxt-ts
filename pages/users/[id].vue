<script setup lang="ts">
  //usefetch (แบบขยัน)
  // const { data: users, status, error, refresh , clear } =  await useFetch<User[]>('https://jsonplaceholder.typicode.com/users', {
  //   onRequest({ request, options }) {
  //     console.log( 'Request:', request)
  //     console.log( 'Data', users.value)
  //   },
  //   onRequestError({ request, options, error }) {
  //     console.log( 'Request Error:', error)
  //   },
  //   onResponse({ request, response, options }) {
  //     console.log( 'Response:', response)
  //   },
  //   onResponseError({ request, response, options }) {
  //     console.log( 'Response Error:', response)
  //   }
  // })

  //แบบง่ายๆ
  const { data: users, status, error } = await useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  )

  // console.log('users', users.value)

</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen py-2">
      <div class="max-w-4xl w-full px-6 py-6 bg-white rounded-lg shadow-lg">
        <!-- <NuxtRouteAnnouncer />
        <NuxtWelcome /> -->
        <h1 class="text-3xl text-blue-400 font-bold text-center underline animate-bounce">User Page</h1>
        <p class="text-2xl">Hello {{ $route.params.id }}</p>
        <h1 class="text-2xl text-center my-6">รายชื่อผู้ใช้งาน</h1>
        <table>
          <thead class='bg-gray-50'>
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">id</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in users" :key="user.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.name }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.email }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ user.phone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>



<style scoped>

</style>