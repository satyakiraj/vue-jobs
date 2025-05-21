<script setup>
import Job from '@/components/jobs.vue'
import {ref} from 'vue'
import jobData from '@/jobs.json'

const jobs = ref(jobData)
</script>

<template>
  <div class="h-auto mx-4 px-4 py-10 bg-green-300 rounded-md">
    <h1 class="font-bold text-center">Browse Jobs</h1>
    <div class="grid gap-6 grid-cols-1 md:grid-cols-3 bg-transparent w-auto h-auto">
      <Job v-for="job in jobs" :key="job.id" :job="job"/>
    </div>
  </div>
</template>
