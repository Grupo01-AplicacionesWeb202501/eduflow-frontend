<script>
import {UserService} from "../services/user.service.js";

export default {
  name: 'SignInTeacherComponent',
  data() {
    return {
      identifier: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async handleSignIn() {
      const userService = new UserService();
      try {
        const teacher = await userService.signInTeacher(this.identifier, this.password);
        console.log("Bienvenido, profesor:", teacher);
        this.$router.push("/dashboard-teacher");
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>

<template>
  <div class="sign-in-teacher p-4 max-w-md mx-auto bg-white rounded-2xl shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-center">Iniciar sesión (Profesor)</h2>
    <form @submit.prevent="handleSignIn">
      <div class="mb-4">
        <label for="identifier" class="block text-sm font-medium">Correo o Código de Profesor</label>
        <input
            v-model="identifier"
            type="text"
            id="identifier"
            class="w-full mt-1 p-2 border rounded-lg"
            placeholder="Ingrese su correo o código"
            required
        />
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium">Contraseña</label>
        <input
            v-model="password"
            type="password"
            id="password"
            class="w-full mt-1 p-2 border rounded-lg"
            placeholder="Ingrese su contraseña"
            required
        />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Iniciar Sesión</button>
    </form>
    <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
  </div>
</template>

<style scoped>
.sign-in-teacher {
  background: #2282d9;
}
</style>