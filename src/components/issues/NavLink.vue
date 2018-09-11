<template>
  <RouterLink v-bind="$attrs">
    <span class="nav-link">
      <slot/>
    </span>
  </RouterLink>
</template>

<style scoped>
.nav-link {
  height: 25px;
  background: red;
  color: white;
  padding: 15px;
  text-decoration: none;
}
.router-link-active .nav-link {
  background: red;
  opacity: 0.5;
}
</style>