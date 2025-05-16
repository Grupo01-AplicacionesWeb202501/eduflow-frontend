<script >
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import {UserService} from "../services/user.service.js";


export default {
  name: "SignInStudentComponent",
  setup(){
    const email = ref('');
    const password = ref('');
    const userService = new UserService();
    const toast = useToast();

    const handleSignIn = async () => {
      try {
        await userService.signInStudent(email.value, password.value);
        toast.add({severity: 'success', summary: 'Inicio de sesión exitoso', detail: 'Bienvenido de nuevo.', life: 3000});
      } catch (error) {
        toast.add({severity: 'error', summary: 'Error de inicio de sesión', detail: error.message, life: 3000});
      }
    }
    return { email, password, handleSignIn };
  }
};
</script>

<template>
  <div class="signin-container">
    <h1 class="signin-title">Iniciar Sesión</h1>
    <div class="signin-form">
      <div class="form-group">
        <label for="email">Correo Electrónico</label>
        <input id="email" type="email" v-model="email" placeholder="Introduce tu correo" />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input id="password" type="password" v-model="password" placeholder="Introduce tu contraseña" />
      </div>
      <button class="signin-button" @click="handleSignIn">Iniciar Sesión</button>
    </div>
    <p class="switch-link">
      Don't have an account?
      <router-link to="/sign-up-student">Create one</router-link>
    </p>
  </div>
</template>

<style>
.signin-container {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  text-align: center;
}

.signin-title {
  font-size: 2rem;
  color: #477eb9;
  margin-bottom: 1rem;
}

.signin-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  text-align: left;
}

input {
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.signin-button {
  padding: 0.8rem 1.5rem;
  background-color: #477eb9;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.signin-button:hover {
  background-color: #3b6fa5;
}
</style>