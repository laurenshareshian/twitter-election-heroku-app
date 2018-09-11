<template>
  <div>
    <nav class="tiles">
      <NavLink to="/issues/list">list issues</NavLink>
      &nbsp;
      <NavLink to="/issues/new">add issue</NavLink>
      &nbsp;
      <!-- <NavLink to="/issues/edit">update issue</NavLink>
      &nbsp; -->
    </nav>
    <RouterView 
      :issues="issues"
      :on-add="handleAdd"
    ></RouterView>
  
  </div>
</template>

<script>
import { addUserIssue, getUserIssues } from '../../services/api';
import NavLink from './NavLink';
export default {
  data() {
    return { 
      issues: null
    };
  },
  created() {
    getUserIssues()
      .then(issues => {
        this.issues = issues;
      });
  },
  watch: {
    issues(newIssues, oldIssues) {
      if(newIssues !== oldIssues) {
        getUserIssues()
          .then(issues => {
            this.issues = issues;
          });
      }
    }
  },
  components: {
    NavLink
  },
  methods: {
    handleAdd(issue) {
      return addUserIssue(issue)
        .then(saved => {
          console.log('inside handle add', saved);
          this.$router.push('/issues');
        });
    }
  }
};
</script>

<style scoped>
.tiles {

  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
pre {
  text-align: left;
}

.router-link-exact-active {
  margin: none !important;
}
a {
  margin: 50px;
}

</style>