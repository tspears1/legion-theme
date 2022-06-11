import { createApp } from 'vue'
import App from './App.vue'

import { VueScreenSizeMixin } from 'vue-screen-size'

const app = createApp(App)

app.mixin( VueScreenSizeMixin )
app.mount('#app')
