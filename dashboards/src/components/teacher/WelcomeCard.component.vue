<template>
  <div class="welcome-card">
    <div class="welcome-content">
      <!-- Saludo principal -->
      <div class="welcome-header">
        <h1 class="welcome-title">
          <span class="greeting">{{ greeting }},</span>
          <span class="user-name">{{ userName }}!</span>
        </h1>
        <div class="welcome-subtitle">
          <svg class="calendar-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          <span class="current-date">{{ formattedDate }}</span>
        </div>
      </div>

      <!-- Decoración -->
      <div class="welcome-decoration">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
        <div class="wave-decoration">
          <svg viewBox="0 0 200 60" class="wave">
            <path d="M0,30 Q50,0 100,30 T200,30 V60 H0 V30 Z" fill="rgba(255,255,255,0.1)"/>
          </svg>
        </div>
      </div>

      <!-- Información adicional -->
      <div class="welcome-info">
        <div class="info-item">
          <span class="info-label">Día de la semana:</span>
          <span class="info-value">{{ dayOfWeek }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Hora actual:</span>
          <span class="info-value">{{ currentTime }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'WelcomeCard',
  props: {
    userName: {
      type: String,
      default: 'Usuario'
    }
  },
  data() {
    return {
      currentTime: '',
      timeInterval: null
    }
  },
  computed: {
    greeting() {
      const hour = new Date().getHours();
      if (hour < 12) return 'Buenos días';
      if (hour < 18) return 'Buenas tardes';
      return 'Buenas noches';
    },
    formattedDate() {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return now.toLocaleDateString('es-ES', options);
    },
    dayOfWeek() {
      const days = [
        'Domingo', 'Lunes', 'Martes', 'Miércoles',
        'Jueves', 'Viernes', 'Sábado'
      ];
      return days[new Date().getDay()];
    }
  },
  mounted() {
    this.updateTime();
    // Actualizar la hora cada segundo
    this.timeInterval = setInterval(this.updateTime, 1000);
  },
  beforeUnmount() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  },
  methods: {
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    },
    handleQuickAction() {
      console.log('¡Comenzando el día!');
      this.$emit('quick-action');
    }
  }
}
</script>

<style scoped>
.welcome-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  margin: 3rem auto;
  min-height: 100px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 50%;
}

.welcome-content {
  position: relative;
  z-index: 2;
}

.welcome-header {
  margin-bottom: 1.5rem;
}

.welcome-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
}

.greeting {
  display: block;
  font-size: 1.5rem;
  opacity: 0.9;
  font-weight: 400;
}

.user-name {
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.welcome-subtitle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  opacity: 0.8;
  font-weight: 500;
}

.calendar-icon {
  flex-shrink: 0;
}

.current-date {
  text-transform: capitalize;
}

.welcome-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  margin-top: 1rem;
}

.info-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 0.75rem;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.info-label {
  display: block;
  font-size: 0.75rem;
  opacity: 0.7;
  margin-bottom: 0.25rem;
}

.info-value {
  display: block;
  font-weight: 600;
  font-size: 0.875rem;
}

.welcome-decoration {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.floating-shapes {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 60px;
  height: 60px;
  top: 20%;
  right: 15%;
  animation-delay: 0s;
}

.shape-2 {
  width: 40px;
  height: 40px;
  top: 60%;
  right: 25%;
  animation-delay: 2s;
}

.shape-3 {
  width: 80px;
  height: 80px;
  top: 10%;
  right: 5%;
  animation-delay: 4s;
  opacity: 0.05;
}

.wave-decoration {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 200px;
  height: 60px;
  opacity: 0.3;
}

.wave {
  width: 100%;
  height: 100%;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .welcome-card {
    padding: 1.5rem;
    margin: 0.5rem;
    min-height: 240px;
  }

  .welcome-title {
    font-size: 1.5rem;
  }

  .greeting {
    font-size: 1.25rem;
  }

  .welcome-info {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .info-item {
    padding: 0.5rem;
  }

  .shape-1, .shape-2, .shape-3 {
    display: none;
  }
}

@media (max-width: 480px) {
  .welcome-card {
    padding: 1rem;
  }

  .welcome-title {
    font-size: 1.25rem;
  }

  .greeting {
    font-size: 1rem;
  }

  .welcome-subtitle {
    font-size: 0.875rem;
  }
}</style>