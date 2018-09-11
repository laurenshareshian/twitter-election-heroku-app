<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Go to <strong>Home</strong></RouterLink>
        &nbsp;
        <RouterLink v-if="!user" to="/auth">Sign In</RouterLink>
        &nbsp;
        <RouterLink v-if="user" to="/tweets">Tweets</RouterLink>
        &nbsp;
        <RouterLink v-if="user" to="/issues">Issues</RouterLink>
        &nbsp;
        <a v-if="user" href="/" @click.prevent="handleSignOut">Sign Out</a>
    </nav>
    </header>
    <RouterView :onUser="handleUser"/>
    <!-- <router-view></router-view> -->

    <footer> 
      <img class="heart-image" :src="('/made-with-love.png')" />
      <p> Made @ alchemy code lab PDX</p>
    </footer>
    
  </div>
</template>



<script>
import { checkForToken, signOut } from './services/api';
export default {
  data() {
    return {
      user: null
    };
  },
  created() {
    this.user = checkForToken();
  },
  methods: {
    handleUser(user) {
      this.user = user;
    },
    handleSignOut() {
      signOut();
      this.user = null;
      this.$router.push('/');
    }
  }
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