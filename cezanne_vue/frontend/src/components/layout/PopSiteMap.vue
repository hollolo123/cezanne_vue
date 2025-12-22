<template>
  <div id="sitemap" class="sitemap">
    <div class="sitemap__container">
      <div class="sitemap__ar">
        <div class="sitemap__util">
          <p><img src="@/assets/images/common/logo.png" alt=""></p>
          <h2 class="tit">최고의 강사진과 맞춤형 관리 <br> 실무 중심 커리큘럼</h2>
          <h3 class="subtit">전문가 양성 대전세잔직업전문학교</h3>
        </div>
        <div class="sitemap__content">
          <button type="button" class="btn__close" @click="popSiteMap()">
            <i class="ri-close-large-line"></i>
          </button>
          <div class="sitemap__menu">
            <div class="sitemap__item">
              <h3 class="title">학교 소개</h3>
              <ul>
                <li><a href="src/views/about/About.vue">학교 소개</a></li>
              </ul>
            </div>
            <div class="sitemap__item">
              <h3 class="title">교육 과정</h3>
              <ul>
                <li><a href="src/views/education/Education.vue">교육 과정</a></li>
              </ul>
            </div>
            <div class="sitemap__item">
              <h3 class="title">포트폴리오</h3>
              <ul>
                <li><a href="src/views/portfolio/Portfolio.vue">포트폴리오</a></li>
              </ul>
            </div>
            <div class="sitemap__item">
              <h3 class="title">상담 센터</h3>
              <ul>
                <li><a href="src/views/counsel/Counsel.vue">온라인 상담</a></li>
                <li><a href="https://pf.kakao.com/_fvaeK" target="_blank">카카오톡 상담</a></li>
                <li><a href="src/views/counsel/Receipt.vue">고객 칭찬 / 불편 접수</a></li>
              </ul>
            </div>
            <div class="sitemap__item">
              <h3 class="title">취업 센터</h3>
              <ul>
                <li><a href="src/views/job/Job.vue">취업 현황</a></li>
              </ul>
            </div>
            <div class="sitemap__item">
              <h3 class="title">커뮤니티</h3>
              <ul>
                <li><a href="src/views/community/Notice.vue">공지사항</a></li>
                <li><a href="src/views/community/Post.vue">수강 후기</a></li>
                <li><a href="src/views/community/Gallery.vue">세잔 갤러리</a></li>
                <li><a href="src/views/community/Competition.vue">공모전</a></li>
                <li><a href="src/views/community/Qualification.vue">자격 정보</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sitemap__bg"></div>
  </div>
</template>

<script>
  export default {
    emits : ['pop-sitemap'],
    methods : {
      popSiteMap() {
        this.$emit('pop-sitemap');
      }
    }
  }
</script>

<style lang="scss">
  @use '@/styles/common/sitemap' as *;
</style>