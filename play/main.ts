import { createApp } from 'vue'
import App from './app.vue'

import jimsencom from '@jimsencom/components'
const app = createApp(App)
app.use(jimsencom)
app.mount('#app')
