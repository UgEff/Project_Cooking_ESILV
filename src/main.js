// Corrigez l'importation de Vue pour utiliser la syntaxe Vue 3
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


// Firebase
// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/order
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VUE_APP_API_KEY,
  authDomain: 'webdev-projet-esilv.firebaseapp.com',
  projectId: 'webdev-projet-esilv',
  storageBucket: 'webdev-projet-esilv.appspot.com',
  messagingSenderId: '919638093249',
  appId: '1:919638093249:web:957b7a9a57ebc544cb9340',
}

// Initialize Firebase
initializeApp(firebaseConfig)

// Créez une instance de l'application Vue et utilisez le routeur
createApp(App).use(router).mount('#app')

//Vue.use(VModal)
