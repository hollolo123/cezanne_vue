<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <SubVisual :subTopCont="subTopCont" />
    <div id="contents_body">
      <div class="inner">
        <div class="notice__detail">
          <div class="title__wrap">
            <h4>{{ boardDetailData.title }}</h4>
            <span>등록일 : {{ boardDetailData.date }}</span>   
            <span>조회 수 : {{ viewCount }}</span>
          </div>
          <div class="detail__content">
            <h5 class="title">평일 주간반</h5>
            <div class="content__img">
              <img src="@/assets/images/community/notice/notice_detail_1.png" alt="">
            </div>
            <h5 class="title">평일 야간반</h5>
            <div class="content__img">
              <img src="@/assets/images/community/notice/notice_detail_2.png" alt="">
            </div>
            <h5 class="title">주말 주간반</h5>
            <div class="content__img">
              <img src="@/assets/images/community/notice/notice_detail_3.png" alt="">
            </div>
          </div>
        </div>
        <div class="detail__btn__container">
          <a href="#" class="btn__list" @click="goToList">목록으로</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBtn from '@/components/common/TopBtn.vue';
  import SubVisual from '@/components/common/SubVisual.vue'; 
  import boardDataJson from '@/data/board/board_data.json';

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
        boardList : boardDataJson.board,
        viewCount : 0
      }
    },
    computed : {
      boardDetailData() {
        const id = parseInt(this.$route.params.id);
        return this.boardList.find(item => item.id === id) || {};
      }
    },
    methods : {
      goToList() {
        this.$router.push('/community/notice');
      }
    },
    mounted() {
      this.viewCount++;
      console.log(this.viewCount);
    }
  }
</script>