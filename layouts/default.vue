<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>GOLFFA</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">홈</v-btn>
      <v-btn text to="/teams">팀 편성</v-btn>
      <v-btn text to="/about">소개</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>

    <v-footer app>
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} GOLFFA
      </v-col>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>