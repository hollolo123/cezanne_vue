<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <!-- Sub Visual -->
    <SubVisual :subTopCont="subTopCont" />
    <div id="contents_body">
      <div class="inner">
        <div class="notice__detail">
          <div class="title__wrap">
            <h4>{{ competitionDetailData.title }}</h4>
            <span>등록일 : {{ competitionDetailData.date }}</span>      
            <span>조회 수 : {{ competitionDetailData.view }}</span>
          </div>
          <div class="detail__content">
            <h5 class="title">{{ competitionDetailData.detail_content }}</h5>
          </div>
        </div>
        <div class="detail__btn__container">
          <router-link to="/community/competition" class="btn__list">목록으로</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBtn from '@/components/common/TopBtn.vue';
  import SubVisual from '@/components/common/SubVisual.vue';
  import { competitionData } from '@/data/board/competition_data.js'; 

  export default {
    components : {
      TopBtn,
      SubVisual,  
    },
    data() {
      return {
        subTopCont : {
          className : 'post',  
          title : '공모전',
          desc : '공모전을 통해 나만의 커리어를 만들자! \n대전직업전문학교에서 제공하는 각종 공모전 정보입니다.',
          url : '/community/competition'
        },
        competitionData: competitionData, 
      }
    },
    computed : {
      competitionDetailData() {
        const id = parseInt(this.$route.params.id);
        return this.competitionData.find(item => item.id === id) || {};
      }
    }
  }
</script>

<style lang="scss">
@use '@/styles/community/board.scss' as *;

</style>