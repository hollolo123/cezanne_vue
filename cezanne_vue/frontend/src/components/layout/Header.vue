<template>
  <header>
    <div class="utill">
      <ul class="inner">
        <li><router-link to="/">회원가입</router-link></li>
        <li><router-link to="/">로그인</router-link></li>
      </ul>  
    </div>
    <div class="header__in">
      <div class="inner">
        <div class="logo"><router-link to="/"><img src="../../assets/images/common/logo.png" alt="대전세잔직업전문학교" /></router-link></div>
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
                      <li><router-link to="/">학교소개</router-link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>교육과정</span>
                  <div class="subMenu">
                    <ul class="inner">
                      <li><router-link to="/">교육과정</router-link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>포트폴리오</span>
                  <div class="subMenu">
                    <ul class="inner">
                      <li><router-link to="/">포트폴리오</router-link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>상담센터</span>
                  <div class="subMenu">
                    <ul class="inner">
                      <li><router-link to="/">온라인 상담</router-link></li>
                      <li><router-link to="/" target="_blank">카카오톡 상담</router-link></li>
                      <li><router-link to="/">고객칭찬/불편접수</router-link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>취업센터</span>
                  <div class="subMenu">
                    <ul class="inner">
                      <li><router-link to="/">취업현황</router-link></li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span>커뮤니티</span>
                  <div class="subMenu">
                    <ul class="inner">
                      <li><router-link to="/">공지사항</router-link></li>
                      <li><router-link to="/">수강후기</router-link></li>
                      <li><router-link to="/">세잔갤러리</router-link></li>
                      <li><router-link to="/">공모전</router-link></li>
                      <li><router-link to="/">자격정보</router-link></li>
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
                <a href="./src/html/about/about.html">학교소개</a>
                <div class="subMenu">
                  <ul class="inner">
                    <li><a href="./src/html/about/about.html">학교소개</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="./src/html/education/education.html">교육과정</a>
                <div class="subMenu">
                  <ul class="inner">
                    <li><a href="./src/html/education/education.html">교육과정</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="./src/html/portfolio/index.html">포트폴리오</a>
                <div class="subMenu">
                  <ul class="inner">
                    <li><a href="./src/html/portfolio/index.html">포트폴리오</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="./src/html/counsel/index.html">상담센터</a>
                <div class="subMenu">
                  <ul class="inner">
                    <li><a href="./src/html/counsel/index.html">온라인 상담</a></li>
                    <li><a href="https://pf.kakao.com/_fvaeK" target="_blank">카카오톡 상담</a></li>
                    <li><a href="./src/html/counsel/receipt.html">고객칭찬/불편접수</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="./src/html/job/job.html">취업센터</a>
                <div class="subMenu">
                  <ul class="inner">
                    <li><a href="./src/html/job/job.html">취업현황</a></li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="./src/html/community/notice.html">커뮤니티</a>
                <div class="subMenu">
                  <ul class="inner">
                    <li><a href="./src/html/community/notice.html">공지사항</a></li>
                    <li><a href="./src/html/community/post.html">수강후기</a></li>
                    <li><a href="./src/html/community/gallery.html">세잔갤러리</a></li>
                    <li><a href="./src/html/community/competition.html">공모전</a></li>
                    <li><a href="./src/html/community/qualification.html">자격정보</a></li>
                  </ul>
                </div>
                </li>
            </ul>
          </div>
          <!-- 사이트맵 -->
          <div class="sitemapBtn">
            <button type="button"> 
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
    
    methods : {
      handlerSiteMap(){
        this.isActive = !this.isActive;
        
        const body = document.querySelector('body');
        // document.addEventListener('click', () => {
        //   body.classList.toggle('open');
        // });
        if(this.isActive){
          body.classList.add('open');
        } else {
          body.classList.remove('open')
        }
      }
    }
  }
</script>

<style lang="scss">
  @use '@/styles/layout/header' as *;
  @use '@/styles/layout/sitemap' as *;
  
</style>
