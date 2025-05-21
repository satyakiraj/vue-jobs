<script setup>
import {ref} from 'vue'
import Job from '@/components/jobs.vue'
import jobData from '@/jobs.json'

const jobs = ref(jobData.jobs)
</script>

<template>
  <div class="h-auto mx-4 px-4 py-10 bg-green-100 rounded-md">
    <h1 class="font-bold text-center text-3xl text-green-500">Browse Jobs</h1>

    <div
      class="flex flex-col space-y-6 items-center justify-center 2xl:grid gap-4 grid-cols-3 bg-transparent box-content h-auto px-3"
    >
      <Job v-for="job in jobs" :key="job.id" :job="job"/>
    </div>
  </div>
</template>
