<script setup>
import Hero from '@/components/hero.vue'
import HomeCards from '@/components/homeCards.vue'
import JobListings from '@/components/JobListings.vue'
</script>

<template>
  <Hero />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>
