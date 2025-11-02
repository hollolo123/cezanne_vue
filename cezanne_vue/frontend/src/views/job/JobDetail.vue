<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <!-- Sub Visual -->
    <SubVisual :subTopCont="subTopCont" />
    <!-- Contents Body -->
    <div id="contents_body">
      <div class="inner">
        <div class="job__detail">
          <div class="detail__wrap">
            <div class="detail__header">
              <div>
                <span class="category">취업 현황</span>
                <span class="date">{{ jobDetailData.date }}</span>
              </div>
              <h3>{{ jobDetailData.company }} - 입사를 축하드립니다.</h3>
              <span>{{ jobDetailData.name }}</span>
            </div>
            <!-- content -->
            <div class="content">
              <p>취업을 진심으로 축하드립니다.</p>
              <div class="con">
                <ul>
                  <li><span>이름 : {{ jobDetailData.name }}</span></li>
                  <li><span>과정 : </span></li>
                  <li><span>회사명 : {{ jobDetailData.company }}</span></li>
                  <li><span>담당 업무 : 업무명</span></li>
                  <li><span>채용 일자 : {{ jobDetailData.date }}</span></li>
                </ul>
              </div>
            </div>
            <!-- button -->
            <div class="detail__btn__container">
              <router-link to="/job" type="button" class="btn__list">목록으로</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBtn from '@/components/common/TopBtn.vue';
  import SubVisual from '@/components/common/SubVisual.vue';
  import { jobListData } from '@/data/job/job_list_data'; 

  export default {
    components : {
      TopBtn,
      SubVisual,
    },
    data() {
      return {
        jobListData,
        subTopCont : {
          className : 'job',
          title : '취업 현황',
          desc : '수강에서 끝나는 것이 아니라 전문 취업연계 시스템으로 수강생의 취업까지 책임집니다. \n 유수한 기업의 인재로 취업한 대전세잔직업전문학교의 수료생들이 이를 증명합니다.',
          url : '/job/',
        },
      }
    },
    computed: {
      jobDetailData(){
        const id = parseInt(this.$route.params.id);
        return jobListData.find(item => item.id === id) || {};
      }
    }
  }
</script>

<style lang="scss">
  @use '@/styles/job/job.scss';
</style>