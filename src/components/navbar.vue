<script setup>
defineOptions({
  name: 'NavbarComponent',
})

import { RouterLink, useRoute } from 'vue-router'
import logo from '../assets/img/logo.png'

const route = useRoute()

const isActiveLink = (path) => route.path === path
</script>

<template>
  <header class="bg-green-600 w-screen h-auto py-3 flex items-center justify-center space-x-7 z-10">
    <!-- Logo -->
    <img :src="logo" alt="logo" class="h-12 w-12" />

    <!-- Navigation Links -->
    <RouterLink
      to="/"
      :class="[
        isActiveLink('/') ? 'bg-green-800' : 'hover:bg-gray-900',
        'h-8 w-14 px-2 py-1 rounded-lg text-white text-center font-medium',
      ]"
    >
      Home
    </RouterLink>

    <RouterLink
      to="/jobs"
      :class="[
        isActiveLink('/jobs') ? 'bg-green-800' : 'hover:bg-gray-900',
        'h-8 w-14 px-2 py-1 rounded-lg text-white text-center font-medium',
      ]"
    >
      Jobs
    </RouterLink>

    <RouterLink
      to="/jobs/add"
      :class="[
        isActiveLink('/jobs/add') ? 'bg-green-800' : 'hover:bg-gray-900',
        'h-8 w-20 px-2 py-1 rounded-lg text-white text-center font-medium text-nowrap',
      ]"
    >
      Add Job
    </RouterLink>
  </header>
</template>
