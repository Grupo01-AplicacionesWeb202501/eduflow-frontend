<script setup>

  import { ref, watch } from 'vue';
  import Card from 'primevue/card';
  import InputText from 'primevue/inputtext';
  import Dropdown from 'primevue/dropdown';
  import Button from 'primevue/button';
  import Select from 'primevue/select'

  const emit = defineEmits(['close', 'save']);

  const newStudent = ref({
    id_estudiante: '',
    nombre: '',
    correo: '',
    codigoAlumno: '',
    carrera: '',
    ciclo_actual: '',
    documentInfo: {
      id_documento: '',
      tipo_documento: '',
      estado_validacion: 'pendiente',
    }
  })

  const selectedCarreer = ref();
  const carreers = ref([
    {name: 'Ingeniería de Software', value: 'ingSo'},
    {name: 'Administración de empresas', value: 'admEmp'},
    {name: 'Diseño y gestión en moda', value: 'disModa'},
    {name: 'Ingeniería Civil', value: 'ingCiv'},
    {name: 'Ingeniería de Sistemas', value: 'ingSys'},
    {name:'Contabilidad', value: 'Cont'},
    {name:'Ingeniería Industrial', value: 'ingInd'},
    {name:'Psicología', value: 'Psic'},
    {name: 'Derecho', value: 'Der'},
    {name: 'Arquitectura', value: 'Arq'}
  ]);

  const tiposDocumento = [
    'DNI',
    'Carnet de extranjería',
    'Pasaporte',
    'Carnet universitario'
  ];

  const ciclos = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleSubmit = () => {
    emit('save', newStudent.value);
  };

  const handleCancel = () => {
    emit('close');
  };
  
  watch(selectedCarreer, (newValue) => {
    if (newValue) {
      newStudent.value.carrera = newValue.name;
    }
  })

</script>

<template>
  <Card class="new-student-form">
    <template #title>
      <div class="form-header">
        <i class="pi pi-user-plus form-icon"></i>
        <h2>Nuevo Estudiante</h2>
      </div>
    </template>

    <template #content>
      <form @submit.prevent="handleSubmit" class="form-content">
        <div class="form-section">
          <h3>Información Personal</h3>
          <div class="form-grid">
            <div class="form-group">
              <label>ID Estudiante</label>
              <InputText class="name" v-model="newStudent.id_estudiante" required type="number" />
            </div>
            <div class="form-group">
              <label>Nombre</label>
              <InputText class="name" v-model="newStudent.nombre" required />
            </div>
            <div class="form-group">
              <label>Correo</label>
              <InputText class="email" v-model="newStudent.correo" required type="email" />
            </div>
            <div class="form-group">
              <label>Código de Alumno</label>
              <InputText class="student-code" v-model="newStudent.codigoAlumno" required />
            </div>
            <div class="form-group">
              <label>Carrera</label>
              <Select 
                v-model="selectedCarreer" 
                :options="carreers"
                optionLabel="name" 
                placeholder="Seleccionar carrera"
                class="w-full md:w-56" 
                :required="true"
                :class="{ 'p-invalid': !selectedCarreer && submitted }"
              />
            </div>
            <div class="form-group">
              <label>Ciclo Actual</label>
              <Dropdown v-model="newStudent.ciclo_actual" :options="ciclos" required />
            </div>
          </div>
        </div>

        <div class="form-section">
          <h3>Información del Documento</h3>
          <div class="form-grid">
            <div class="form-group">
              <label>ID Documento</label>
              <InputText class="id-document" v-model="newStudent.documentInfo.id_documento" required type="number" />
            </div>
            <div class="form-group">
              <label>Tipo de Documento</label>
              <Dropdown v-model="newStudent.documentInfo.tipo_documento" :options="tiposDocumento" required />
            </div>
          </div>
        </div>

        <div class="form-actions">
          <Button class="cancel-btn" type="button" label="Cancelar"  @click="handleCancel" />
          <Button class="submit-btn" type="submit" label="Guardar"  />
        </div>
      </form>
    </template>
  </Card>
</template>

<style scoped>

.name, .email, .id-student, .id-document {
  border: 1px solid #e2e8f0;
  padding: .5rem;
  border-radius: 8px;
}

.form-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #477eb9;
  background-color: #fff;
}

.form-icon {
  font-size: 2rem;
}

.form-content {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
}

.form-section {
  margin-bottom: 2rem;
}

.form-section h3 {
  color: #477eb9;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  color: #64748b;
  font-size: 0.875rem;
  font-weight: 600;
}

:deep(.p-inputtext),
:deep(.p-dropdown) {
  width: 100%;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

:deep(.p-button) {
  min-width: 120px;
}

.cancel-btn {
  border: 1px solid #1e293b;
  border-radius: 5px;
  background-color: #1e293b;
  color: #fff;
  padding: .5rem;
}
.cancel-btn:hover {
  background-color: #1e293b !important;
  padding: .5rem !important;
  color: #fff !important;
}

.submit-btn {
  border: 1px solid #10b981;
  border-radius: 5px;
  background-color: #10b981;
  color: #fff;
  padding: .5rem;
}

.submit-btn:hover {
  background-color: #10b981 !important;
  padding: .5rem !important;
  color: #fff !important;
}

</style>