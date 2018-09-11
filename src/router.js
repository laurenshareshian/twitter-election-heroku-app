import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Auth from './components/signup/Auth.vue';
import Tweets from './components/tweets/Tweets.vue';

import Issues from './components/issues/Issues.vue';
import IssuesList from './components/issues/IssuesList.vue';
import AddIssue from './components/issues/AddIssue.vue';
import UpdateIssue from './components/issues/UpdateIssue.vue';
import IssueDetail from './components/issues/IssueDetail.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/auth', component: Auth },
    { 
      path: '/issues', 
      component: Issues,
      children: [
        { path: 'list', component: IssuesList },
        { path: 'new', component: AddIssue },
        { path: ':id', component: IssueDetail },
        { path: ':id/edit', component: UpdateIssue },
        { path: '', redirect: 'list' }
      ]
    },
    { path: '/tweets', component: Tweets },
    { path: '*', redirect: '/' }
  ]
});