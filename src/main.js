import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: AllUsers },
    { path: '/goals', component: CourseGoals },
  ],
});
const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);
// we have strange behavier since we set route switch animation
//because when app starts vue-router goes fron no route
// to given path, to avoid this behavior we are doing next =>
router.isReady().then(function () {
  app.mount('#app');
});
//with this function we set up router and next mount our app

//!!important we can animate route when it has only 1 child
//!!element so keep in mind to make one div or something
//to make whole route as child of one element
