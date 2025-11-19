<template>
<div id="container">
  <TopBtn/>
  <!-- Sub Visual -->
  <SubVisual :subTopCont="subTopCont"/>
  <!-- Contents Body -->
  <div id="contents_body">
    <div class="inner">
      <div class="location">
        <div class="location__info">
          <h4>대전세잔직업전문학교 위치</h4>
          <ul>
            <li>
              <span class="bold">주소 : </span>
              <span>대전광역시 중구 중앙로 137번길 36, 대전세잔직업전문학교</span>
            </li>
            <li>
              <span class="bold">전화 : </span>
              <span>042-252-1153</span>
            </li>
          </ul>
        </div>
        <div class="location__map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.2856727557996!2d127.42390499999998!3d36.3296257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654944a861679b%3A0x20f00c1ce452d22!2z7IS47J6USVTsp4Hsl4XsoITrrLjtlZnqtZA!5e0!3m2!1sko!2skr!4v1755759641668!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <!-- 교통 정보 -->
        <h3 class="sub__title">교통 정보</h3>
        <h4 class="sub__title--h4">
          <i class="ri-car-line"></i>
          자가용 이용
        </h4>
        <div class="dirt__list">
          <div class="dirt__item">
            <span>북대전(대덕밸리) IC</span>
            <span>약 26분 소요</span>
          </div>
          <div class="dirt__item">
            <span>유성 IC</span>
            <span>약 30분 소요</span>
          </div>
          <div class="dirt__item">
            <span>대전 IC</span>
            <span>약 22분 소요</span>
          </div>
        </div>
        <h4 class="sub__title--h4">
          <i class="ri-bus-line"></i>
          버스 이용
        </h4>
        <div class="dirt__list">
          <div class="dirt__item">
            <span>중앙로역 7번 출구</span>
            <span>107, 514, 604, 620</span>
          </div>
          <div class="dirt__item">
            <span>선화동 우체국 (중구청역 방면)</span>
            <span>314, 613, 614, 30</span>
          </div>
          <div class="dirt__item">
            <span>중앙로역 6번 출구</span>
            <span>101, 103, 201, 202, 608, 622</span>
          </div>
        </div>
        <h4 class="sub__title--h4">
          <i class="ri-subway-line"></i>
          지하철 이용
        </h4>
        <div class="dirt__list">
          <div class="dirt__item">
            <span>중앙로역</span>
            <span>7번 출구</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- TOP -->
  <div id="topBtn">
    <button type="button"><i class="ri-arrow-up-line"></i></button>
  </div>
</div>
</template>

<script>
  import TopBtn from './TopBtn.vue';
  import SubVisual from './SubVisual.vue';

  export default {
    components : {
      TopBtn,
      SubVisual
    },
    data() {
      return {
        subTopCont : {
          className : 'post',
          title : "찾아오시는 길",
          url : '/location/'
        }
      }
    }
  }
</script>

<style lang="scss">
 @use '@/styles/common/location' as *;
</style>