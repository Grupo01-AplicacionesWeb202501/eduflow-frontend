<script>
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import {UserService} from "../services/user.service.js";
import {useRouter} from "vue-router";

export default {
  name: "SignUpStudentComponent",
  setup() {
    const nombre = ref('');
    const correo = ref('');
    const carrera = ref('');
    const cicloActual = ref(1);
    const password = ref('');
    const userService = new UserService();
    const toast = useToast();
    const router = useRouter(); // Inicializar el enrutador

    const handleSignUp = async () => {
      try {
        await userService.signUpStudent(
            nombre.value,
            correo.value,
            carrera.value,
            cicloActual.value,
            password.value
        );
        console.log('Estudiante registrado con éxito.'); // Mensaje en consola
        toast.add({
          severity: 'success',
          summary: 'Registro exitoso',
          detail: 'Estudiante registrado correctamente.',
          life: 3000,
        });

        // Limpiar los campos después del registro
        nombre.value = '';
        correo.value = '';
        carrera.value = '';
        cicloActual.value = 1;
        password.value = '';

        // Redirigir al componente Sign-In
        router.push('/sign-in-student');
      } catch (error) {
        console.error('Error durante el registro:', error); // Mensaje de error en consola
        toast.add({
          severity: 'error',
          summary: 'Error de registro',
          detail: error.message,
          life: 3000,
        });
      }
    };

    return {
      nombre,
      correo,
      carrera,
      cicloActual,
      password,
      handleSignUp,
    };
  },
};
</script>

<template>
  <div class="signup-container">
    <h1 class="signup-title">Registro de Estudiante</h1>
    <div class="signup-form">
      <div class="form-group">
        <label for="nombre">Nombre Completo</label>
        <input id="nombre" type="text" v-model="nombre" placeholder="Introduce tu nombre completo" />
      </div>
      <div class="form-group">
        <label for="correo">Correo Electrónico</label>
        <input id="correo" type="email" v-model="correo" placeholder="Introduce tu correo" />
      </div>
      <div class="form-group">
        <label for="carrera">Carrera</label>
        <input id="carrera" type="text" v-model="carrera" placeholder="Introduce tu carrera" />
      </div>
      <div class="form-group">
        <label for="ciclo_actual">Ciclo Actual</label>
        <input id="ciclo_actual" type="number" v-model="cicloActual" min="1" />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input id="password" type="password" v-model="password" placeholder="Crea una contraseña" />
      </div>
      <button class="signup-button" @click="handleSignUp">Registrar</button>
    </div>
  </div>
</template>

<style>
.signup-container {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  text-align: center;
}

.signup-title {
  font-size: 2rem;
  color: #477eb9;
  margin-bottom: 1rem;
}

.signup-form {
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

.signup-button {
  padding: 0.8rem 1.5rem;
  background-color: #477eb9;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.signup-button:hover {
  background-color: #3b6fa5;
}
</style>