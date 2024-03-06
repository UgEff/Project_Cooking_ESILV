// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import { getAuth } from 'firebase/auth';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import RecipeList from '../components/RecipeList.vue';
import Contact from '../components/Contact.vue';
import Login from '../components/Login.vue';
import Registration from '../components/Registration.vue';
import Dashboard from '../components/Dashboard.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/recipes', component: RecipeList },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/register', component: Registration },

  { path: '/dashboard', 
  component: () => import('../components/Dashboard.vue'),
      meta:{
        requiresAuth: true
      }}, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(getAuth().currentUser){
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
