<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="course.name" placeholder="Nombre del curso" required />
    <button type="submit">Agregar</button>
  </form>
</template>

<script>
import { ref } from 'vue';

export default {
  emits: ['addCourse'],
  setup(_, { emit }) {
    const course = ref({ name: '' });

    const handleSubmit = () => {
      emit('addCourse', { ...course.value });
      course.value.name = '';
    };

    return { course, handleSubmit };
  },
};
</script>
