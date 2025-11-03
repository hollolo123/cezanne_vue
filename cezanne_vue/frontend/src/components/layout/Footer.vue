<template>
  <footer>
    <div class="footer">
      <div class="ftr__menu">
        <ul class="inner">
          <li><RouterLink to="/about">학교소개</RouterLink></li>
          <li><RouterLink to="/about">이용약관</RouterLink></li>
          <li><RouterLink to="/" class="privacy">개인정보처리방침</RouterLink></li>
          <li><RouterLink to="/">찾아오시는 길</RouterLink></li>
        </ul>
      </div>
      <!-- family site -->
      <div class="family__wrapper">
        <div class="familySite">
          <div class="site__wrap">
            <button class="selected" @click="selectList">
              <span>Family Site</span>
              <i class="ri-add-line"></i>
            </button>  
            <div class="site__list" :class="{active:isActive}">
              <a href="https://www.moel.go.kr/local/daejeon/index.do" target="_blank" title="고용노동부 대전지방고용노동청">고용노동부 대전지방고용노동청</a>
              <a href="https://www.work.go.kr/daejeon/main.do" target="_blank" title="대전고용센터">대전고용센터</a>
              <a href="https://www.work24.go.kr/cm/main.do" target="_blank" title="고용24">고용24</a>
              <a href="https://c.q-net.or.kr/cmn/com/main.do" target="_blank" title="CQ-NET">CQ-NET</a>
              <a href="https://www.q-net.or.kr/man001.do?gSite=Q&gIntro=Y" target="_blank" title="Q-NET">Q-NET</a>
              <a hrefo="https://www.ncs.go.kr/index.do" target="_blank" title="NCS국가직무능력표준">NCS국가직무능력표준</a>
            </div>
            
          </div>
        </div>
      </div>
      <div class="ftr__info">
        <div class="inner">
          <div class="ftr__logo"><span>대전세잔직업전문학교</span></div>
          <address>
            <p>대전 중구 중앙로 137번길 36 대전세잔직업전문학교</p>
            <p>사업자등록번호 : 305-90-66359</p>
            <p><span class="light">Tel . 042)252-1153</span> Fax. 042)252-1105</p>
            <small>&copy; 대전세잔직업전문학교. All rights Reserved.</small>
          </address>
          <div class="sns">
            <button type="button" @click="openYoutube"><i class="ri-youtube-line"></i></button>
            <button type="button" @click="openFacebook"><i class="ri-facebook-fill"></i></button>
            <button type="button" @click="openInstagram"><i class="ri-instagram-line"></i></button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isActive : false
    }
  },
  methods : {
    selectList() {
      this.isActive = !this.isActive;
    },
    openYoutube() {
      window.open('https://www.youtube.com/channel/UCqclDBksujgsUlu3XIYWDQw','_blank');
    },
    openFacebook() {
      window.open('https://www.facebook.com/%EC%84%B8%EC%9E%94it%EC%A7%81%EC%97%85%EC%A0%84%EB%AC%B8%ED%95%99%EA%B5%90-105156694808716','_blank');
    },
    openInstagram() {
      window.open('https://www.instagram.com/djcezanne_it/','_blank');
    }
  }
}
</script>

<style lang="scss">
  @use '@/styles/layout/footer' as *;
</style>