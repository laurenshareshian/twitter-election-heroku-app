<template>
    <div>
      <section v-if="issue">
        <h2> {{issue.name}} </h2>
        <p class="issue__text">{{ issue.description}}</p>
        <div class="issue" v-for="(searchterm, i) in issue.searchTerms" :key="i">
            <p> {{searchterm}} </p>
        </div>

          <button>
            <router-link :to="`/issues/${issue.id}/edit`"> Edit
            </router-link>
          </button>

        <button @click="handleDelete">Delete</button>
      </section>
    </div>

</template>

<script>
import { deleteUserIssue, getUserIssueById } from '../../services/api';
export default {
  props: {
    onRemove: {
      type: Function
    }
  },
  data() {
    return { 
      issue: null
    };
  },
  created() {
    getUserIssueById(this.$route.params.id)
      .then(issue => {
        this.issue = issue;
      });
  },
  methods: {
    handleDelete() {
      return deleteUserIssue(this.$route.params.id)
        .then(() => {
          this.$router.push('/issues');
        });
    }
  }
};
</script>

<style scoped>
p {
  text-align: center !important;
  text-transform: uppercase;
}
section {
  margin-bottom: 200px;
}
h2 {
    margin-top: 100px;
    text-align: center}
button {
    background: #fa504d;
    border: none;
    color: white;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 20px;
    margin-bottom: 10px;
    font-weight: 600;
    box-shadow: -4px 2px 20px -6px rgba(0,0,0,0.75);
    transition: all .2s ease-in-out;
    width: 15%;
    align-self: center;
}
button:hover {
    transform: scale(1.1); 
}
section{
  display: flex;
  flex-direction: column;
  align-content: center;
}
a {
    font-family: 'Open Sans';
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
  }



.reserved {color: red; font-size: 8px;}
@supports ((display: -ms-grid) or (display: grid)) {
    @media (max-width: 1080px) {
        button{
          width: 30%;
          margin-top: 40px;
      }
    }
}
</style>