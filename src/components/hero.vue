<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    default: 'Vue Jobs',
  },
  subtitle: {
    type: String,
    default: 'Find the Vue job that fits your skills and needs',
  },
})
</script>
<template>
  <div class="bg-green-600 w-full h-auto flex flex-col items-center justify-center">
    <h1 class="font-semibold fluid-text text-center mb-2 text-white">{{ title }}</h1>
    <p class="text-white fluid-text-sm text-wrap font-medium">
      {{ subtitle }}
    </p>
  </div>
</template>
