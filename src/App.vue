<template>
  <div class="app">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/tweets">Tweets</router-link>
    </header>

    <router-view></router-view>

    <footer> 
      <img class="heart-image" :src="('/made-with-love.png')" />
      <p> Made @ alchemy code lab PDX</p>
    </footer>
    
  </div>
</template>



<script>
export default {
};
</script>

<style scoped>
footer p {
  text-align: center !important;
}
a {
  font-family: 'Open Sans';
  text-decoration: none;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 40px;
  padding:5px;
  color: white;
}
</style>