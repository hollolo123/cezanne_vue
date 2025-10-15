<template>
<div id="container">
  <TopBtn />
  <div class="visual__top">
    <div class="inner">
      <div class="visual__tit">
        <span>front-end development</span>
        <h2>
          <span>HTML, CSS, Javscript부터 Node.js, DB까지</span>
          <br>
          프론트엔드 개발자 과정
        </h2>
      </div>
      <p>
        다양한 웹 환경의 빠른 변화에 발맞춰 나갈 웹 개발자 양성과정으로, 주요 목적은 프론트엔드 개발자의 기본 소양을 함양하여 웹의 전문 지식을 습득하고 다양성을 고취시켜드립니다. <br>
        웹의 기본 언어인 <b>HTML, CSS</b>를 우선 학습하고 다음으로 프로그램의 기초와 기본인 <b>자바스크립트, 제이쿼리 등을 학습, 그리고 더 나아가 프론트엔드 개발자가 필수로 학습해야 하는 뷰, 리액트</b>를 학습하게 됩니다. 
      </p>
    </div>
  </div>
  <div id="contents_body">
    <div class="inner">
      <div class="class__info">
        <ul>
          <li>
            <div class="description">
              <b>교육 기간</b>
              <strong>6</strong>
              <span>개월</span>
              <i class="ri-calendar-2-line"></i>
            </div>
          </li>
          <li>
            <div class="description">
              <b>교육 시간</b>
              <strong>7</strong>
              <span>시간</span>
              <i class="ri-time-line"></i>
            </div>
          </li>
          <li>
            <div class="description">
              <b>난이도</b>
              <strong>입문 ~ 고급</strong>
              <i class="ri-line-chart-line"></i>
            </div>
          </li>
          <li>
            <div class="description">
              <b>인원</b>
              <strong>10</strong>
              <span>명 내외</span>
              <i class="ri-user-line"></i>
            </div>
          </li>
          <li>
            <div class="description">
              <b>전화 상담</b>
              <strong>042-252-1154</strong>
              <i class="ri-phone-line"></i>
            </div>
          </li>
        </ul>
      </div>
      <!-- 추천 -->
      <div class="class__suggest">
        <h3 class="subtit">프론트엔드 개발 커리큘럼 안내</h3>
        <ul>
          <li>
            <div>
              <span>1개월</span>
              <p>HTML, CSS, 그래픽 프로그램 기초 (Photoshop), Javascript</p>
            </div>
          </li>
          <li>
            <div>
              <span>2개월</span>
              <p>홈페이지 화면 구현, 그래픽 프로그램 심화 (Figma), Javascript, JQuery</p>
            </div>
          </li>
          <li>
            <div>
              <span>3개월</span>
              <p>Javascript Framework (Vue.js, React.js) 기초 및 DB 기초</p>
            </div>
          </li>
          <li>
            <div>
              <span>4개월</span>
              <p>홈페이지 기획 및 구현</p>
            </div>
          </li>
          <li>
            <div>
              <span>5개월</span>
              <p>포트폴리오 제작</p>
            </div>
          </li>
        </ul>
      </div>
      <!-- FAQ -->
      <div class="job__faq__wrap">
        <h3 class="subtit">프론트엔드 과정 Q&A</h3>
        <ul>
          <li>
            <button type="button">Q. 수료하면 어디로 취업할 수 있나요?</button>
            <p>
              프론트엔드 과정은 디자인 관련 기업, 웹 디자인 전문 기업, 중소기업, 연구소, 웹 프로그램 개발자,
              프론트엔드 개발자 등 분야로 취업 가능합니다.
            </p>
          </li>
          <li>
            <button type="button">Q. 포트폴리오는 꼭 만들어야 하나요?</button>
            <p>
              최근 개발자 채용에서 이력서보다 포트폴리오가 더 중요하게 평가되는 경우가 많습니다. <br>
              GitHub, Notion, 프로젝트 결과물 기반의 포트폴리오를 실습 과정 중 직접 제작하고 피드백을 받게 됩니다.
            </p>
          </li>
          <li>
            <button type="button">Q. 비전공자도 취업이 가능한가요?</button>
            <p>
              네, 가능합니다. <br>
              대전세잔직업전문학교 과정은 비전공자도 이해할 수 있도록 기초부터 실습 위주로 구성되어 있으며, 프로젝트 중심 학습으로
              실무 적응력을 키워 취업까지 연결합니다.
            </p>
          </li>
          <li>
            <button type="button">Q. 취득 자격증은 어떤 게 있나요?</button>
            <p>
              프론트엔드 과정은 정보처리기사, 정보처리산업기사, 정보처리기능사, 웹디자인개발기능사,
              컴퓨터그래픽스기능사 등이 있습니다.
            </p>
          </li>
        </ul>
      </div>
      <!-- Button -->
      <div class="detail__btn__container">
        <router-link to="/education" type="button" class="btn__list">목록으로</router-link>
      </div>
    </div>
  </div>
</div>

</template>

<script>
  import TopBtn from '@/components/common/TopBtn.vue';
  export default {
    components : {
      TopBtn
    },
    mounted() {
      const id = this.$route.params.id;
    },
  }
</script>

<style lang="scss">
  @use '@/styles/education/detail.scss';
</style>