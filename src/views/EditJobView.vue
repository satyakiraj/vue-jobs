<script setup>
import axios from 'axios'
import { onMounted, reactive, toRaw } from 'vue'
import { useToast } from 'vue-toast-notification'
import { useRoute, useRouter } from 'vue-router'

const toast = useToast()
const route = useRoute()
const router = useRouter()
const id = route.params.id

const job = reactive([])

const formData = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
})

onMounted(async () => {
  const response = await axios.get(`/api/jobs/${id}`)
  job.push(response.data)
  formData.type = job[0].type
  formData.title = job[0].title
  formData.description = job[0].description
  formData.salary = job[0].salary
  formData.location = job[0].location
  formData.company.name = job[0].company.name
  formData.company.description = job[0].company.description
  formData.company.contactEmail = job[0].company.contactEmail
  formData.company.contactPhone = job[0].company.contactPhone
})

const editJob = async (e) => {
  e.preventDefault()
  try {
    const response = await axios.put(`/api/jobs/${id}`, toRaw(formData))
    console.log(response.data)
    toast.success('Job updated successfully!', {
      duration: 5000,
    })
    await router.push('/jobs')
  } catch (error) {
    console.log(error)
    toast.error('Error editing job!', {
      duration: 5000,
    })
  }
}
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-24">
      <div class="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
        <form>
          <h2 class="text-3xl text-center font-semibold mb-6">Edit Job</h2>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="type">Job Type</label>
            <select
              id="type"
              v-model="formData.type"
              class="border rounded w-full py-2 px-3"
              name="type"
              required
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Remote">Remote</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2">Job Listing Name</label>
            <input
              id="name"
              v-model="formData.title"
              class="border rounded w-full py-2 px-3 mb-2"
              name="name"
              placeholder="eg. Beautiful Apartment In Miami"
              required
              type="text"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="description">Description</label>
            <textarea
              id="description"
              v-model="formData.description"
              class="border rounded w-full py-2 px-3"
              name="description"
              placeholder="Add any job duties, expectations, requirements, etc"
              rows="4"
            ></textarea>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="type">Salary</label>
            <select
              id="salary"
              v-model="formData.salary"
              class="border rounded w-full py-2 px-3"
              name="salary"
              required
            >
              <option value="Under $50K">under $50K</option>
              <option value="$50K - $60K">$50 - $60K</option>
              <option value="$60K - $70K">$60 - $70K</option>
              <option value="$70K - $80K">$70 - $80K</option>
              <option value="$80K - $90K">$80 - $90K</option>
              <option value="$90K - $100K">$90 - $100K</option>
              <option value="$100K - $125K">$100 - $125K</option>
              <option value="$125K - $150K">$125 - $150K</option>
              <option value="$150K - $175K">$150 - $175K</option>
              <option value="$175K - $200K">$175 - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2"> Location </label>
            <input
              id="location"
              v-model="formData.location"
              class="border rounded w-full py-2 px-3 mb-2"
              name="location"
              placeholder="Company Location"
              required
              type="text"
            />
          </div>

          <h3 class="text-2xl mb-5">Company Info</h3>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="company">Company Name</label>
            <input
              id="company"
              v-model="formData.company.name"
              class="border rounded w-full py-2 px-3"
              name="company"
              placeholder="Company Name"
              type="text"
            />
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="company_description"
              >Company Description</label
            >
            <textarea
              id="company_description"
              v-model="formData.company.description"
              class="border rounded w-full py-2 px-3"
              name="company_description"
              placeholder="What does your company do?"
              rows="4"
            ></textarea>
          </div>

          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="contact_email"
              >Contact Email</label
            >
            <input
              id="contact_email"
              v-model="formData.company.contactEmail"
              class="border rounded w-full py-2 px-3"
              name="contact_email"
              placeholder="Email address for applicants"
              required
              type="email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="contact_phone"
              >Contact Phone</label
            >
            <input
              id="contact_phone"
              v-model="formData.company.contactPhone"
              class="border rounded w-full py-2 px-3"
              name="contact_phone"
              placeholder="Optional phone for applicants"
              type="tel"
            />
          </div>

          <div>
            <button
              class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
              @click="editJob"
            >
              Edit Job
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
