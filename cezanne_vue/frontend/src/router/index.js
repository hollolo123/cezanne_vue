import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/Main.vue';
import Education from '@/views/education/Education.vue';
import EducationDetail from '@/views/education/EducationDetail.vue';
import Portfolio from '@/views/portfolio/Portfolio.vue';

// Route 정의 : URL 요청에 대해 어떤 페이지 (컴포넌트) 를 보여줄 지에 대한 매핑 정보 정의
const routes = [
  {
    path : '/',
    name : 'home',
    component : Main,
  },
  
  // education
  {
    path : '/education',
    children : [
      {
        path : '',
        component : Education
      },
      {
        path : '/education/:id', // :slug 간편 URL : 페이지의 내용을 설명하는 고유한 문자열 
        name : 'educationDetail',
        component : EducationDetail,
      },
    ]
  },
  // portfolio
  {
    path : '/portfolio',
    name : 'portfolio',
    component : Portfolio,
  },
];

const router = createRouter({
  history : createWebHistory('/'),
  routes
});

export default router;