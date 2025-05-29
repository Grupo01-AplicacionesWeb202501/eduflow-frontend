<template>
  <ul>
    <li v-for="course in courses" :key="course.id">
      {{ course.name }}
      <button @click="$emit('deleteCourse', course.id)">Eliminar</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    courses: Array,
  },
};
</script>
