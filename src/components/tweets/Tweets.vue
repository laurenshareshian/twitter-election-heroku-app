<template>
<section>
  <ChoicesForm :states="states"
               :issues="issues"
               :on-add="handleAdd"> </ChoicesForm>
  <Politicians :state="state"
              :pol1="pol1"
              :pol2="pol2"></Politicians>
  <div class="filtered-results">
    <FilteredResults :screen-name="screenName1"
                     :tweets="tweets1"
                     :search-terms="searchTerms">
                     </FilteredResults>
    <FilteredResults :screen-name="screenName2"
                     :tweets="tweets2"
                     :search-terms="searchTerms">
                     </FilteredResults>
    <Loading :loading="loading"> </Loading>
   </div> 
</section>
</template>

<script>
import ChoicesForm from './ChoicesForm.vue';
import Politicians from './Politicians.vue';
import Loading from './Loading.vue';
import FilteredResults from './FilteredResults.vue';
import api from '../../services/api';

export default {
  data() {
    return { 
      states: [], // all state election options
      issues: [], // all issue options
      searchTerms: [], // search terms for the chosen issue
      stateChoiceId: null, // index of user's state election choice
      issueChoiceId: null, // index of user's issue choice
      state: null, // user's state choice
      pol1: null, // politician 1 of state election
      pol2: null, // politician 2 of state election
      screenName1: null, // screenname 1 of state election
      screenName2: null, // screenname 2 of state election
      tweets1: [], // tweets of politician 1
      tweets2: [], // tweets of politician 2
      loading: false

    };
  },
  created() {
    api.getStates()
      .then(states => {
        this.states = states;
      });
    api.getIssues()
      .then(issues => {
        this.issues = issues;
      });
  },
  components: { 
    ChoicesForm,
    Politicians,
    FilteredResults,
    Loading
  },
  methods: {
    handleAdd(choice) {
      this.loading = true;
      this.stateChoiceId = choice.state;
      this.issueChoiceId = choice.issue;
      this.tweets1 = [];
      this.tweets2 = [];
      api.getIssueById(this.issueChoiceId)
        .then(issue => {
          this.issue = issue;
          this.searchTerms = this.issue.searchterms;
        });
      api.getStateById(this.stateChoiceId)
        .then(state => {
          this.state = state.name;
          this.name = state.name;
          this.pol1 = state.pol1;
          this.pol2 = state.pol2;
          this.screenName1 = state.twitter1;
          this.screenName2 = state.twitter2;
        })
        .then(() => {
          api.getTweets({ screenName: this.screenName1 })
            .then(tweets => {
              this.tweets1 = tweets;
              console.log(this.tweets1[0]);
            });
          api.getTweets({ screenName: this.screenName2 })
            .then(tweets => {
              this.tweets2 = tweets;
              this.loading = false;
            });
        });
      return choice;
    }
  }
};
</script>

<style>
.flex-box{
  display: flex;
  justify-content: space-around;
}

ul.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.filtered-results {
  display: flex;
}

section {
  padding-bottom: 500px;
}
</style>