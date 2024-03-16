// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from 'firebase/auth';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import RecipeList from '../components/RecipeList.vue';
import Contact from '../components/Contact.vue';
import Login from '../components/Login.vue';
import Registration from '../components/Registration.vue';
import AddRecipe from '../components/AddRecipe.vue';
import Dashboard from '../components/Dashboard.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/recipes', component: RecipeList },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/register', component: Registration },
  { path: '/add-recipe', component: AddRecipe},
      

  { path: '/dashboard', 
  // component: () => import('../components/Dashboard.vue'), est une méthode qui permet de charger le composant de manière asynchrone
  component: () => import('../components/Dashboard.vue'),
  // meta est un objet qui permet de définir des propriétés personnalisées pour une route
      meta:{
        requiresAuth: true
      }}, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// beforeEach est une méthode qui s'exécute avant chaque route
router.beforeEach((to, from, next) => {
  // si la route nécessite une authentification
  // record => record.meta.requiresAuth est une méthode qui vérifie si la route nécessite une authentification
  if(to.matched.some(record => record.meta.requiresAuth)) {
    // si l'utilisateur est connecté
    if(getAuth().currentUser){
      // continuez à la page demandée
      next();
    }else{
      alert('You must be logged in to see this page');
      next('/login');
    }
  }else{
    next();
  }
});
export default router;
