<script setup>
import {defineProps} from 'vue'

defineProps({
  job: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    class="mx-5 my-10 h-auto w-[55vh] rounded-lg border-2 bg-white px-3 py-3 shadow-2xl md:w-[50vh]"
  >
    <h6 class="font-normal text-emerald-500">{{ job.type }}</h6>
    <h2 class="font-semibold text-green-500">{{ job.title }}</h2>
    <p class="my-4 font-normal text-wrap">{{ job.description }}</p>
    <p class="mb-3 text-emerald-500">{{ job.salary }}</p>

    <hr class="mb-3 border-t-2 border-gray-300"/>

    <div class="flex w-full flex-row items-center justify-between">
      <p class="font-medium text-orange-500">{{ job.location }}</p>
      <a
        class="cursor-pointer rounded bg-emerald-500 px-4 py-1 text-white transition hover:bg-emerald-600"
      >
        Read More
      </a>
    </div>
  </div>
</template>
