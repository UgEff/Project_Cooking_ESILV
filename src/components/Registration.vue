<template>
  <h1>Create an Account</h1>
  <div>
    <input type="email" v-model="email" placeholder="Email">
    <p>{{ emailError }}</p>
    <input type="password" v-model="password" placeholder="Mot de passe">
    <p>{{ passwordError }}</p>
    <input type="password" v-model="passwordConfirm" placeholder="Reconfirmer le mot de passe">
    <p>{{ passwordConfirmError }}</p>
    <button @click="register">Register</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const router = useRouter();

const emailError = ref('');
const passwordError = ref('');
const passwordConfirmError = ref('');
const isSubmitted = ref(false);

const validateEmail = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    emailError.value = "Email ou Mot de passe invalide.";
    return false;
  }
  emailError.value = '';
  return true;
};

const validatePassword = () => {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!regex.test(password.value)) {
    passwordError.value = "Email ou Mot de passe invalide.";
    return false;
  }
  passwordError.value = '';
  return true;
};

const register = () => {
  if (!isSubmitted.value) {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (!password.value || password.value !== passwordConfirm.value) {
      passwordConfirmError.value = "Les mots de passe ne correspondent pas.";
    } else {
      passwordConfirmError.value = '';
    }

    if (isEmailValid && isPasswordValid) {
      isSubmitted.value = true;
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
          console.log("Successfully registered");
          router.push({ path: '/Dashboard' });
        })
        .catch((error) => {
          console.log(error.code);
          alert(error.message);
          isSubmitted.value = false;
        });
    }
  }
};
</script>
