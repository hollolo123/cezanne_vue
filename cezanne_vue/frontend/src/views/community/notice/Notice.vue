<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <!-- Sub Visual -->
    <SubVisual :subTopCont="subTopCont" />
    <div id="contents_body">
      <div class="inner">
        <!-- top -->
        <div class="common__top">
          <div>
            <span>total</span>
            <strong data-count></strong>
          </div>
          <!--	-->
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
        <!-- notice list -->
        <div class="notice__container">
          <BoardList :noticeList ="noticeList" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBtn from '@/components/common/TopBtn.vue';
  import SubVisual from '@/components/common/SubVisual.vue';  
  import BoardList from '@/components/community/BoardList.vue';
  import noticeDataJson from '@/data/board/notice_data.json'; 

  export default {
    components : {
      TopBtn,
      SubVisual,  
      BoardList,
    },
    data() {
      return {
        subTopCont : {
          className : 'commu',  
          title : '공지사항',
          desc : '대전세잔직업전문학교에서 진행하는 \n다양한 이벤트와 새로운 소식을 알려드립니다.',
          url : '/community/notice'
        },
        noticeList: noticeDataJson.board, 
      }
    }
  }
</script>

<style lang="scss">
@use '@/styles/community/board.scss' as *;

</style>