import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'fomantic-ui-css/semantic.css'
import './assets/main.css'
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(CkeditorPlugin)
app.use(createPinia())
app.use(router)

app.mount('#app')
