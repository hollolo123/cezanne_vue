<template>
  <header>
    <div class="utill">
      <ul class="inner">
        <li><router-link to="/" @click="readyMore">회원가입</router-link></li>
        <li><router-link to="/" @click="readyMore">로그인</router-link></li>
      </ul>  
    </div>
    <div class="header__in">
      <div class="inner">
        <div class="logo"><router-link to="/"><img src="@/assets/images/common/logo.png" alt="대전세잔직업전문학교" /></router-link></div>
        <div class="m__gnb__btn">
          <button type="button" @click="handlerSiteMap">
            <span class="bar1"></span>
            <span class="bar2"></span>
            <span class="bar3"></span>
          </button>
        </div>
        <!-- mobile gnb : menu -->
        <div class="mobileWrap" :class="{active:isActive}">
          <div class="m_gnb">
            <div class="m_gnb__ar">
              <h2 class="tit">최고의 강사진과 맞춤형 관리 <br> 실무 중심 커리큘럼</h2>
              <h3 class="subtit">전문가 양성 대전세잔직업전문학교</h3>
            </div>
            <div class="m_gnb__content">
              <ul>
                <li>
                  <span>학교소개</span>
                  <div class="subMenu">
                    <ul class="inner">
                      <li><router-link to="/about">학교소개</router-link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>교육과정</span>
                  <div class="subMenu">
                    <ul class="inner">
                      <li><router-link to="/education">교육과정</router-link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>포트폴리오</span>
                  <div class="subMenu">
                    <ul class="inner">
                      <li><router-link to="/portfolio">포트폴리오</router-link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>상담센터</span>
                  <div class="subMenu">
                    <ul class="inner">
                      <li><router-link to="/counsel">온라인 상담</router-link></li>
                      <li><a href="https://pf.kakao.com/_fvaeK" target="_blank">카카오톡 상담</a></li>
                      <li><router-link to="/counsel/receipt">고객칭찬/불편접수</router-link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>취업센터</span>
                  <div class="subMenu">
                    <ul class="inner">
                      <li><router-link to="/job">취업현황</router-link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>커뮤니티</span>
                  <div class="subMenu">
                    <ul class="inner">
                      <li><router-link to="/community/notice">공지사항</router-link></li>
                      <li><router-link to="/community/post">수강후기</router-link></li>
                      <li><router-link to="/community/gallery">세잔갤러리</router-link></li>
                      <li><router-link to="/community/competition">공모전</router-link></li>
                      <li><router-link to="/community/qualification">자격정보</router-link></li>
                    </ul>
                  </div>
                  </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- web gnb -->
        <div class="webWrap">	
          <div class="gnbNav">
            <ul>
              <li>
                <router-link to="/about">학교소개</router-link>
                <div class="subMenu">
                  <ul class="inner">
                    <li><router-link to="/about">학교소개</router-link></li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link to="/education">교육과정</router-link>
                <div class="subMenu">
                  <ul class="inner">
                    <li><router-link to="/education">교육과정</router-link></li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link to="/portfolio">포트폴리오</router-link>
                <div class="subMenu">
                  <ul class="inner">
                    <li><router-link to="/portfolio">포트폴리오</router-link></li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link to="/counsel">상담센터</router-link>
                <div class="subMenu">
                  <ul class="inner">
                    <li><router-link to="/counsel">온라인 상담</router-link></li>
                    <li><a href="https://pf.kakao.com/_fvaeK" target="_blank">카카오톡 상담</a></li>
                    <li><router-link to="/counsel/receipt">고객칭찬/불편접수</router-link></li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link to="/job">취업센터</router-link>
                <div class="subMenu">
                  <ul class="inner">
                    <li><router-link to="/job">취업현황</router-link></li>
                  </ul>
                </div>
              </li>
              <li>
                <router-link to="/community/notice">커뮤니티</router-link>
                <div class="subMenu">
                  <ul class="inner">
                    <li><router-link to="/community/notice">공지사항</router-link></li>
                    <li><router-link to="/community/post">수강후기</router-link></li>
                    <li><router-link to="/community/gallery">세잔갤러리</router-link></li>
                    <li><router-link to="/community/competition">공모전</router-link></li>
                    <li><router-link to="/community/qualification">자격정보</router-link></li>
                  </ul>
                </div>
                </li>
            </ul>
          </div>
          <!-- 사이트맵 -->
          <div class="sitemapBtn">
            <button type="button" @click="popSiteMap()"> 
              <span class="bar1"></span>
              <span class="bar2"></span>
              <span class="bar3"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        isActive: false,
      }
    },
    emits : [
      'pop-sitemap'
    ],
    methods : {
      handlerSiteMap(){
        this.isActive = !this.isActive;
        document.body.classList.toggle('open');
      },
      popSiteMap() {
        this.$emit('pop-sitemap');
      },
      readyMore() {
        alert('서비스 준비중입니다.');
      }
    },
    beforeUnmount() {
      document.body.classList.remove('open');
    }
  }
</script>

<style lang="scss">
  @use '@/styles/layout/header' as *; 
</style>
