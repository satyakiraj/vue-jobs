<script setup>
defineOptions({
  name: 'JobCard',
})
import { computed, defineProps, ref } from 'vue'

const props = defineProps({
  job: {
    type: Object,
    required: true,
  },
})

const showDescription = ref(false)

const toggleDescription = (e) => {
  showDescription.value = !showDescription.value
  e.target.innerText = showDescription.value ? 'Show Less' : 'More'
}

const truncatedDescription = computed(() => {
  let description = props.job.description
  if (!showDescription.value) {
    return description.slice(0, 80) + '...'
  }
  return description
})
</script>

<template>
  <div
    class="mx-5 my-10 h-auto w-[55vh] rounded-lg border-2 bg-white px-3 py-3 shadow-2xl md:w-[50vh]"
  >
    <h6 class="font-normal text-emerald-500">{{ job.type }}</h6>
    <h2 class="font-semibold text-green-500">{{ job.title }}</h2>
    <p class="my-4 font-normal text-wrap inline-block">{{ truncatedDescription }}</p>
    <a class="mb-4 font-medium text-green-500 cursor-pointer" @click="toggleDescription">More</a>
    <p class="mb-3 text-emerald-500">{{ job.salary }}</p>

    <hr class="mb-3 border-t-2 border-gray-300" />

    <div class="flex w-full flex-row items-center justify-between">
      <p class="font-medium text-orange-500">
        <i class="pi pi-map-marker"></i>
        {{ job.location }}
      </p>
      <a
        class="cursor-pointer rounded bg-emerald-500 px-4 py-1 text-white transition hover:bg-emerald-600"
      >
        Read More
      </a>
    </div>
  </div>
</template>
