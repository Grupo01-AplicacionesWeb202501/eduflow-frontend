<template>
  <div>
    <h1>Sistema de Notificaciones</h1>
    <NotificationList />
    <NotificationPreferences />
  </div>
</template>

<script>
import NotificationList from '../notification/NotificationList.vue';
import NotificationPreferences from '../notification/NotificationPreferences.vue';

export default {
  name: 'NotificationPage',
  components: {
    NotificationList,
    NotificationPreferences
  }
};
</script>
