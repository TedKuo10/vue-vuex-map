import { createApp } from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'
import L from 'leaflet'
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
const app = createApp(App)
// app.use(VueAxios, axios)
app.use(store).mount('#app')
