<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <!-- Sub Visual -->
    <SubVisual :subTopCont = "subTopCont" />
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
        <!--	-->
        <div class="notice__container" data-container>
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
                <tr>
                  <td>7</td>
                  <td class="text__left"><a href="./notice/detail.html">세잔 개강 예정일</a></td>
                  <td>2025-06-02</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td class="text__left"><a href="#">세잔 개강 예정일</a></td>
                  <td>2025-01-14</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td class="text__left"><a href="#">[공지] 2021년 대전고용노동청 대전고용센터 「우리동네 취업맛집 TOP 10」 훈련기관으로 선정되었습니다.</a></td>
                  <td>2021-12-01</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td class="text__left"><a href="#">[공지] 2020년 대전고용노동청 대전고용센터 「우리동네 취업맛집 TOP 10」 훈련기관으로 선정되었습니다.</a></td>
                  <td>2021-09-01</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td class="text__left"><a href="#">[공지] 2020년 고용노동부 훈련기관 인증평가에서 5년 인증기관으로 선정되었습니다.</a></td>
                  <td>2021-09-01</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td class="text__left"><a href="#">[공지] 홈페이지가 리뉴얼 되었습니다.</a></td>
                  <td>2021-09-01</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td class="text__left"><a href="#">[공지] 2017년 고용노동부 훈련기관 인증평가에서 5년 인증기관으로 선정되었습니다.</a></td>
                  <td>2017-09-01</td>
                  <td>0</td>
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
          url : '/community/'
        }
      }
    }
  }
</script>

<style lang="scss">
@use '@/styles/community/board.scss' as *;

</style>