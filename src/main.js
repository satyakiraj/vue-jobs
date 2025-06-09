import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
// This code creates the Vue application, adds the router to it, and mounts the app to the DOM element with the ID app
const app = createApp(App)
app.use(router)
app.use(VueToast)
app.mount('#app')
