<template>
  <div class="course-table-container">
    <div class="table-header">
      <h3 class="table-title">Tus cursos</h3>
      <div class="table-actions">
        <div class="search-box">
          <SearchIcon class="search-icon" />
          <input
              v-model="searchTerm"
              type="text"
              placeholder="Buscar cursos..."
              class="search-input"
          />
        </div>
      </div>
    </div>

    <div class="table-wrapper">
      <table class="course-table">
        <thead>
        <tr>
          <th @click="sortBy('name')" class="sortable">
            <span>Nombre</span>
            <SortIcon class="sort-icon" />
          </th>
          <th @click="sortBy('schedule')" class="sortable">
            <span>Horario</span>
            <SortIcon class="sort-icon" />
          </th>
          <th>Aula</th>
          <th @click="sortBy('students')" class="sortable">
            <span class="student">Estudiantes</span>
            <SortIcon class="sort-icon" />
          </th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="course in filteredCourses"
            :key="course.id"
            class="table-row"
        >
          <td class="course-name">
            <div class="course-info">
              <BookIcon class="course-icon" />
              <div>
                <span class="name">{{ course.name }}</span>
                <span class="code">{{ course.code }}</span>
              </div>
            </div>
          </td>
          <td class="schedule">{{ course.schedule }}</td>
          <td class="room">
            <span class="room-badge">{{ course.room }}</span>
          </td>
          <td class="students">
            <div class="students-info">
              <UsersIcon class="users-icon" />
              <span>{{ course.students }}</span>
            </div>
          </td>
          <td class="status">
              <span
                  class="status-badge"
                  :class="getStatusClass(course.status)"
              >
                {{ course.status }}
              </span>
          </td>
          <td class="actions">
            <button
                @click="viewCourse(course)"
                class="action-btn view-btn"
                title="Ver curso"
            >
              <EyeIcon />
            </button>
            <button
                @click="editCourse(course)"
                class="action-btn edit-btn"
                title="Editar curso"
            >
              <EditIcon />
            </button>
            <button
                @click="viewStudents(course)"
                class="action-btn students-btn"
                title="Ver estudiantes"
            >
              <UsersIcon />
            </button>
          </td>
        </tr>
        </tbody>
      </table>

      <div v-if="filteredCourses.length === 0" class="no-results">
        <div class="no-results-content">
          <BookIcon class="no-results-icon" />
          <h4>No se encontraron cursos</h4>
          <p>{{ searchTerm ? 'Intenta con otros términos de búsqueda' : 'No tienes cursos asignados' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

// Iconos SVG
const SearchIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="M21 21l-4.35-4.35"></path>
    </svg>
  `
}

const SortIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 9l4-4 4 4"></path>
      <path d="M16 15l-4 4-4-4"></path>
    </svg>
  `
}

const BookIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  `
}

const UsersIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  `
}

const EyeIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  `
}

const EditIcon = {
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  `
}

export default {
  name: 'CourseTable',
  components: {
    SearchIcon,
    SortIcon,
    BookIcon,
    UsersIcon,
    EyeIcon,
    EditIcon
  },
  props: {
    courses: {
      type: Array,
      default: () => [
        {
          id: 1,
          name: 'Matemáticas Avanzadas',
          code: 'MAT-401',
          schedule: 'Lun-Mie 08:00-10:00',
          room: 'A-201',
          students: 32,
          status: 'Activo'
        },
        {
          id: 2,
          name: 'Física Cuántica',
          code: 'FIS-502',
          schedule: 'Mar-Jue 14:00-16:00',
          room: 'B-105',
          students: 28,
          status: 'Activo'
        },
        {
          id: 3,
          name: 'Química Orgánica',
          code: 'QUI-301',
          schedule: 'Vie 10:00-12:00',
          room: 'C-302',
          students: 25,
          status: 'Inactivo'
        },
        {
          id: 4,
          name: 'Algoritmos y Estructuras',
          code: 'CS-205',
          schedule: 'Lun-Vie 16:00-18:00',
          room: 'D-401',
          students: 45,
          status: 'Activo'
        }
      ]
    }
  },
  emits: ['view-course', 'edit-course', 'view-students'],
  setup(props, { emit }) {
    const searchTerm = ref('')
    const sortField = ref('')
    const sortDirection = ref('asc')

    const filteredCourses = computed(() => {
      let filtered = props.courses

      // Filtrar por término de búsqueda
      if (searchTerm.value) {
        const term = searchTerm.value.toLowerCase()
        filtered = filtered.filter(course =>
            course.name.toLowerCase().includes(term) ||
            course.code.toLowerCase().includes(term) ||
            course.room.toLowerCase().includes(term)
        )
      }

      // Ordenar
      if (sortField.value) {
        filtered = [...filtered].sort((a, b) => {
          let aVal = a[sortField.value]
          let bVal = b[sortField.value]

          if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase()
            bVal = bVal.toLowerCase()
          }

          if (aVal < bVal) return sortDirection.value === 'asc' ? -1 : 1
          if (aVal > bVal) return sortDirection.value === 'asc' ? 1 : -1
          return 0
        })
      }

      return filtered
    })

    const sortBy = (field) => {
      if (sortField.value === field) {
        sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
      } else {
        sortField.value = field
        sortDirection.value = 'asc'
      }
    }

    const getStatusClass = (status) => {
      return {
        'status-active': status === 'Activo',
        'status-inactive': status === 'Inactivo'
      }
    }

    const viewCourse = (course) => {
      emit('view-course', course)
    }

    const editCourse = (course) => {
      emit('edit-course', course)
    }

    const viewStudents = (course) => {
      emit('view-students', course)
    }

    return {
      searchTerm,
      filteredCourses,
      sortBy,
      getStatusClass,
      viewCourse,
      editCourse,
      viewStudents
    }
  }
}
</script>

<style scoped>
.course-table-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 2rem 4rem 2rem 6rem;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.table-title {
  font-size: 20px;
  font-weight: 600;
  margin: 0;
}

.table-actions {
  display: flex;
  gap: 16px;
  align-items: center;
}

.search-box {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: rgba(255, 255, 255, 0.7);
  z-index: 1;
}

.student {}

.search-input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 8px 12px 8px 36px;
  color: white;
  placeholder-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  width: 250px;
  transition: all 0.3s ease;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.table-wrapper {
  overflow-x: auto;
}

.course-table {
  width: 100%;
  border-collapse: collapse;
}

.course-table th {
  background: #f8fafc;
  padding: 16px;
  text-align: left;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
  white-space: nowrap;
}

.course-table th.sortable {
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease;
}

.course-table th.sortable:hover {
  background: #f1f5f9;
}

.course-table th.sortable span {
  display: flex;
  align-items: center;
  gap: 6px;
}

.sort-icon {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.course-table th.sortable:hover .sort-icon {
  opacity: 1;
}

.table-row {
  transition: background-color 0.2s ease;
}

.table-row:hover {
  background: #f9fafb;
}

.course-table td {
  padding: 16px;
  border-bottom: 1px solid #f3f4f6;
  vertical-align: middle;
}

.course-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.course-icon {
  color: #667eea;
  background: #f0f4ff;
  padding: 8px;
  border-radius: 6px;
}

.course-info div {
  display: flex;
  flex-direction: column;
}

.name {
  font-weight: 600;
  color: #111827;
}

.code {
  font-size: 12px;
  color: #6b7280;
  margin-top: 2px;
}

.schedule {
  font-size: 14px;
  color: #374151;
}

.room-badge {
  background: #e0e7ff;
  color: #3730a3;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.students-info {
  display: flex;
  align-items: center;
  gap: 6px;
  color: black !important;
}

.users-icon {
  color: #6b7280;
}

.status-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.status-active {
  background: #dcfce7;
  color: #166534;
}

.status-inactive {
  background: #fef2f2;
  color: #991b1b;
}

.actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  padding: 6px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.view-btn {
  background: #e0f2fe;
  color: #0369a1;
}

.view-btn:hover {
  background: #bae6fd;
}

.edit-btn {
  background: #fef3c7;
  color: #92400e;
}

.edit-btn:hover {
  background: #fde68a;
}

.students-btn {
  background: #f3e8ff;
  color: #7c3aed;
}

.students-btn:hover {
  background: #e9d5ff;
}

.no-results {
  padding: 48px 24px;
  text-align: center;
}

.no-results-content {
  max-width: 300px;
  margin: 0 auto;
}

.no-results-icon {
  width: 48px;
  height: 48px;
  color: #d1d5db;
  margin: 0 auto 16px;
}

.no-results h4 {
  color: #374151;
  margin: 0 0 8px 0;
  font-size: 18px;
}

.no-results p {
  color: #6b7280;
  margin: 0;
  font-size: 14px;
}

/* Responsive */
@media (max-width: 768px) {
  .table-header {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .search-input {
    width: 100%;
  }

  .course-table th,
  .course-table td {
    padding: 12px 8px;
  }

  .actions {
    flex-direction: column;
    gap: 4px;
  }
}
</style>