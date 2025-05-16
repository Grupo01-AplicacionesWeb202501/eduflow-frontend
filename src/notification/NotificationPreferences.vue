<template>
  <div>
    <h2>Preferencias de Notificación</h2>
    <label>
      <input type="checkbox" v-model="emailEnabled" />
      Recibir notificaciones por correo
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="smsEnabled" />
      Recibir notificaciones por SMS
    </label>
  </div>
</template>

<script>
export default {
  name: 'NotificationPreferences',
  data() {
    return {
      emailEnabled: true,
      smsEnabled: false
    };
  }
};
</script>
