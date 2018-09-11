<template id="tweet-template">
  <section class="add-issue">
    <h3>Personalized Issue Search</h3>
    <form @submit.prevent="handleSubmit">
      <label>
       Search label (Ex: Gun Control)
        <input type="text" name="name" placeholder="Search Label" required
          v-model="issue.name">
      </label>
      <p> Enter up to three search terms. </p>
      <label>
       Search term 1 (Ex: gun)
        <input type="text" name="search1" placeholder="Search Term 1" required
          v-model="search1">
      </label>
      <label>
       Search term 2 (Ex: guns)
        <input type="text" name="search2" placeholder="Search Term 2"
          v-model="search2">
      </label>
      <label>
      Search term 3 (Ex: nra)
      <input type="text" name="search3" placeholder="Search Term 3"
          v-model="search3">
      </label>
      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>

const initIssue = () => {
  return {
    name: '', 
    searchTerms: [],
  };
};
export default {
  props: {
    onAdd: {
      type: Function
    }
  },
  data() {
    return {
      issue: initIssue(),
      search1: null,
      search2: null,
      search3: null
    };
  },
  methods: {
    handleSubmit() {
      this.issue.searchTerms.push(this.search1);
      if(this.search2){
        this.issue.searchTerms.push(this.search2);
      }
      if(this.search3){
        this.issue.searchTerms.push(this.search3);
      }
      console.log('inside handle submit', this.issue);
      return this.onAdd(this.issue);
    }
  }
};
</script>

<style scoped>
section {
  font-family: 'Open Sans';
}
.add-issue {
  width: 500px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
  margin: 20px;
}
form {
  background: white;
  padding: 30px;
  box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
}
p {
  text-align: center;
  text-transform: uppercase;
}
button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 20px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
}
button:hover {
    transform: scale(1.1); 
}

h3 {text-align: center;}

</style>