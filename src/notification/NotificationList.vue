<template>
  <div>
    <h2>Lista de Notificaciones</h2>
    <ul>
      <li v-for="(notification, index) in notifications" :key="index">
        {{ notification }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NotificationList',
  data() {
    return {
      notifications: ['Notificación 1', 'Notificación 2', 'Notificación 3']
    };
  }
};
</script>
