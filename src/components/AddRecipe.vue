<template>
    <div class="add-recipe-container">
      <h2>Ajouter une Recette</h2>
      <form @submit.prevent="addRecipe">
        <div class="form-group">
          <label for="title">Titre de la recette</label>
          <input type="text" id="title" v-model="recipe.title" required>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="recipe.description" required></textarea>
        </div>
        <!-- Ajoutez d'autres champs selon le besoin -->
        <button type="submit">Ajouter la Recette</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddRecipe',
    data() {
      return {
        recipe: {
          title: '',
          description: '',
          // Autres champs selon besoin
        }
      };
    },
    methods: {
      addRecipe() {
        console.log("Recette à ajouter :", this.recipe);
        // Logique pour ajouter la recette via une API ou autre méthode
      }
    }
  }
  </script>
  
  <style scoped>
  .add-recipe-container {
    /* Styles du formulaire */
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-group label {
    display: block;
  }
  .form-group input, .form-group textarea {
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }
  button[type="submit"] {
    /* Style du bouton */
  }
  </style>
  