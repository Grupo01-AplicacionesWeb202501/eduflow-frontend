<template>
  <div class="notification-wrapper">
    <h1>Gestión de Notificaciones</h1>

    <div class="card">
      <h2 class="section-title">Notificaciones Recientes</h2>
      <NotificationList />
    </div>

    <div class="card">
      <h2 class="section-title">Preferencias</h2>
      <NotificationPreferences />
    </div>
  </div>
</template>

<script>
import NotificationList from '../notification/NotificationList.vue'
import NotificationPreferences from '../notification/NotificationPreferences.vue'

export default {
  name: 'NotificationPage',
  components: {
    NotificationList,
    NotificationPreferences
  }
}
</script>

<style scoped>
.notification-wrapper {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #1e3a5f; /* fondo azul oscuro */
  color: #dbe6f3;
  padding: 2rem;
  min-height: 90vh;
  border-radius: 8px;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  font-weight: 700;
  color: #e1e9f5;
}

.card {
  background-color: #2c4a7a;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px #0f2945;
  color: #e9f2ff;
}

.section-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;
  color: #acc2d7;
}

/* Responsivo */
@media (max-width: 900px) {
  .notification-wrapper {
    padding: 1.5rem 1rem;
  }
}
</style>
