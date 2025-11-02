<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <!-- Sub Visual -->
    <SubVisual :subTopCont="subTopCont" />
    <!-- Contents Body -->
    <div id="contents_body">
      <div class="inner">
        <div class="job">
          <div class="job__top">
            <div>
              <span>total</span>
              <strong data-count></strong>
            </div>
            <div class="top__search">
              <div class="input__wrap">
                <input 
                  type="text" 
                  name="search" 
                  id="search" 
                  autocomplete="off"
                  placeholder="검색"
                >
                <button type="button"><i class="ri-search-line"></i></button>
              </div>
            </div>
          </div>
          <JobList :jobList="jobListData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBtn from '@/components/common/TopBtn.vue';
  import SubVisual from '@/components/common/SubVisual.vue';
  import JobList from '@/components/job/JobList.vue';  
  import { jobListData } from '@/data/job/job_list_data'; 

  export default {
    components : {
      TopBtn,
      SubVisual,
      JobList,
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
    }
  }
</script>

<style lang="scss">
  @use '@/styles/job/job.scss';
</style>