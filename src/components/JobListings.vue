<script setup>
import {ref, defineProps} from 'vue'
import Job from '@/components/jobs.vue'
import jobData from '@/jobs.json'
const jobs = ref(jobData.jobs)
defineProps({
  limit: Number,
  showButton:{
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div class="h-auto mx-4 px-4 py-10 bg-green-100 rounded-md">
    <h1 class="font-bold text-center text-3xl text-green-500">Browse Jobs</h1>

    <div
      class="flex flex-col space-y-6 items-center justify-center 2xl:grid gap-4 grid-cols-3 bg-transparent box-content h-auto px-3"
    >
      <Job v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job"/>
    </div>
  </div>
  <section class="w-screen h-auto my-5 flex justify-center py-5">
    <a
      class="bg-black text-white w-1/2 text-center py-4 cursor-pointer h-14 tex-xl font-medium rounded-2xl hover:bg-gray-800" v-if="showButton">View
      All
      Jobs</a>
  </section>
</template>
