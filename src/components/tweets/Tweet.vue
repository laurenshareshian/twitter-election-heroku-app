<template id="tweet-template">
  <div class="tweet">
    <Tweet :id="tweet.idStr" :options="{ cards: 'hidden' }"></Tweet>
  </div>
</template>

<script>
import Tweet from 'vue-tweet-embed/tweet';

export default {
  props: {
    tweet: Object
  },
  components: {
    Tweet
  },
  data() {
    return {
      url: null
    };
  },
  created() {
    this.handleUrl();
  },
  methods: {
    handleUrl() {
      let reg = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#/%?=~_|!:,.;]*[-A-Z0-9+&@#/%=~_|])/ig;
      this.url = this.tweet.text.match(reg)[0];
      return this.tweet.text.replace(reg, '');
    }

  }
};

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
.tweet {
  margin: 40px;
  width: 500px;
}

a {
  font-family: 'Open Sans';
  text-decoration: none;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 40px;
  padding:10px;
  color:black;
}

p {
  padding: 10px;
}

</style>
