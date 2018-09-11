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
import { getUserIssueById, getStateById, getTweets, getUserIssues, getStates } from '../../services/api';

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
    getStates()
      .then(states => {
        this.states = states;
      });
    getUserIssues()
      .then(issues => {
        this.issues = issues;
      });
  },
  components: { 
    ChoicesForm,
    Politicians,
    FilteredResults,
    Loading,
  },
  methods: {
    handleAdd(choice) {
      this.loading = true;
      this.stateChoiceId = choice.state;
      this.issueChoiceId = choice.issue;
      this.tweets1 = [];
      this.tweets2 = [];
      getUserIssueById(this.issueChoiceId)
        .then(issue => {
          console.log('issue', issue);
          this.issue = issue;
          this.searchTerms = this.issue.searchTerms;
        });
      getStateById(this.stateChoiceId)
        .then(state => {
          this.state = state.name;
          this.name = state.name;
          this.pol1 = state.pol1;
          this.pol2 = state.pol2;
          this.screenName1 = state.twitter1;
          this.screenName2 = state.twitter2;
        })
        .then(() => {
          getTweets({ screenName: this.screenName1 })
            .then(tweets => {
              this.tweets1 = tweets;
              console.log(this.tweets1[0]);
            })
            .catch((error) => {
              console.log('error: ', error);
            });
          getTweets({ screenName: this.screenName2 })
            .then(tweets => {
              this.tweets2 = tweets;
              this.loading = false;
            })
            .catch((error) => {
              console.log('error: ', error);
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


@supports ((display: -ms-grid) or (display: grid)) {
    @media (max-width: 500px) {

      .filtered-results {
        display: flex;
        flex-direction: column;
      }

    section {
      padding-bottom: 250px;
      }
    }
}
@supports ((display: -ms-grid) or (display: grid)) {
    @media (max-width: 1080px) {
      .filtered-results {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

    section {
      padding-bottom: 600px;
      }
    }
}
</style>