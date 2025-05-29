<template>
  <div class="preferences">
    <label class="checkbox">
      <input type="checkbox" v-model="emailNotifications" />
      Recibir notificaciones por correo
    </label>
    <label class="checkbox">
      <input type="checkbox" v-model="smsNotifications" />
      Recibir notificaciones por SMS
    </label>
  </div>
</template>

<script>
export default {
  name: 'NotificationPreferences',
  data() {
    return {
      emailNotifications: false,
      smsNotifications: false
    }
  }
}
</script>

<style scoped>
.preferences {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: white;
}

.checkbox {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px 14px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
}

input[type="checkbox"] {
  transform: scale(1.2);
  cursor: pointer;
}
</style>

