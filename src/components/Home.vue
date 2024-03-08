<template>
    <div class="bg-secondary min-h-screen flex flex-col">
      <header class="bg-primary">
        <div class="container mx-auto  flex justify-center items-center h-64 bg-cover" style="background-image: url('../src/assets/pasta.jpg');">
          <div class="text-secondary text-center">
            <h1 class="text-8xl font-bold mb-4 mt-4">Wok and Roll</h1>
            <p class="text-lg">Postez vos délicieuses recettes !</p>
          </div>
        </div>
      </header>
      <main class="container mx-auto px-6 py-8 flex-grow">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div v-for="recipe in recipes" :key="recipe.id" class="bg-white rounded-lg shadow-md overflow-hidden text-primary">
            <div class="relative h-64 overflow-hidden">
              <img :src="recipe.image" :alt="recipe.title" class="absolute h-full w-full object-cover">
            </div>
            <div class="p-4">
              <h3 class="text-xl font-bold mb-2">{{ recipe.title }}</h3>
              <a href="#" class="inline-block bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded">Cliquez ici</a>
            </div>
          </div>
        </div>
      </main>
  
      <footer class="bg-gray-800 py-4 text-center text-white">
        &copy; Wok and Roll {{ currentYear }}
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
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
          },
          {
            id: 1,
            title: 'Couscous',
            image: '../src/assets/couscous.jpg'
          },
          {
            id: 2,
            title: 'Daurade grillé',
            image: '../src/assets/dorada.jpg'
          },
          {
            id: 3,
            title: 'Hot dog',
            image: '../src/assets/hotdog.jpg'
          }
        ]
      }
    }
  }
  </script>