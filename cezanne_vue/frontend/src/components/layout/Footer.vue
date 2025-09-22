<template>
  <footer>
    <div class="footer">
      <div class="ftr__menu">
        <ul class="inner">
          <li><RouterLink to="/">학교소개</RouterLink></li>
          <li><RouterLink to="/">이용약관</RouterLink></li>
          <li><RouterLink to="/" class="privacy">개인정보처리방침</RouterLink></li>
          <li><RouterLink to="/">찾아오시는 길</RouterLink></li>
        </ul>
      </div>
      <div class="familySite">
        <div class="site__wrap">
          <button class="selected" @click="selectList">
            <span>Family Site</span>
            <RiAddLine />
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
      <div class="ftr__info">
        <div class="ftr__logo"><span>대전세잔직업전문학교</span></div>
        <address>
          <p>대전 중구 중앙로 137번길 36 대전세잔직업전문학교</p>
          <p>사업자등록번호 : 305-90-66359</p>
          <p><span class="light">Tel . 042)252-1153</span> Fax. 042)252-1105</p>
          <small>&copy; 대전세잔직업전문학교. All rights Reserved.</small>
        </address>
        <div class="sns">
          <button type="button" onclick="location.href='#'"><RiYoutubeLine class="ico__youtube" /></button>
          <button type="button" onclick="location.href='#'"><RiFacebookFill class="ico__facebook" /></button>
          <button type="button" onclick="location.href='#'"><RiInstagramLine class="ico__insta"/></button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { RiAddLine } from "@remixicon/vue";
import { RiYoutubeLine } from "@remixicon/vue";
import { RiFacebookFill } from "@remixicon/vue";
import { RiInstagramLine } from "@remixicon/vue";

export default {
  components : {
    RiAddLine,
    RiYoutubeLine,
    RiFacebookFill,
    RiInstagramLine
  },
  data() {
    return {
      isActive : false
    }
  },
  methods : {
    selectList() {
      this.isActive = !this.isActive;
    }
  }
  // methods : {
  //   handlerList() {
  //     const btn = document.querySelector('.selected');
  //     const siteList = document.querySelector('.site__list');

  //     btn.addEventListener('click', () => {
	// 			siteList.classList.toggle('active');
	// 		})
  //   }
  // }, 
  // mounted() {
  //   this.handlerList();
  // }
  // setup 으로 바꿔보기 ........... setup - ref 
}
</script>

<style lang="scss">
  @use '@/styles/layout/footer' as *;


</style>