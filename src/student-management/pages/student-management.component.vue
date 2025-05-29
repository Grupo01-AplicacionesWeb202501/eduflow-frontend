<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import StudentProfile from './student-profile.component.vue';
import NewStudentForm from './new-student-form.component.vue';
import DeleteStudent from './delete-student.component.vue';

const students = ref([]);
const selectedStudent = ref(null);
const studentToDelete = ref(null);
const showProfileDialog = ref(false);
const showNewStudentDialog = ref(false);
const showDeleteStudentDialog = ref(false);

const handleAddStudent = () => {
  showNewStudentDialog.value = true;
};

const handleSaveNewStudent = async (studentData) => {
  try {
    console.log('Datos del estudiante a guardar:', studentData); // Para depuración
    const studentResponse = await axios.post('/api/students', {
      id_estudiante: studentData.id_estudiante,
      nombre: studentData.nombre,
      correo: studentData.correo,
      codigoAlumno: studentData.codigoAlumno,
      carrera: studentData.carrera, // Asegúrate de que este campo tenga valor
      ciclo_actual: studentData.ciclo_actual,
      tipoUsuario: 'student'
    });
    await axios.post('/api/documents', {
      id_estudiante: studentData.id_estudiante,
      id_documento: studentData.documentInfo.id_documento,
      tipo_documento: studentData.documentInfo.tipo_documento,
      estado_validacion: 'pendiente',
      fecha_subida: new Date().toISOString().split('T')[0]
    });
    showNewStudentDialog.value = false;
    await loadStudents(); // Recargar la lista de estudiantes
  } catch (error) {
    console.error('Error al guardar estudiante:', error);
  }
};

const loadStudents = async () => {
  try {
    const response = await axios.get('/api/students');
    students.value = response.data;
  } catch (error) {
    console.error('Error al cargar estudiantes:', error);
  }
};

const editStudent = (student) => {
  console.log('Editar estudiante:', student);
};

const deleteStudent = (student) => {
  studentToDelete.value = student;
  showDeleteStudentDialog.value = true;
};

const handleConfirmDelete = async (student) => {
  try {
    // Primero eliminar los documentos asociados
    const documentsResponse = await axios.get(`/api/documents?id_estudiante=${student.id_estudiante}`);
    for (const doc of documentsResponse.data) {
      await axios.delete(`/api/documents/${doc.id}`);
    }
    
    // Luego eliminar el estudiante
    await axios.delete(`/api/students/${student.id}`);
    showDeleteStudentDialog.value = false;
    studentToDelete.value = null;
    await loadStudents(); // Recargar la lista de estudiantes
    
    console.log('Estudiante eliminado exitosamente');
  } catch (error) {
    console.error('Error al eliminar estudiante:', error);
    console.error('Detalles del error:', error.response);
  }
};

const viewStudentInfo = async (student) => {
  console.log('Botón clickeado, estudiante:', student);
  try {
    console.log('Cargando información del estudiante:', student);
    const response = await axios.get(`/api/documents?id_estudiante=${student.id_estudiante}`);
    console.log('Respuesta del servidor:', response.data);
    
    if (response.data && response.data.length > 0) {
      const documentInfo = response.data[0];
      selectedStudent.value = {
        ...student,
        documentInfo
      };
      showProfileDialog.value = true;
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

onMounted(() => {
  loadStudents();
});
</script>

<template>
  <div class="student-management-wrapper">
    <div class="student-management-container">
      <h1 class="page-title">Gestión de Estudiantes</h1>
      <div class="table-container">
        <DataTable :value="students"
                   paginator
                   :rows="5"
                   :rowsPerPageOptions="[5, 10, 20, 50]"
                   tableStyle="min-width: 50rem" class="custom-table"
                   responsiveLayour="scroll">
          <Column class="column-header" field="nombre" header="Nombre" style="max-width: 20%"></Column>
          <Column class="column-header"   field="correo" header="Correo" style="max-width: 20%"></Column>
          <Column class="column-header"  field="codigoAlumno" header="Código" style="max-width: 20%"></Column>
          <Column class="column-header"  field="carrera" header="Carrera" style="max-width: 20%"></Column>
          <Column class="column-header"  field="ciclo_actual" header="Ciclo" style="max-width: 10%"></Column>
          <Column class="column-header options" field="icons" header="Opciones" style="max-width: 10%">
            <template #body="slotProps">
              <div class="actions-container">
                <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-button-text"
                        @click="editStudent(slotProps.data)"  v-tooltip.top="'Editar'"/>
                <Button icon="pi pi-trash" class="p-button-rounded p-button-danger p-button-text"
                    @click="deleteStudent(slotProps.data)" v-tooltip.top="'Eliminar'"/>
                <Button icon="pi pi-info-circle" class="p-button-rounded p-button-info p-button-text"
                    @click="viewStudentInfo(slotProps.data)" v-tooltip.top="'Más información'"
                />
              </div>
            </template>
          </Column>
          <button class="add-student" @click="handleAddStudent">
            Añadir estudiante <span class="add-student-plus"> + </span>
          </button>
        </DataTable>
      </div>
    </div>
  </div>

  <Teleport to="body">
    <Dialog v-model:visible="showProfileDialog" modal :style="{ width: '40vw' }"
      :closable="true" :dismissableMask="true" class="student-profile-dialog"
      position="top">
      <StudentProfile v-if="selectedStudent"
        :student-data="selectedStudent" @close="showProfileDialog = false"/>
    </Dialog>

    <Dialog v-model:visible="showNewStudentDialog" modal :style="{ width: '70vw' }"
        :closable="true" :dismissableMask="true" class="new-student-dialog" position="top">
      <NewStudentForm v-if="showNewStudentDialog"
          @close="showNewStudentDialog = false" @save="handleSaveNewStudent"/>
    </Dialog>
  </Teleport>
  <Teleport to="body">
    <!-- ... otros diálogos ... -->
    
    <DeleteStudent
      v-model:visible="showDeleteStudentDialog"
      :student="studentToDelete"
      @confirm="handleConfirmDelete"
    />
  </Teleport>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=National+Park:wght@200..800&family=Noto+Sans:ital,wght@0,100..900&display=swap');

  .student-management-container {
    padding: 2rem;
    max-width: 90%;
    margin: 0 auto;
  }

  .page-title {
    color: #477eb9;
    font-size: 2rem;
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 600;
  }

  .table-container {
    background-color: #fff;
    border-radius: 8px;
    padding: 1.5rem;
  }

  :deep(.p-datatable) {
    border-radius: 8px;
    overflow: hidden;
    padding: 2rem;
  }

  :deep(.p-datatable .p-datatable-header) {
    padding: 1rem;
  }

  :deep(.p-datatable .p-datatable-thead > tr > th) {
    color: #2d3748;
    font-family: "National Park", sans-serif;
    font-weight: 600;
    padding: 1rem;
    text-align: center;
    font-size: 1.2rem;
  }

  :deep(.p-datatable .p-datatable-tbody > tr > td) {
    padding: 1rem;
  }

:deep(.p-paginator) {
    margin-top: 5rem;
    padding: 1rem;
    background-color: #f8f9fa;
  }

  :deep(.p-paginator .p-paginator-current) {
    margin-left: auto;
  }

  :deep(.p-paginator) {
    padding: 1rem;
    background-color: #ffffff;
    border: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: #4a5568;
  }

  :deep(.p-datatable-table) {
    color: #4a5568;
    text-align: center;
    align-items: center;
    justify-content: center;
  }

  :deep(.p-paginator .p-paginator-first), :deep(.p-paginator .p-paginator-prev),
  :deep(.p-paginator .p-paginator-next),  :deep(.p-paginator .p-paginator-last) {
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    background-color: #ffffff;
    color: #64748b;
    transition: all 0.2s;
    margin: 0 .2rem;
  }


  :deep(.p-paginator .p-paginator-last) {
    margin-right: 2rem;
  }

  :deep(.p-paginator .p-paginator-page) {
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    margin: 0 2px;
    transition: all 0.2s;
  }

  :deep(.p-datatable-paginator-bottom) {
    border: none;
  }

  :deep(.p-select) {
    min-width: 2.5rem;
    height: 2.5rem;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
    margin: 0 2px;
    transition: all 0.2s;
    align-items: center;
  }

  :deep(.p-select-label) {
    margin: 0 .5rem;
  }

  :deep(.p-select-dropdown) {
    margin: .5rem;
  }

  .actions-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  :deep(.p-button.p-button-text) {
    padding: 0.5rem;
    width: 2rem;
    height: 2rem;
  }



  :deep(.p-button.p-button-text.p-button-danger:hover) {
    background: rgba(220, 38, 38, 0.1);
    color: #ef4444;
  }

  :deep(.p-button.p-button-text.p-button-success:hover) {
    background: rgba(22, 163, 74, 0.1);
    color: #10b981;
  }

  :deep(.p-button.p-button-text.p-button-info:hover) {
    background: rgba(59, 130, 246, 0.1);
    color: #1e293b;
  }

@media (max-width: 768px) {
      .student-management-container {
        padding: 1rem;
      }
      .page-title {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }
      .table-container {
        padding: 1rem;
      }
    }

.page-title {
  position: relative;
  z-index: 1;
  color: #477eb9;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 600;
}

.student-management-wrapper {
  position: relative;
  width: 100%;
  min-height: 100vh;
}

:deep(.student-profile-dialog) {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
}

:deep(.p-dialog .p-dialog-header) {
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  padding: 1.5rem;
}

:deep(.p-dialog .p-dialog-content) {
  background-color: #ffffff;
  padding: 0;
}

.add-student {
  font-family: "National Park", sans-serif;
  padding: .5rem 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #ffffff;
  color: #64748b;
  transition: all 0.4s;
  margin: 0 2px;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: bold;
}
.add-student:hover {
  transform: scale(1.05);
}
</style>