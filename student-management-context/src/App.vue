<script>
import HeaderContent from "./public/components/header-content.component.vue";
import LenguageSwitcher from "./public/components/lenguage-switcher.component.vue";

export default {
  name: "App",
  components: {HeaderContent},
  data() {
    return {
      item: [
        { label: 'option.student-management', to: '/student-management' },
      ]
    }
  }
}

</script>

<template>
  <div>
    <header-content></header-content>

    <nav>
      <router-link to="/student-management"></router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>


<style scoped>

</style>