<template>
  <div class="app">
    <header>
      <h1>Portal Universitario</h1>
      <nav>
        <router-link to="/courses">Gestión de Cursos</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  margin-bottom: 1rem;
}
nav a {
  text-decoration: none;
  color: #0077cc;
  margin-right: 1rem;
  font-weight: bold;
}
</style>
