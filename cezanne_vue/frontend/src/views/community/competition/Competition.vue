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
            <strong data-count>{{ competitionData.length }}</strong>
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
          <div class="table__responsive">
            <table class="table--center">
              <thead>
                <tr>
                  <th scope="col">번호</th>
                  <th scope="col">제목</th>
                  <th scope="col">등록일</th>
                  <th scope="col">조회 수</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in competitionData" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td class="text__left">
                    <router-link :to="`/community/competition/${item.id}`">{{ item.title }}</router-link>
                  </td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.view }}</td>
                </tr>  
              </tbody>
            </table>
        </div>
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
    }
  }
</script>

<style lang="scss">
@use '@/styles/community/board.scss' as *;

</style>