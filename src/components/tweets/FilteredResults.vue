<template id="filter">
    <div v-if="tweets.length">
      <div v-if="this.filterTweets(tweets).length>0">
        <h3> @{{screenName}}</h3>
        <Tweet v-for="(tweet, index) in this.filterTweets(tweets)"
        :key="index"
        :tweet="tweet">
        </Tweet>
        </div>
        <div class="no-results" v-else>
          <h3> @{{screenName}}</h3>
          No results
        </div>
    </div>
</template>

<script>
import Tweet from './Tweet';
export default {
  props: {
    screenName: String,
    searchTerms: Array,
    tweets: Array 
  },
  components: {
    Tweet
  },
  methods: {
    filterTweets(tweets) {
      return tweets.map(value => {
        return { text: value.text, created_at: value.created_at, idStr: value.id_str };
      }).filter(value => {
        let words = value.text.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '').split(' ');
        return words.some(r=> this.searchTerms.indexOf(r) >= 0);
      }
      );
    }
  }
};
</script>

<style scoped>
.add-tweet {
  width: 300px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
}
h3 {
  text-align: center;
}
.no-results{
  margin-right:100px;
  padding-right: 100px;
  padding-left: 100px;
}
</style>