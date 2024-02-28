import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import firebase from './firebase'
// import 'themify-icons/css/themify-icons.css';

const app = createApp(App)
app.use(router).mount('#app')
// app.use(firebase)
