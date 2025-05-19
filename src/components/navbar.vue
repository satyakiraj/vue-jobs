<script setup>
import logo from '../assets/img/logo.png'
</script>

<template>
  <header
    class="bg-green-600 w-screen h-auto box-content py-3 flex items-center justify-center space-x-7 z-10"
  >
    <img :src="logo" alt="logo" class="h-12 w-12"/>
    <button
      class="h-8 w-14 px-2 py-1 box-content rounded-lg text-white border-none text-center focus:bg-green-800 font-medium hover:bg-green-950"
      type="button"
    >
      Home
    </button>
    <button
      class="h-8 w-14 px-2 py-1 box-content rounded-lg text-white border-none text-center focus:bg-green-800 font-medium hover:bg-green-950"
      type="button"
    >
      Jobs
    </button>
    <button
      class="h-8 w-14 px-[10px] py-1 box-content rounded-lg text-white border-none text-center focus:bg-green-800 font-medium text-nowrap hover:bg-green-950"
      type="button"
    >
      Add Job
    </button>
  </header>
</template>
