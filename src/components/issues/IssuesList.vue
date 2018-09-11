<template>
  <ul id="issues-app">
    <li class="issue" v-for="issue in issues" :key="issue.id">
    <router-link v-if="issue.userId !== 0" :to="`/issues/${issue.id}`">
      <h3> {{issue.name}} </h3>
      <p class="issue__text">{{ issue.description}}</p>
      <div class="issue" v-for="searchterm in issue.searchTerms" :key="searchterm">
          <p> {{searchterm}} </p>
      </div>
    </router-link>
    <a v-else>
      <h3> {{issue.name}} </h3>
      <p class="issue__text">{{ issue.description}}</p>
      <div class="issue" v-for="searchterm in issue.searchTerms" :key="searchterm">
          <p> {{searchterm}} </p>
      </div>
      <p class="reserved"> reserved search </p>
    </a>
    </li>

  </ul>

</template>

<script>

export default {
  props: {    
    issues: Array
  }
};
</script>



<style scoped>

h3{
  font-family:'Playfair Display';
  font-size:25px;
  letter-spacing: 1px;
  color:white;
  margin-bottom:0;
  text-transform: none;
  padding: 20px;
}
h1 {
    margin-top: 0px;
}
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 10px;
  padding-left:0px;
  color:black;
  
}
.length {color: black;}
li {
  min-height: 250px;
  background:#2b2b2b;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* box-shadow: 0px 1px 5px rgba(0,0,0,0.2); */
  transition: all .2s ease-in-out;
  list-style: none;
  text-align: center;
  position: relative;
}
li:hover {
  transform: scale(1.03); 
}

p {color: white;}

.reserved {color: red; font-size: 8px;}
@supports ((display: -ms-grid) or (display: grid)) {
    @media (max-width: 800px) {
      ul {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        margin: 5%;
      }
    }
}


</style>