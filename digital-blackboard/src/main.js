import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

// main.js or your entry file
import 'vuetify/dist/vuetify.min.css';


createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
