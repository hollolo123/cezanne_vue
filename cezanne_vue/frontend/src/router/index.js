import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/Main.vue';
import Education from '@/views/education/Education.vue';
import EducationDetail from '@/views/education/EducationDetail.vue';
import Portfolio from '@/views/portfolio/Portfolio.vue';
import PortfolioDetail from '@/views/portfolio/PortfolioDetail.vue';
import Counsel from '@/views/counsel/Counsel.vue';
import Receipt from '@/views/counsel/Receipt.vue';
import Job from '@/views/job/Job.vue';    
import JobDetail from '@/views/job/JobDetail.vue';          
import Notice from '@/views/community/notice/Notice.vue';
import About from '@/views/about/About.vue';
import NoticeDetail from '@/views/community/notice/NoticeDetail.vue';
import Gallery from '@/views/community/gallery/Gallery.vue';
import GalleryDetail from '@/views/community/gallery/GalleryDetail.vue';
import Competition from '@/views/community/competition/Competition.vue';
import CompetitionDetail from '@/views/community/competition/CompetitionDetail.vue';
import Post from '@/views/community/Post.vue';
import Qualification from '@/views/community/Qualification.vue';

// Route 정의 : URL 요청에 대해 어떤 페이지 (컴포넌트) 를 보여줄 지에 대한 매핑 정보 정의
const routes = [
  {
    path : '/',
    name : 'home',
    component : Main,
  },
  // about
  {
    path : '/about',
    name : 'about',
    component : About,
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
        path : ':id', // :slug 간편 URL : 페이지의 내용을 설명하는 고유한 문자열 
        name : 'educationDetail',
        component : EducationDetail,
      },
    ]
  },
  // portfolio
  {
    path : '/portfolio',
    children : [
      {
        path : '',
        component : Portfolio
      },
      {
        path : ':id',
        name : 'portfolioDetail',
        component : PortfolioDetail,  
      },
    ]
  },

  // counsel
  {
    path : '/counsel',
    children : [
      {
        path : '',  
        name : 'counsel',
        component : Counsel,
      },
      {
        path : 'receipt',
        name : 'receipt',
        component : Receipt,
      }
    ]
  },

  // job
  {
    path : '/job',
    children :  [
      {
        path : '',
        name : 'job',
        component : Job,
      },
      {
        path : 'detail/:id',   
        name : 'jobDetail',
        component : JobDetail,  
      }
    ]
  },
  
  // community
  {
    path : '/community',
    children : [
      {
        path : 'notice',
        component : Notice,
      },
      {
        path : 'notice/:id',
        name : 'noticeDetail',
        component : NoticeDetail  
      },
      {
        path : 'post',
        name : 'post',
        component : Post
      },
      {
        path : 'gallery',
        component : Gallery
      },
      {
        path : 'gallery/galleryDetail/:id',
        name : 'galleryDetail',
        component : GalleryDetail
      },
      {
        path : 'competition',
        component : Competition
      },
      {
        path : 'competition/:id',
        name : 'competitionDetail',
        component : CompetitionDetail
      },
      {
        path : 'qualification',
        component : Qualification
      },
    ]
  },
];

const router = createRouter({
  history : createWebHistory('/'),
  routes
});

export default router;