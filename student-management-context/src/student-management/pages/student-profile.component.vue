<script setup>
import { defineProps } from 'vue';
import Card from 'primevue/card';

const props = defineProps({
  studentData: {
    type: Object,
    required: true
  }
});

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case 'pendiente':
      return 'status-pending';
    case 'aprobado':
      return 'status-approved';
    case 'rechazado':
      return 'status-rejected';
    default:
      return '';
  }
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>

<template>
  <Card style="background-color: #fff; border: 1px solid #ccc; border-radius: 8px; padding: 1rem;">
    <template #title>
      <div class="profile-header">
        <i class="pi pi-user profile-icon" style="font-size: 2.3rem; margin-left: 1rem"></i>
      </div>
    </template>
    
    <template #content>
      <div class="profile-content">
        <div class="info-section">
          <h3>Información Personal</h3>
          <div class="info-grid">
            <div class="info-item">
              <span class="label">ID Estudiante:</span>
              <span class="value">{{ studentData.id_estudiante }}</span>
            </div>
            <div class="info-item">
              <span class="label">Nombre:</span>
              <span class="value">{{ studentData.nombre }}</span>
            </div>
            <div class="info-item">
              <span class="label">Código:</span>
              <span class="value">{{ studentData.codigoAlumno }}</span>
            </div>
            <div class="info-item">
              <span class="label">Carrera:</span>
              <span class="value">{{ studentData.carrera }}</span>
            </div>
            <div class="info-item">
              <span class="label">Ciclo Actual:</span>
              <span class="value">{{ studentData.ciclo_actual }}</span>
            </div>
          </div>
        </div>

        <div class="info-section">
          <h3>Información del Documento</h3>
          <div class="info-grid">
            <div class="info-item">
              <span class="label">ID Documento:</span>
              <span class="value">{{ studentData.documentInfo.id_documento }}</span>
            </div>
            <div class="info-item">
              <span class="label">Tipo:</span>
              <span class="value">{{ studentData.documentInfo.tipo_documento }}</span>
            </div>
            <div class="info-item">
              <span class="label">Estado:</span>
              <span class="value" :class="getStatusClass(studentData.documentInfo.estado_validacion)">
                {{ studentData.documentInfo.estado_validacion }}
              </span>
            </div>
            <div class="info-item">
              <span class="label">Fecha de Subida:</span>
              <span class="value">{{ formatDate(studentData.documentInfo.fecha_subida) }}</span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>


:deep(.p-card) {
  border-radius: 8px;
  box-shadow: none;
}

:deep(.p-card .p-card-content) {
  padding: 1.5rem;

}

.profile-content {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1rem;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #477eb9;
}

.profile-icon {
  font-size: 2rem;
}

.info-section {
  margin-bottom: 2rem;
}

.info-section h3 {
  color: #477eb9;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.label {
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
}

.value {
  font-size: 1rem;
  color: #1e293b;
}

.status-pending {
  color: #f59e0b;
  font-weight: 600;
}

.status-approved {
  color: #10b981;
  font-weight: 600;
}

.status-rejected {
  color: #ef4444;
  font-weight: 600;
}
</style>