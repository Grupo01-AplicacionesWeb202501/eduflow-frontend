<script>
import HeaderContent from "./public/components/header-content.component.vue";

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

<style>
nav {
  margin-bottom: 1rem;
}
nav a {
  text-decoration: none;
  color: #0077cc;
  margin-right: 1rem;
  font-weight: bold;
}
</style>