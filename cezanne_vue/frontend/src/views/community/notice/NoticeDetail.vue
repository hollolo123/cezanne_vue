<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <SubVisual :subTopCont="subTopCont" />
    <div id="contents_body">
      <div class="inner">
        <div class="notice__detail">
          <div class="title__wrap">
            <h4>{{ noticeDetailData.title }}</h4>
            <span>등록일 : {{ noticeDetailData.date }}</span>   
            <span>조회 수 : {{ viewCount }}</span>
          </div>
          <div class="detail__content">
            <h5 class="title">{{ noticeDetailData.detail_content }}</h5>
            <div class="content__img">
              <img 
                v-for="img in noticeDetailData.img_list"
                :key="img.img"
                :src="img.img"
              alt="">
            </div>
          </div>
        </div>
        <div class="detail__btn__container">
          <router-link to="/community/notice" class="btn__list">목록으로</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBtn from '@/components/common/TopBtn.vue';
  import SubVisual from '@/components/common/SubVisual.vue'; 
  import { noticeData } from '@/data/board/notice_data.js';    

  export default {
    components : {
      TopBtn,
      SubVisual
    },
    data() {
      return {
        subTopCont : {
          className : 'commu',  
          title : '공지사항',
          desc : '대전세잔직업전문학교에서 진행하는 \n다양한 이벤트와 새로운 소식을 알려드립니다.',
          url : '/community/notice'
        },
        noticeList : noticeData,
        viewCount : 0
      }
    },
    computed : {
      noticeDetailData() {
        const id = parseInt(this.$route.params.id);
          return this.noticeList.find(item => item.id === id) || {};
      }
    },
    methods : {
    
    },
    mounted() {
      this.viewCount++;
      console.log(this.viewCount);
    }
  }
</script>