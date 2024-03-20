<template>
  <div class="bg-white min-h-screen flex flex-col">
    <header class="bg-primary">
      <div class="h-screen bg-tertiary bg-cover" style="background-image: url('../src/assets/cooking.jpg');">
        <div class="container mx-auto flex justify-center items-center h-full">
          <div class="text-tertiary text-center -mt-40 relative p-8 bg-black bg-opacity-50 rounded-lg">
            <h1 class="text-9xl font-bold mb-8 mt-8">Wok and Roll</h1>
            <p class="text-4xl">Cuisinez, Postez, Savourez !</p>
          </div>
        </div>
      </div>
    </header>
    <main class="container mx-auto px-24 py-16 flex-grow flex flex-col text-center">
      <div class="flex justify-center mb-16">
          <div class="max-w-8xl">
            <div class="flex items-center space-x-8">
              <div class="w-2/5 pr-8">
                <div class="bg-white rounded-lg shadow-md p-8 h-full">
                  <h2 class="text-3xl font-bold mb-4">Partagez vos recettes !</h2>
                  <p class="text-gray-700 text-lg mb-6">
                    Envie de partager vos créations culinaires avec la communauté ? N'hésitez pas à poster vos recettes préférées pour inspirer les autres gourmets.
                  </p>
                  <p class="text-gray-700 text-lg">
                    Que ce soit des plats traditionnels, des recettes végétariennes ou encore des desserts gourmands, tout le monde trouvera son bonheur. Rejoignez notre communauté de passionnés de cuisine et faites profiter les autres de vos talents culinaires !
                  </p>
                </div>
              </div>
              <div class="w-3/5 pl-8 flex">
                <button class="bg-secondary text-white text-2xl font-bold py-6 px-8 rounded-lg shadow-md hover:bg-primary transition-colors duration-300">
                  <span class="flex items-center">
                    Poster ma recette
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div> 
        <div class="text-center text-4xl font-bold text-gray-700 mt-8 bg-tertiary rounded-lg shadow-lg py-6 px-8">
          Nos meilleures recettes
        </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-24">
        <div v-for="recipe in recipes" :key="recipe.id" class="bg-white rounded-lg shadow-md overflow-hidden text-primary">
          <div class="relative h-72 overflow-hidden">
            <img :src="recipe.image" :alt="recipe.title" class="absolute h-full w-full object-cover" />
          </div>
            <div class="p-6">
            <h3 class="text-2xl font-bold mb-4">{{ recipe.title }}</h3>
            <router-link :to="{ name: 'RecipeList' }" class="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-lg">
              Livre de recettes
            </router-link>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-primary py-6 text-center text-white">
      &copy; Wok and Roll {{ currentYear }}
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [
        {
          id: 1,
          title: 'Pâtes carbonara',
          image: '../src/assets/pasta.jpg'
        },
        {
          id: 2,
          title: 'Saumon grillé',
          image: '../src/assets/salmon.jpg'
        },
        {
          id: 3,
          title: 'Gâteau au chocolat',
          image: '../src/assets/chocolate.jpg'
        }
      ]
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>