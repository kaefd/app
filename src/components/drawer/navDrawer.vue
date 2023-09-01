<template>
  <v-navigation-drawer>
    <!-- NAV HEADER -->
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="John Leider"
      class="px-5 py-3"
      nav
    />
    <!-- end:NAV HEADER -->
    <v-divider></v-divider>
    <!-- NAV LIST/CONTENT -->
    <v-list density="compact" nav>
      <router-link to="/">
        <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
      </router-link>
      <router-link to="about">
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
      </router-link>
    </v-list>
    <!-- end:NAV LIST -->
  </v-navigation-drawer>
</template>
