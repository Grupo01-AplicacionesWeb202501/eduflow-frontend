<script>
  export default {
    name: "LoginComponent",
  };
</script>

<template>
  <div class="dashboard flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 class="text-3xl font-bold mb-6">Bienvenido</h1>
    <p class="text-lg mb-4">Seleccione su portal para iniciar sesión:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
      <router-link
          to="/sign-in-student"
          class="w-full text-center py-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Estudiantes
      </router-link>
      <router-link
          to="/sign-in-teacher"
          class="w-full text-center py-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
      >
        Profesores
      </router-link>
    </div>
  </div>
</template>

<style>
  .dashboard {
    background: #1984f3;
  }
</style>