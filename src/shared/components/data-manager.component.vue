<script>

import toolbar from "primevue/toolbar";

export default {
  name: "data-manager",
  components: {toolbar},
  props:{
    items:{ type:Array, required:true}
  }
}

</script>
<template>
  <h3>Manage Categoria </h3>
  <pv-toolbar>
    <template #start></template>
    <template #end></template>
  </pv-toolbar>
</template>