<script setup lang="ts">
    console.log("Navbar 5555")
</script> //java script or typescript

<template>
    <nav class="bg-white shadow-md px-4 py-2">
        <div class="container mx-auto flex justify-between items-center">
            <!-- logo on left-->
             <div class="flex items-center">
                <NuxtLink to="/" class="flex items-center">
                    <img src="/images/Logo.png" alt="Logo" class="h-10 w-auto mr-2">
                    <span class="fontblod text-xl text-gray-800">Nuxt</span>
                </NuxtLink>
             </div>

             <!-- Menu on right -->
              <ul class="flex space-x-6">
                <li>
                    <NuxtLink 
                    to="/" 
                    class="hover:text-blue-600"
                    exact-active-class="text-blue-600 font-bold">
                    Home
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                    to="/about" 
                    class="hover:text-orange-600"
                    exact-active-class="text-orange-600 font-bold">
                    About
                </NuxtLink>
            </li>
                <li>
                    <NuxtLink 
                    to="/contact" 
                    class="hover:text-green-600"
                    exact-active-class="text-green-600 font-bold">
                    Contact
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                        to="/users/jim" 
                        class="hover:text-pink-600"
                        exact-active-class="text-pink-600 font-bold">
                        User
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                        to="/category" 
                        class="hover:text-pink-600"
                        exact-active-class="text-pink-600 font-bold">
                        Category
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink 
                        to="/backend/d/r/p/1" 
                        class="hover:text-pink-600"
                        exact-active-class="text-pink-600 font-bold">
                        BackEnd
                    </NuxtLink>
                </li>
              </ul>
        </div>
    </nav>
</template> //html

<style scoped>
    nav {
        background-color: #f8f9fa;
        padding: 1rem;
    }
    ul {
        list-style-type: none;
    }
    li {
        display: inline;
        margin-right: 20px;
    }
</style> //css