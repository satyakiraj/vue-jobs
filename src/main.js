import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
// This code creates the Vue application, adds the router to it, and mounts the app to the DOM element with the ID app
const app = createApp(App)
app.use(router)
app.mount('#app')
