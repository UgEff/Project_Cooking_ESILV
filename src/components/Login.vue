<template>
    <h1>Connexion</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Mot de passe" v-model="password"/></p>
    <p v-if="errMsg">{{errMsg}}</p>
    <p><button @click="login">Connexion</button></p>
  </template>
  
  <script setup>
  import {ref} from "vue";
  import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
  import { useRouter } from "vue-router";

  const email = ref('');
  const password = ref('');
  const router = useRouter();
  const errMsg = ref('');

  const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email.value,password.value)
      .then((data)=>{
        console.log("successfully signed in");
        console.log(auth.currentUser)
        router.push({path:'/Dashboard'});
      })
      .catch((error)=>{
        console.log(error.code);
        switch(error.code){
          default:
            errMsg.value = "Identifiants ou mot de passe incorrects";
        }
      });
  };
  </script>
  
  <style scoped>
  </style>
  