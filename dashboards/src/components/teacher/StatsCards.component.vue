<template>
  <div class="stats-container">
    <div class="stats-card" v-for="stat in stats" :key="stat.id">
      <div class="card-content">
        <h3 class="card-title">{{ stat.title }}</h3>
        <p class="card-value">{{ stat.value }}</p>
        <span class="card-description">{{ stat.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'


export default {
  name: 'StatsCards',
  setup() {
    const stats = ref([
      {
        id: 1,
        title: 'Cursos Asignados',
        value: '12',
        description: 'Cursos activos este semestre',
      },
      {
        id: 2,
        title: 'Estudiantes',
        value: '248',
        description: 'Total de estudiantes inscritos',
      },
      {
        id: 3,
        title: 'Evaluaciones Pendientes',
        value: '7',
        description: 'Por revisar esta semana',
      }
    ])

    return {
      stats
    }
  }
}
</script>

<style scoped>
.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.stats-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 24px;
  color: white;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.stats-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stats-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(102, 126, 234, 0.4);
}

.stats-card:hover::before {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 1;
}

.card-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px 0;
  opacity: 0.9;
  letter-spacing: 0.5px;
}

.card-value {
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 8px 0;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-description {
  font-size: 14px;
  opacity: 0.8;
  font-weight: 400;
  letter-spacing: 0.3px;
}

/* Responsive design */
@media (max-width: 768px) {
  .stats-container {
    grid-template-columns: 1fr;
    padding: 16px;
    gap: 16px;
  }

  .stats-card {
    padding: 20px;
  }

  .card-value {
    font-size: 28px;
  }
}

/* Animación de entrada */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stats-card {
  animation: fadeInUp 0.6s ease forwards;
}

.stats-card:nth-child(1) {
  animation-delay: 0.1s;
}

.stats-card:nth-child(2) {
  animation-delay: 0.2s;
}

.stats-card:nth-child(3) {
  animation-delay: 0.3s;
}
</style>