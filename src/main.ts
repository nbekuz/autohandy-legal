import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)
app.use(Antd)
app.mount('#app')
