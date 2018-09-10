<template id="tweet-template">
  <section class="add-tweet">
    <h1>New Tweet</h1>
    <form @submit.prevent="handleSubmit">
      <label>
       Created at:
        <input type="text" name="created-at" placeholder="Created at" required
          v-model="tweet.created_at">
      </label>
      <label>
       Id:
        <input type="text" name="id" placeholder="Id" required
          v-model="tweet.id">
      </label>
            <label>
       Text:
        <input type="text" name="text" placeholder="Text" required
          v-model="tweet.text">
      </label>
            <label>
       Retweet Count:
        <input type="text" name="retweet-count" placeholder="Retweet count" required
          v-model="tweet.retweet_count">
      </label>
      <label>
        <button type="submit">Add</button>
      </label>
    </form>
  </section>
</template>

<script>
const initTweet = () => {
  return {
    created_at: '', 
    id: '',
    text: '',
    retweet_count: '',

  };
};
export default {
  props: {
    onAdd: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      tweet: initTweet()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.tweet)
        .then(() => {
          this.tweet = initTweet();
        });
    }
  }
};
</script>

<style>
.add-tweet {
  width: 300px;
  text-align: left;
  margin: auto;
}
label {
  display: block;
}
</style>