<template>
  <section>
    <h2>Edit issue</h2>
    <UpdateIssueForm 
      label="Edit"
      :issue="issue"
      :onEdit="handleEdit"/>
  </section>
</template>

<script>
import UpdateIssueForm from './UpdateIssueForm.vue';
import { getUserIssueById, updateUserIssue } from '../../services/api';
export default {
  components: { 
    UpdateIssueForm 
  },
  data() {
    return {
      issue: null,
    };
  },
  created() {
    getUserIssueById(this.$route.params.id)
      .then(issue => {
        this.issue = issue;
      });
  },
  methods: {
    handleEdit(issue) {
      updateUserIssue(issue)
        .then(() => {
          this.$router.push('/issues');
        });
    }
  }
};
</script>

<style scoped>
h2 {text-align: center;}
</style>