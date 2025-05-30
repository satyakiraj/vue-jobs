<script setup>
import { defineProps, onMounted, reactive } from 'vue'
import axios from 'axios'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import Job from '@/components/jobs.vue'

const state = reactive({
  jobs: [],
  isLoading: true,
})
defineProps({
  limit: Number,
  showButton: {
    type: Boolean,
    default: false,
  },
})

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/jobs')
    state.jobs = response.data
    console.log(response, state.jobs)
  } catch (error) {
    console.log(error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <div class="h-auto mx-4 px-4 py-10 bg-green-100 rounded-md my-7">
    <h1 class="font-bold text-center text-3xl text-green-500">Browse Jobs</h1>

    <div v-if="state.isLoading" class="text-center py-6">
      <PulseLoader color="#4B5563" />
    </div>

    <div v-else class="grid gap-6 grid-cols-1 2xl:grid-cols-3 justify-center px-3 bg-transparent">
      <Job
        v-for="job in state.jobs.slice(0, limit || state.jobs.length)"
        :key="job.id"
        :job="job"
      />
    </div>
  </div>
  <section class="w-screen h-auto my-5 flex justify-center py-5">
    <RouterLink
      v-if="showButton"
      to="/jobs"
      class="bg-black text-white w-1/2 text-center py-4 cursor-pointer h-14 tex-xl font-medium rounded-2xl hover:bg-gray-800"
      >View All Jobs
    </RouterLink>
    >
  </section>
</template>
