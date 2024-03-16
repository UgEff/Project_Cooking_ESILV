<!--Code HTML -->
<template>
	<div id="app">
		<nav>
			<router-link to="/" class="nav-item">Home</router-link>
			<router-link to ='/recipes' class="nav-item">Livre de recette</router-link>
			<router-link to="/contact" class="nav-item">Contact</router-link>
			<router-link to="/about" class="nav-item">À propos</router-link>
			<router-link to="/dashboard" class="nav-item">Dashboard</router-link>
			<router-link to="/add-recipe" class="nav-item">Ajouter une recette</router-link>

			<div class="connection">
				<router-link to="/login" class="nav-item">Connexion</router-link>
				<router-link to="/register" class="nav-item">Inscription</router-link>

				<button v-if="isConnected" @click="disconnect">Déconnexion</button>
			</div>

		</nav>
		<router-view/>

		
	<!-- composant qui va s'afficher en fonction de l'url -->
	</div>

	<div class="carousel">
			<!-- Ajouter carousel de recette -->	
	</div>

</template>

<!--Code JavaScript -->


<script setup>
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const isConnected = ref(false); // Utilisez isConnected pour le binding conditionnel dans le template

onMounted(() => {
	// Récupère l'état d'authentification
	const auth = getAuth();
	// Met à jour isConnected en fonction de l'état d'authentification
	onAuthStateChanged(auth, user => {
    isConnected.value = !!user; // Met à jour isConnected en fonction de l'état d'authentification
	});
});

const disconnect = async () => {
  await signOut(getAuth()); // Pas besoin de stocker auth dans une variable extérieure
  router.push('/'); // Redirige vers la page d'accueil après déconnexion
};

</script>



<style>
/* Style global pour la navbar */
nav {
	display: flex;
	justify-content: space-around;
	background-color: #34495e;
	padding: 1rem;
}

/* Style pour chaque élément de la navbar */
.nav-item {
	text-decoration: none;
	color: #ecf0f1;
	padding: 0.5rem 1rem;
	border-radius: 5px;
	transition: background-color 0.3s ease;
}

/* Changement du style au survol */
.nav-item:hover {
	background-color: #f9001d;
}
</style>



<!-- Il existe deux composanta en Vue Router :
- RouterLink <router-link>: qui remplace <a href="chemin">Home</a>
- RouterView <router-view>: qui remplace <router-view></router-view> -->

<!--Code CSS -->
<style>
nav a.router-link-active {
  font-weight: bold;
}

nav a {
  text-decoration: none;
  margin-right: 15px;
  color: #000;
}
</style>
