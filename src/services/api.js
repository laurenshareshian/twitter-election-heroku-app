export default {
  // new tweets from twitter
  getTweets(screenName) {
    return fetch('http://localhost:3000/api/tweets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(screenName)
    })
      .then(response => response.json());
  },
  // get tweets directly from my json, not from twitter
  getOldTweets() {
    return fetch('http://localhost:3000/api/oldtweets', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  getStates() {
    return fetch('http://localhost:3000/api/states', {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json());
  },
  getIssues() {
    return fetch('http://localhost:3000/api/issues', {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json());
  },
  getStateById(id) {
    return fetch(`http://localhost:3000/api/states/${id}`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json());
  },
  getIssueById(id) {
    return fetch(`http://localhost:3000/api/issues/${id}`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => response.json());
  },
};
