import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mdiVue from 'mdi-vue'
import * as mdijs from '@mdi/js'
import '@/assets/scss/index.scss'

const app = createApp(App)

app.use(mdiVue, {
    icons: mdijs
})
    .use(store)
    .use(router)
    .mount('#app')
