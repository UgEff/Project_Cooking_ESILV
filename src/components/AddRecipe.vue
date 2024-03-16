<template>
  <div class="add-recipe-container">
    <h2>Ajouter une Recette</h2>
    <img v-if="imageUrl" :src="imageUrl" alt="image de la recette" width="300">
    <input type="file" ref="myfile" @change="upload">
    <button @click="upload">Upload</button>
    <p>url image: {{ imageUrl }}</p>
    
    <!-- ajouter un formulaire pour ajouter une recette avec un titre , ingredients et instructions -->
    <!-- pour chaque ingrédient, ajouter un input pour le nom et un input pour la quantité -->
    <!-- pour chaque instruction, ajouter un textarea -->
    <form @submit.prevent="submitRecipe">
      <div v-for="(ingredient, index) in ingredients" :key="index" class="ingredient-group">
        <input type="text" v-model="ingredient.name" placeholder="nom de l'ingrédient">
        <input type="text" v-model="ingredient.quantity" placeholder="quantité">
        <select v-model="ingredient.unit">
          <option value="g">g</option>
          <option value="kg">kg</option>
          <option value="ml">ml</option>
          <option value="cl">cl</option>
          <option value="l">l</option>
          <option value="cuillère à soupe">cuillère à soupe</option>
          <option value="cuillère à café">cuillère à café</option>
          <option value="pincée">pincée</option>
        </select>
        <button type="button" @click="removeIngredient(index)">Supprimer</button>
      </div>
      <button type="button" @click="addIngredient">Ajouter un ingrédient</button>
      <button type="submit">Ajouter la recette</button>
    </form>
  </div>
</template>

<script>
import { storage } from '../main.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default {
  data() {
    return {
      imageUrl: '',
      // ajouter un tableau pour stocker les ingrédients
      ingredients: [{name: '', quantity: '', unit: ''}],
    };
  },
  methods: {
    upload() {
      // si aucun fichier n'est sélectionné, on ne fait rien
      if (!this.$refs.myfile.files.length) return;
      // récupère le fichier
      const file = this.$refs.myfile.files[0];
      // crée une référence au fichier
      const uploadRef = ref(storage, 'uploads/' + file.name);
      // upload le fichier
      uploadBytes(uploadRef, file).then((snapshot) => {
        // récupère l'url de téléchargement
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          this.imageUrl = downloadURL;
        });
      });
    },

    // ajouter une méthode pour ajouter une recette
    addIngredient() {
      this.ingredients.push({ name: '', quantity: '' , unit: ''});
    },
    removeIngredient(index) {
      this.ingredients.splice(index, 1);
    },
    submitRecipe(){
      console.log(this.ingredients);
    }
  }
};
</script>
