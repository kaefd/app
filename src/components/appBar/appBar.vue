<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
<template>
  <v-app-bar :elevation="2">
    <!-- slot outlet burger -->
    <slot name="burger"></slot>
    <v-app-bar-title>Inventori</v-app-bar-title>
  </v-app-bar>
</template>
