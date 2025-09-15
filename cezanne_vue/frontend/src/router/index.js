import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import Test from '../views/test/Test.vue';

// Route 정의 : URL 요청에 대해 어떤 페이지 (컴포넌트) 를 보여줄 지에 대한 매핑 정보 정의
const routes = [
  {
    path : '/',
    name : 'home',
    component : Main,
  },
  {
    path : '/test',
    name : 'test',
    component : Test,
  },
];

const router = createRouter({
  history : createWebHistory('/'),
  routes
});

export default router;