<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { HEADER_HEIGHT } from '../utils/consts';
</script>

<template>
  <header class="header" :style="`height: ${HEADER_HEIGHT}`">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5I-ChPMN13cvMFEx1Oqy2pZSeOxzudaVCtvdU26ZJlk9Hiaxw19phG9D7gfsFtVaeL4&usqp=CAU"
      class="header__logo"
    />
    <nav class="header__nav">
      <RouterLink class="header__nav__route" to="/">Order Book</RouterLink>
      <RouterLink class="header__nav__route" to="/settings"
        >Settings</RouterLink
      >
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #31363f;
  width: 100%;
  border-radius: 0 0 24px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
}

.header__logo {
  width: 100%;
  max-width: 60px;
  height: 60px;
  border-radius: 30px;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header__nav__route {
  padding: 12px;
}
</style>
