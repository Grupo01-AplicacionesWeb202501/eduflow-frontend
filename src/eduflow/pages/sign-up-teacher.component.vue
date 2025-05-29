<script>
import {UserService} from "../services/user.service.js";

export default {
  name: "SignUpTeacherComponent",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      password: "",
      error: null,
      success: false,
    };
  },
  methods: {
    async handleSignUp() {
      const userService = new UserService();
      try {
        await userService.signUpTeacher(this.name, this.email, this.subject, this.password);
        this.success = true;
        this.error = null;
        this.name = "";
        this.email = "";
        this.subject = "";
        this.password = "";
      } catch (err) {
        this.error = err.message;
        this.success = false;
      }
    },
  },
};
</script>

<template>
  <div class="sign-up-teacher p-4 max-w-lg mx-auto bg-white rounded-2xl shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-center">Registrar Profesor</h2>
    <form @submit.prevent="handleSignUp">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium">Nombre Completo</label>
        <input
            v-model="name"
            type="text"
            id="name"
            class="w-full mt-1 p-2 border rounded-lg"
            placeholder="Ingrese su nombre completo"
            required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium">Correo Electrónico</label>
        <input
            v-model="email"
            type="email"
            id="email"
            class="w-full mt-1 p-2 border rounded-lg"
            placeholder="Ingrese su correo"
            required
        />
      </div>
      <div class="mb-4">
        <label for="subject" class="block text-sm font-medium">Materia</label>
        <input
            v-model="subject"
            type="text"
            id="subject"
            class="w-full mt-1 p-2 border rounded-lg"
            placeholder="Ingrese la materia que enseña"
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
            placeholder="Ingrese una contraseña segura"
            required
        />
      </div>
      <button type="submit" class="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">Registrar</button>
    </form>
    <p v-if="error" class="text-red-500 mt-2 text-center">{{ error }}</p>
    <p v-if="success" class="text-green-500 mt-2 text-center">¡Registro exitoso! Puede iniciar sesión ahora.</p>
  </div>
</template>

<style scoped>
.sign-up-teacher {
  background: #0e7eb9;
}
</style>