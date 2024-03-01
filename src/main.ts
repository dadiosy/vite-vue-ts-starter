import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '/@/App.vue'
import router from '/@/router'

import '/@/styles/global.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

app.config.globalProperties.nightNightSix = 996

const vuetify = createVuetify({
  components,
  directives,
})
app.use(router)
app.use(createPinia())
app.use(vuetify)
app.mount('#app')
