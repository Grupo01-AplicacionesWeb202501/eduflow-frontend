<template>
  <section id="gestion-cursos" class="course-management">
    <h2>Gestión de Cursos</h2>

    <input
        v-model="search"
        type="text"
        placeholder="Buscar curso..."
        class="search-input"
    />

    <div class="course-container">
      <!-- Panel cursos disponibles -->
      <div class="available-courses">
        <h3>Cursos Disponibles</h3>
        <ul>
          <li
              v-for="course in filteredCourses"
              :key="course.id"
              class="course-item"
          >
            <div class="course-header">
              <strong>{{ course.nombre }}</strong>
              <span class="profesor">Profesor: {{ course.profesor }}</span>
            </div>

            <div class="horarios">
              <span>Horarios:</span>
              <ul>
                <li
                    v-for="(horario, idx) in course.horarios"
                    :key="idx"
                    class="horario-item"
                    @click="addCourse(course, horario)"
                    :title="canAdd(course, horario) ? 'Agregar curso' : 'Ya agregado'"
                    :class="{ disabled: !canAdd(course, horario) }"
                >
                  {{ horario }}
                  <svg
                      v-if="canAdd(course, horario)"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="green"
                      viewBox="0 0 16 16"
                  >
                    <path
                        d="M16 2a2 2 0 0 1-2 2H6.414l4.293 4.293-1.414 1.414L3 4.414 4.414 3l4.293 4.293V4a2 2 0 0 1 2-2z"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </li>
          <li v-if="filteredCourses.length === 0" class="no-results">
            No se encontraron cursos.
          </li>
        </ul>
      </div>

      <!-- Panel cursos seleccionados -->
      <div class="selected-courses">
        <h3>Cursos Seleccionados</h3>
        <transition-group name="list" tag="ul">
          <li
              v-for="(selected, index) in selectedCourses"
              :key="selected.id + selected.horario"
              class="selected-item"
          >
            <div>
              <strong>{{ selected.nombre }}</strong><br />
              Profesor: {{ selected.profesor }}<br />
              Horario: {{ selected.horario }}
            </div>
            <button
                @click="removeCourse(index)"
                aria-label="Eliminar curso seleccionado"
                title="Eliminar"
            >
              ✕
            </button>
          </li>
          <li v-if="selectedCourses.length === 0" class="no-selection">
            No hay cursos seleccionados.
          </li>
        </transition-group>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const courses = ref([
  {
    id: 1,
    nombre: "Matemática I",
    profesor: "Ing. Suárez",
    horarios: ["Lun y Mie 8:00-10:00", "Vie 10:00-12:00"],
  },
  {
    id: 2,
    nombre: "Comunicación",
    profesor: "Lic. Gálvez",
    horarios: ["Mar y Jue 10:00-12:00", "Mie y Vie 16:00-18:00"],
  },
  {
    id: 3,
    nombre: "Física I",
    profesor: "Dr. Chávez",
    horarios: ["Lun y Vie 14:00-16:00", "Sab 9:00-12:00"],
  },
]);

const selectedCourses = ref([]);

const search = ref("");

const filteredCourses = computed(() => {
  const term = search.value.trim().toLowerCase();
  if (!term) return courses.value;
  return courses.value.filter((c) =>
      c.nombre.toLowerCase().includes(term)
  );
});

function canAdd(course, horario) {
  return !selectedCourses.value.some(
      (sc) => sc.id === course.id && sc.horario === horario
  );
}

function addCourse(course, horario) {
  if (!canAdd(course, horario)) return;
  selectedCourses.value.push({
    id: course.id,
    nombre: course.nombre,
    profesor: course.profesor,
    horario,
  });
}

function removeCourse(index) {
  selectedCourses.value.splice(index, 1);
}
</script>

<style scoped>
.course-management {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #1e3a5f; /* color azul oscuro */
  color: #dbe6f3;
  padding: 2rem;
  min-height: 90vh;
  border-radius: 8px;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
  font-weight: 700;
}

.search-input {
  display: block;
  margin: 0 auto 1.5rem;
  padding: 0.6rem 1rem;
  width: 80%;
  max-width: 450px;
  border-radius: 20px;
  border: none;
  outline: none;
  font-size: 1rem;
  color: #1e3a5f;
  font-weight: 600;
}

.course-container {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.available-courses,
.selected-courses {
  background-color: #2c4a7a;
  border-radius: 10px;
  padding: 1.2rem;
  flex: 1 1 400px;
  max-width: 480px;
  box-shadow: 0 0 10px #0f2945;
}

h3 {
  margin-bottom: 1rem;
  font-weight: 700;
  text-align: center;
  color: #acc2d7;
}

.course-item {
  background: #37619f;
  padding: 0.7rem;
  margin-bottom: 0.8rem;
  border-radius: 8px;
  cursor: default;
  user-select: none;
}

.course-header {
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #e1e9f5;
  font-weight: 700;
}

.profesor {
  font-style: italic;
  font-weight: 400;
  color: #a8bad8;
}

.horarios {
  font-size: 0.9rem;
  color: #d4dceb;
}

.horarios ul {
  margin: 0.3rem 0 0 0;
  padding-left: 1.2rem;
  list-style-type: disc;
}

.horario-item {
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  margin-bottom: 0.2rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.horario-item:hover:not(.disabled) {
  background-color: #7fa7dc;
  color: #1e3a5f;
  font-weight: 700;
}

.horario-item.disabled {
  cursor: not-allowed;
  opacity: 0.5;
  color: #bccadf;
}

.selected-courses ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.selected-item {
  background-color: #5380c7;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #e9f2ff;
  font-weight: 600;
}

.selected-item button {
  background-color: #e74c3c;
  border: none;
  padding: 0.3rem 0.6rem;
  border-radius: 50%;
  font-size: 1.1rem;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;
  user-select: none;
}

.selected-item button:hover {
  background-color: #c0392b;
}

.no-results,
.no-selection {
  color: #a0afc7;
  font-style: italic;
  text-align: center;
  padding: 1rem 0;
  font-weight: 600;
}

/* Animaciones list */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

@media (max-width: 900px) {
  .course-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>
