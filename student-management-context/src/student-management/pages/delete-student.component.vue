<script setup>
import { ref, watch } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

const props = defineProps({
  visible: Boolean,
  student: Object
});

const emit = defineEmits(['close', 'confirm', 'update:visible']);

const isDialogVisible = ref(props.visible);

watch(() => props.visible, (newValue) => {
  isDialogVisible.value = newValue;
});

watch(isDialogVisible, (newValue) => {
  emit('update:visible', newValue);
});

const handleConfirm = () => {
  emit('confirm', props.student);
  emit('update:visible', false);
};

const handleClose = () => {
  emit('update:visible', false);
};
</script>

<template>
  <Dialog 
    :visible="isDialogVisible"
    @update:visible="(val) => emit('update:visible', val)"
    modal
    :style="{ width: '35vw', background: 'white',
    padding: '2rem', fontFamily: 'Noto Sans, sans-serif'}"
    :closable="true"
    :dismissableMask="true"
    class="delete-confirmation-dialog"
  >
    <template #header>
      <h3 class="dialog-title">Confirmar Eliminación</h3>
    </template>

    <div class="dialog-content">
      <p class="confirmation-message">
        ¿Estás seguro que deseas eliminar a el estudiante
        <strong>{{ student?.nombre }}</strong>?
      </p>
      <p class="warning-message">Esta acción no se puede deshacer</p>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <Button 
          label="Cancelar"
          class="p-button-text"
          @click="handleClose"

        />
        <Button 
          label="Eliminar" 
          class="p-button-danger"
          @click="handleConfirm"
        />
      </div>
    </template>
  </Dialog>
</template>

<style scoped>


  .dialog-title {
    color: #dc2626;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .dialog-content {
    padding: 1.5rem 0;
    text-align: center;
  }

  .confirmation-message {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #374151;
  }

  .warning-message {
    color: #dc2626;
    font-size: 0.9rem;
    font-style: italic;
  }

  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }

  :deep(.p-button.p-button-text) {
    color: #fff;
    border: 1px solid #2d3748;
    border-radius: 8px;
    padding: .3rem;
    background-color: #2d3748;
  }

  :deep(.p-button.p-button-text):hover {
    color: #fff;
    border: 1px solid #6b7280;
    border-radius: 8px;
    background-color: #2d3748;
  }

  :deep(.p-button.p-button-danger) {
    border: 1px solid #dc2626;
    border-radius: 8px;
    padding: .5rem;
    background-color: #dc2626;
    color: #fff;
  }

  :deep(.p-button.p-button-danger):hover {
    border: 1px solid #dc2626;
    border-radius: 8px;
    background-color: #dc2626;
    color: #fff;
  }
</style>