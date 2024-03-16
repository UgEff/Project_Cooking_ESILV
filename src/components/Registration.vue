<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
</template>

<script setup>
/* Rajouter condition:
    mot de passe doit contenir:
              - Une majuscule
              - longueur > 8
              - un chiffre
              - un caractère spécial
    Pour le user:
        verifier si l'email est valide
        verifier si le user existe deja
        Autoriser qu'une seule inscription par email
*/ 
  import {ref} from "vue";
  import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
  import { useRouter } from "vue-router";

  const email = ref('');
  const password = ref('');
  const router = useRouter();

  const register = () => {
    createUserWithEmailAndPassword(getAuth(),email.value,password.value)
      .then((data)=>{
        console.log("successfully registered");
        router.push({path:'/Dashboard'});
      })
      .catch((error)=>{
        console.log(error.code);
        alert(error.message)
      });
  };
</script>