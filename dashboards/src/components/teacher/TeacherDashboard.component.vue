<!-- src/views/teacher/Dashboard.vue -->
<template>
  <teacher-navbar></teacher-navbar>
  <teacher-sidebar :is-open="sidebarOpen" @close-sidebar="closeSidebar"
                    @navigate="handleNavigation" ></teacher-sidebar>
  <welcome-card></welcome-card>
  <stats-cards></stats-cards>
  <course-table></course-table>
</template>

<script>
import TeacherNavbar from '../../shared/components/TeacherNavbar.component.vue'
import TeacherSidebar from '../../shared/components/TeacherSidebar.component.vue'
import WelcomeCard from '../../components/teacher/WelcomeCard.component.vue'
import StatsCards from '../../components/teacher/StatsCards.component.vue'
import CourseTable from '../../components/teacher/CourseTable.component.vue'

export default {
  components: {
    TeacherNavbar,
    TeacherSidebar,
    WelcomeCard,
    StatsCards,
    CourseTable,
  },
  data() {
    return {
      stats: {
        courses: 3,
        students: 76,
        evaluations: 5
      },
      courses: [
        { name: 'Matemática I', schedule: 'Lun 8-10am', room: 'A101', students: 35 },
        { name: 'Algoritmos', schedule: 'Mar 10-12am', room: 'B202', students: 28 },
        { name: 'Estadística', schedule: 'Vie 2-4pm', room: 'C303', students: 13 }
      ]
    }
  }
}
</script>
