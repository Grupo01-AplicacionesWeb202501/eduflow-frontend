<script setup>
import LanguageSwitcher from './lenguage-switcher.component.vue';
</script>

<template>
  <nav class="nav-container">
    <div class="logo">
      <router-link to="/" class="logo-text">EduFlow</router-link>
    </div>
    
    <div class="nav-links">
      <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
      <router-link to="/student-management" class="nav-link">Estudiantes</router-link>
      <router-link to="/courses" class="nav-link">Cursos</router-link>
      <router-link to="/documents" class="nav-link">Documentos</router-link>
    </div>

    <div class="language-switcher">
      <LanguageSwitcher />
    </div>
  </nav>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo {
  flex: 1;
}

.logo-text {
  color: #477eb9;
  font-size: 2rem;
  font-weight: bold;
  text-decoration: none;
  font-family: "National Park", sans-serif;
}

.nav-links {
  display: flex;
  gap: 2rem;
  flex: 2;
  justify-content: center;
}

.nav-link {
  color: #4a5568;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: #477eb9;
  background-color: rgba(71, 126, 185, 0.1);
}

.nav-link.router-link-active {
  color: #477eb9;
  background-color: rgba(71, 126, 185, 0.1);
}

.language-switcher {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;
    gap: 1rem;
  }

  .language-switcher {
    justify-content: center;
  }
}
</style>