<template>
  <div>
    <h1>Welcome!!</h1>
    <p>You are logged in!</p>
    <button @click="logout">Log Out</button>
  </div>
</template>

<script setup>
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = async () => {
  await signOut(auth)
  router.push('/login')
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

button {
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #d32f2f;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #b71c1c;
}
</style>