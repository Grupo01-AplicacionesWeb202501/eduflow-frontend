<template>
  <div v-if="course">
    <h2>Detalle del Curso</h2>
    <p><strong>Nombre:</strong> {{ course.name }}</p>
    <p><strong>Código:</strong> {{ course.code }}</p>
    <p><strong>Descripción:</strong> {{ course.description }}</p>
  </div>
</template>

<script setup>
defineProps(['course']);
</script>
