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
  max-width: 900px;
  margin: auto;
  padding: 30px;
  background-color: #f5f7fa;
}

.title {
  text-align: center;
  font-size: 28px;
  color: #2c3e50;
  margin-bottom: 40px;
}

.card {
  background-color: #204080;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  color: white;
  margin-bottom: 25px;
}

.section-title {
  font-size: 20px;
  margin-bottom: 15px;
}
</style>
