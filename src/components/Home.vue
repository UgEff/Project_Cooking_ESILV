<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
      
  
      <main class="container mx-auto px-6 py-8 flex-grow">
        <h1 class="text-3xl font-bold mb-4 text-primary text-center">Top 5 des recettes pendant le Ramadan</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="recipe in recipes" :key="recipe.id" class="bg-white rounded-lg shadow-md overflow-hidden text-primary">
            <img :src="recipe.image" alt="Recipe Image" class="w-full h-40 object-cover">
            <div class="p-4">
              <h3 class="text-xl font-bold mb-2">{{ recipe.title }}</h3>
              <a href="#" class="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">View Recipe</a>
            </div>
          </div>
        </div>
      </main>
  
      <footer class="bg-gray-800 py-4 text-center text-white">
        &copy; RecipeSite {{ currentYear }}
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
            image: 'https://via.placeholder.com/400x300'
          },
          {
            id: 2,
            title: 'Saumon grillé',
            image: 'https://via.placeholder.com/400x300'
          },
          {
            id: 3,
            title: 'Gâteau au hocolat',
            image: 'https://via.placeholder.com/400x300'
          }
        ]
      }
    }
  }
  </script>