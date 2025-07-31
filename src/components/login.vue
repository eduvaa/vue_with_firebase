<template>
  <div>
    <h2>Kirjaudu sisään</h2>
    <form @submit.prevent="login">
    <div>
      <input type="email" v-model="email" placeholder="Email" />
    </div>
    <div>
      <input type="password" v-model="password" placeholder="Password" />
    </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/')
  } catch (err) {
    error.value = 'Wrong email or password'
  }
}
</script>

<style scoped>

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 250px;
}

input {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.5rem;
  background-color: #6200ea;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #3700b3;
}

.error {
  color: red;
  margin-top: 1rem;
}
</style>