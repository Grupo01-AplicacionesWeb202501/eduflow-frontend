<template>
  <aside class="sidebar" :class="{ 'sidebar-collapsed': isCollapsed }">
    <!-- Toggle Button -->
    <div class="sidebar-header">
      <button class="toggle-btn" @click="toggleSidebar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>

    <!-- Navigation Menu -->
    <nav class="sidebar-nav">
      <ul class="nav-list">
        <!-- Dashboard -->
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: activeItem === 'dashboard' }"
             @click="handleNavigation('dashboard')">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span class="nav-text">Dashboard</span>
          </a>
        </li>

        <!-- Materiales -->
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: activeItem === 'materiales' }"
             @click="handleNavigation('materiales')">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14,2 14,8 20,8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10,9 9,9 8,9"></polyline>
            </svg>
            <span class="nav-text">Materiales</span>
          </a>
        </li>

        <!-- Tareas -->
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: activeItem === 'tareas' }"
             @click="handleNavigation('tareas')">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 11H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-6"></path>
              <path d="m9 7-3 4 3 4"></path>
              <path d="m15 7 3 4-3 4"></path>
            </svg>
            <span class="nav-text">Tareas</span>
          </a>
        </li>

        <!-- Estudiantes -->
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: activeItem === 'estudiantes' }"
             @click="handleNavigation('estudiantes')">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <span class="nav-text">Estudiantes</span>
          </a>
        </li>

        <!-- Calificaciones -->
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: activeItem === 'calificaciones' }"
             @click="handleNavigation('calificaciones')">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 12l2 2 4-4"></path>
              <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1h18z"></path>
              <path d="M3 12v7c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-7"></path>
            </svg>
            <span class="nav-text">Calificaciones</span>
          </a>
        </li>

        <!-- Notificaciones -->
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: activeItem === 'notificaciones' }"
             @click="handleNavigation('notificaciones')">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span class="nav-text">Notificaciones</span>
            <span v-if="notificationCount > 0" class="notification-badge">{{ notificationCount }}</span>
          </a>
        </li>

        <!-- Configuración -->
        <li class="nav-item">
          <a href="#" class="nav-link" :class="{ active: activeItem === 'configuracion' }"
             @click="handleNavigation('configuracion')">
            <svg class="nav-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            <span class="nav-text">Configuración</span>
          </a>
        </li>
      </ul>
    </nav>

    <!-- Footer -->
    <div class="sidebar-footer">
      <div class="user-info" v-if="!isCollapsed">
        <div class="user-avatar">
          <span>{{ userInitials }}</span>
        </div>
        <div class="user-details">
          <span class="user-name">{{ userName }}</span>
          <span class="user-role">Profesor</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SidebarEduflow',
  data() {
    return {
      isCollapsed: false,
      activeItem: 'dashboard',
      notificationCount: 3,
      userName: 'Juan Pérez',
      userInitials: 'JP'
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
      // Emitir evento para que el componente padre pueda ajustar el layout
      this.$emit('sidebar-toggle', this.isCollapsed);
    },
    handleNavigation(section) {
      this.activeItem = section;
      console.log(`Navegando a: ${section}`);
      // Aquí puedes agregar la lógica de navegación real
      // Por ejemplo: this.$router.push(`/${section}`)
      this.$emit('navigate', section);
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 4rem; /* Altura del navbar */
  height: calc(100vh - 4rem);
  width: 260px;
  background: linear-gradient(180deg, #2c3e50 0%, #34495e 100%);
  color: white;
  transition: all 0.3s ease;
  z-index: 999;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 10px rgba(0, 0, 0, 0.1);
}

.sidebar-collapsed {
  width: 70px;
}

.sidebar-header {
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.toggle-btn {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease;
  width: 100%;
  display: flex;
  justify-content: center;
}

.toggle-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-nav {
  flex: 1;
  padding: 1rem 0;
  overflow-y: auto;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0.25rem 0;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  margin: 0 0.5rem;
  border-radius: 0.5rem;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateX(4px);
}

.nav-link.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.nav-link.active::before {
  content: '';
  position: absolute;
  left: -0.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 60%;
  background-color: #667eea;
  border-radius: 2px;
}

.nav-icon {
  flex-shrink: 0;
  margin-right: 0.75rem;
  transition: transform 0.3s ease;
}

.nav-link:hover .nav-icon {
  transform: scale(1.1);
}

.nav-text {
  font-weight: 500;
  white-space: nowrap;
  transition: opacity 0.3s ease;
}

.sidebar-collapsed .nav-text {
  opacity: 0;
  visibility: hidden;
}

.sidebar-collapsed .nav-icon {
  margin-right: 0;
}

.notification-badge {
  background-color: #e74c3c;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 0.2rem 0.5rem;
  border-radius: 1rem;
  margin-left: auto;
  min-width: 1.5rem;
  text-align: center;
  transition: opacity 0.3s ease;
}

.sidebar-collapsed .notification-badge {
  opacity: 0;
  visibility: hidden;
}

.sidebar-footer {
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.875rem;
  flex-shrink: 0;
}

.user-details {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.user-name {
  font-weight: 600;
  font-size: 0.875rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-role {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Scrollbar personalizado */
.sidebar-nav::-webkit-scrollbar {
  width: 4px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.sidebar-nav::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.sidebar-open {
    transform: translateX(0);
  }
}
</style>