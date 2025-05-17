<script>
export default {
  name: "LoginComponent",
};
</script>

<template>
  <div class="dashboard flex items-center justify-center min-h-screen px-4">
    <div class="bg-white p-8 sm:p-10 md:p-12 rounded-xl shadow-2xl w-full max-w-lg text-center">
      <h1 class="text-4xl font-bold text-blue-600 mb-8">¡Bienvenido!</h1>
      <p class="text-xl text-gray-700 mb-10">Seleccione su portal para iniciar sesión:</p>
      <div class="space-y-6 sm:space-y-0 sm:flex sm:space-x-6 justify-center">
        <router-link
            to="/sign-in-student"
            class="block w-full sm:w-auto text-center py-3 px-8 bg-blue-500 text-white rounded-lg
            shadow-md hover:bg-blue-700 transition duration-300 ease-in-out text-lg font-semibold"
        >
          Estudiantes
        </router-link>
        <router-link
            to="/sign-in-teacher"
            class="block w-full sm:w-auto text-center py-3 px-8 bg-blue-500 text-white rounded-lg
            shadow-md hover:bg-blue-700 transition duration-300 ease-in-out text-lg font-semibold"
        >
          Profesores
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
.dashboard {
  background: #103459;
}

.btn-outline-blue {
  background-color: white;
  color: #3e82cc;
  border: 2px solid #092849;
}
.btn-outline-blue:hover {
  background-color: #0f4179;
  color: white;
}
</style>