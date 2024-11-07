import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'fomantic-ui-css/semantic.css'
import './assets/main.css'
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue'
import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)
app.use(CkeditorPlugin)
app.use(createPinia())
app.use(VueSweetalert2)
app.use(router)

app.mount('#app')
