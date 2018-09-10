<template>
    <div class="politicians">
      <div v-if="state">
          <h3>Your {{state}} race is: </h3>
          <p> {{pol1}} </p>
          <p> vs. </p>
          <p> {{pol2}} </p>
      </div>
    </div>

</template>

<script>

export default {
  props: {
    state: String,
    pol1: String,
    pol2: String
  }
};
</script>
<style scoped>
.politicians {
  background: white;
  padding: 30px;
  box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
  text-align: center;
  text-transform: uppercase;
}
/* p {
  text-align: center;
  text-transform: uppercase;
} */
</style>