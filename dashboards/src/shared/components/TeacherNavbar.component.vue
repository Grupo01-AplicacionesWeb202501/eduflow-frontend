<template>
  <nav class="navbar">
    <!-- Logo/Marca a la izquierda -->
    <div class="navbar-brand">
      <h1 class="brand-text">Eduflow</h1>
    </div>

    <!-- Menú central -->
    <div class="navbar-menu">
      <ul class="menu-list">
        <li class="menu-item">
          <a href="#" class="menu-link" @click="handleNavigation('cursos')">Cursos</a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link" @click="handleNavigation('horario')">Horario</a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link" @click="handleNavigation('evaluaciones')">Evaluaciones</a>
        </li>
        <li class="menu-item">
          <a href="#" class="menu-link" @click="handleNavigation('mensajes')">Mensajes</a>
        </li>
      </ul>
    </div>

    <!-- Botón de cerrar sesión a la derecha -->
    <div class="navbar-actions">
      <button class="logout-btn" @click="handleLogout">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16,17 21,12 16,7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
        Cerrar Sesión
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarEduflow',
  methods: {
    handleNavigation(section) {
      console.log(`Navegando a: ${section}`);
      // Aquí puedes agregar la lógica de navegación real
      // Por ejemplo: this.$router.push(`/${section}`)
    },
    handleLogout() {
      console.log('Cerrando sesión...');
      // Simulación de cerrar sesión
      if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
        // Aquí iría la lógica real de logout
        alert('Sesión cerrada exitosamente');
        // Por ejemplo: this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
/* Reset para asegurar que el navbar ocupe todo el ancho */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 4rem;
  width: 100%;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
}

.navbar-brand {
  flex-shrink: 0;
}

.brand-text {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.brand-text:hover {
  color: #f0f0f0;
}

.navbar-menu {
  flex: 1;
  display: flex;
  justify-content: center;
}

.menu-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.menu-item {
  position: relative;
}

.menu-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.menu-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.menu-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.menu-link:hover::before {
  width: 80%;
}

.navbar-actions {
  flex-shrink: 0;
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.logout-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.logout-btn:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    padding: 0 1rem;
    flex-wrap: wrap;
    height: auto;
    min-height: 4rem;
    width: 100%;
  }

  .navbar-menu {
    order: 3;
    width: 100%;
    margin-top: 1rem;
  }

  .menu-list {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .brand-text {
    font-size: 1.25rem;
  }

  .logout-btn {
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .menu-list {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  .menu-link {
    text-align: center;
    padding: 0.75rem;
  }
}</style>