<template>
  <div class="container">
    <h1 class="title">Gestión de Notificaciones</h1>

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
.container {
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px;
  background-color: #f5f7fa;
}

.title {
  text-align: center;
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 40px;
}

.card {
  background-color: #204080;
  padding: 24px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: white;
  margin-bottom: 30px;
}

.section-title {
  font-size: 22px;
  margin-bottom: 20px;
}

/* Ajustes para pantallas grandes */
@media screen and (min-width: 1400px) {
  .container {
    max-width: 90%;
  }
}
</style>
