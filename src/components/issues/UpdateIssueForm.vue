<template id="issue-form">
  <section class="add-issue">
    <form v-if="issue" @submit.prevent="handleSubmit">
       <label>
        Search label (Ex: Gun Control)
         <input type="text" name="name" placeholder="Search Label" required
           v-model="issue.name">
       </label>
       <p> Enter up to three search terms. </p>
      <label>
       Search label 1 (Ex: gun)
        <input type="text" name="name" placeholder="Search Label 1" required
          v-model="issue.searchTerms[0]">
      </label>
      <label>
       Search label 2 ( Ex: guns)
        <input v-if="issue.searchTerms[1]" type="text" name="name" placeholder="Search Label 2"
          v-model="issue.searchTerms[1]">
        <input v-else type="text" name="name" placeholder="Search Label 2"
          v-model="search2">
      </label>
      <label>
       Search label 3 ( Ex: nra)
        <input v-if="issue.searchTerms[2]" type="text" name="name" placeholder="Search Label 2"
          v-model="issue.searchTerms[2]">
        <input v-else type="text" name="name" placeholder="Search Label 3"
          v-model="search3">
      </label>

      <label>
        <button type="submit"> Update </button>
      </label>
    </form>
  </section>
</template>
<script>

export default {
  props: {
    issue: Object,
    onEdit: {
      type: Function,
    }
  },
  data() {
    return {
      search2: null,
      search3: null
    };
  },
  methods: {
    handleSubmit() {
      if(this.search2){
        this.issue.searchTerms.push(this.search2);
      }
      if(this.search3){
        this.issue.searchTerms.push(this.search3);
      }
      this.onEdit(this.issue);
    }
  }
};
</script>


<style>

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


@supports ((display: -ms-grid) or (display: grid)) {
    @media (max-width: 1080px) {
        .add-issue {
          width: 80%;
        }
    }
}

</style>