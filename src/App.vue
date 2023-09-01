<script setup>
import NavDrawer from './components/drawer/navDrawer.vue';
import appBar from './components/appBar/appBar.vue';

</script>
<script>
export default {
  data () {
    return {
      drawer: true,
    }
  },
}
</script>
<template>
  <v-layout>
    <!-- DRAWER -->
    <NavDrawer v-model="drawer" />
    <!-- end:DRAWER -->
    <!-- APP BAR -->
    <appBar>
      <!-- BURGER BTN -->
      <!-- slot burger button -->
      <!-- elemen ini akan mengisi slot outlet burger -->
      <template #burger>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <!-- end:BURGER BTN -->
    </appBar>
    <!-- MAIN VIEW -->
    <v-main>
        <!-- route to views -->
        <RouterView/>
    </v-main>
    <!-- end:MAIN VIEW -->
  </v-layout>
</template>
