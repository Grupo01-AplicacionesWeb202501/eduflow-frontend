<template>
  <ul class="notification-list">
    <li v-for="(notification, index) in notifications" :key="index" class="notification-item">
      <span class="dot">🔔</span>
      {{ notification }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NotificationList',
  data() {
    return {
      notifications: ['Notificación 1', 'Notificación 2', 'Notificación 3']
    }
  }
}
</script>

<style scoped>
.notification-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.notification-item {
  background-color: #3b5998;
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 10px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 10px;
}

.dot {
  font-size: 18px;
}
</style>
