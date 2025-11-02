<template>
  <div id="container">
    <TopBtn />
    <SubVisual :subTopCont = "subTopCont" />
    <div id="contents_body">
      <div class="about">
        <!-- 대전세잔직업전문학교 소개 -->
        <div class="into top">
          <div class="inner">
            <div class="left">
              <h3>대전세잔직업전문학교 소개</h3>
            </div>
            <div class="right">
              <p>우리는 매일 눈을 뜨고 감을 때까지 수많은 디자인을 바라보고 있습니다.<br>디자인이라는 용어는 “표현하고, 성취하다”라는 뜻의 라틴어의 데시그나레(designare)에서 유래되었고, 현재 디자인의 의미는 목적한 것을 실체화 하는 것을 말합니다.</p> <p>대전세잔직업전문학교는 20년 이상의 세월동안 “디자인 교육” 한가지만을 바라보며 무수한 도전과 발전을 통해 디자인의 의미와 같이 훈련생과 본원의 목적인 <strong>“기업체에서 인정받는 디자이너 양성”</strong>을 실체화시키기 위해 현장중심의 직업교육이라는 하드웨어와 훈련생을 중심으로 생각하는 커리큘럼 및 교직원들의 노력이라는 소프트웨어를 접목시켜 취업 프로세스 강화를 진행하고 있습니다.</p> <p>이러한 노력을 통해 세잔의 수많은 수료생들은 지금도 열심히 사회의 한 일원으로서, 한 명의 전문가로서 디자인 업계에서 일하고 있습니다. 새로운 출발과 배움을 세잔에서 함께 시작해보시기를 바랍니다.</p>
            </div> <!-- end : into right -->
          </div> <!-- end : into inner -->
        </div> <!-- end : into -->
    
        <!-- 연혁 -->
        <div class="history top scroll-spy">
          <div class="inner">
            <div class="left back-to-position to-right delay-0">
              <h3>연혁</h3>
            </div>
            <div class="right back-to-position to-left delay-1">
              <dl>
                <dt>1998년</dt>
                <dd>대전 세잔컴퓨터디자인학원 개원</dd>
              </dl>
              <dl>
                <dt>2006년</dt>
                <dd>고용노동부 지정 세잔IT직업전문학교 명칭 변경</dd>
              </dl>
              <dl>
                <dt>2017년</dt>
                <dd>고용노동부 인증평가 3년 우수훈련기관 선정</dd>
              </dl>
              <dl>
                <dt>2020년</dt>
                <dd>
                  <p>스마트혼합훈련 웹 및 멀티미디어콘텐츠제작 과정 개설<br>
                  대전고용센터 우리동네 취업맛집 Top10 훈련기관선정<br>
                  고용노동부 인증평가 5년 우수훈련기관 선정</p>
                </dd>
              </dl>
              <dl>
                <dt>2021년</dt>
                <dd><p>스마트혼합훈련 자체훈련콘텐츠 개발<br>대전고용센터 우리동네 취업맛집 Top10 훈련기관선정</p></dd>
              </dl>
              <dl>
                <dt>2022년</dt>
                <dd>국가기간·전략사업 및 산업구조변화 대응 등 특화훈련 운영</dd>
              </dl>
              <dl>
                <dt>2023년</dt>
                <dd><p><strong>국가기간·전략사업</strong> 웹디자인&퍼블리셔, 웹디자인&멀티미디어콘텐츠제작<br> <strong>산업구조변화 대응 등 특화훈련 사업</strong><br> 웹 앱 및 프론트엔드, e-book을 활용한 편집디자인, 메타버스 공간 구축<br> 한 번에 끝내는 프론트엔드 개발자 과정 운영</p></dd>
              </dl>
              <dl>
                <dt>2024년</dt>
                <dd><p>2023년도에 이어 추가로 "취업을 향한 도전 프론트엔드의 모든 것" 과정까지 운영 중</p></dd>
              </dl>
            </div> <!-- end : history right -->
          </div> <!-- end : history inner -->
        </div> <!-- end : history -->        
  
        <!-- 비전 및 이념 -->
        <div class="vision scroll-spy to-right delay-0"> 
          <div class="inner">
            <div class="title back-to-position to-right delay-1">
              <h3>비전 및 이념</h3>
            </div>
            <div class="text">
              <dl class="back-to-position to-right delay-2">
                <dt>
                  <span>1</span> 현장 중심 직업교육</dt>
                <dd><p>수요조사를 통한 지역산업체 맞춤형 직업훈련을 개선 및 보안, 실업자 훈련 및 재직자 직종훈련의 다양성 및 특성화 개발, 산학협력 및 산업체와의 교류의 일환으로 재직자 교육과정 향상</p></dd>
                <dd><a type="button" href="../education/education.html">교육과정 바로가기 <i class="ri-arrow-right-long-line"></i></a></dd>
              </dl>
              <dl class="back-to-position to-right delay-3">
                <dt><span>2</span> 시설 및 장비의 현장화</dt>
                <dd><p>쾌적한 훈련환경 조성 시설, 장비의 확충 및 현장화</p></dd>
                <dd><a type="button" href="#equipment">시설장비 바로가기 <i class="ri-arrow-right-long-line"></i></a></dd>
              </dl>
              <dl class="back-to-position to-right delay-4">
                <dt><span>3</span> 학생 능력 개발 강화</dt>
                <dd><p>인력양성을 위한 교육과정 및 교수법 등을 개발, 훈련생 지원 및 체계적인 학사관리로 훈련생의 가치를 존중, 중도탈락 방지를 위한 훈련생 지원</p></dd>
                <dd><a type="button" href="../community/post.html">수강후기 바로가기 <i class="ri-arrow-right-long-line"></i></a></dd>
                
              </dl>
              <dl class="back-to-position to-right delay-5">
                <dt><span>4</span> 취업프로세스 강화</dt>
                <dd><p>취업률 향상을 위한 보다 적극적이고 체계적인 시스템 구축, 취업 지원 및 사후관리 시스템 강화</p></dd>
                <dd><a type="button" href="../job/job.html">취업현황 바로가기 <i class="ri-arrow-right-long-line"></i></a></dd>
              </dl>
              <dl class="back-to-position to-right delay-6">
                <dt><span>5</span> 교사 기준 및 능력 개발 강화</dt>
                <dd><p>현장중심형 교사 채용, 교직원 능력개발을 위한 교육훈련 격려, 교사 평가 제도 확립</p></dd>
                <dd><a type="button" href="../community/post.html">수강후기 바로가기 <i class="ri-arrow-right-long-line"></i></a></dd>
              </dl>
            </div> <!-- end : right -->
          </div> <!-- end : inner -->
        </div> <!-- end : visual -->
        <!-- 시설장비 -->
        <div id="equipment" class="swiperArea top">
          <div class="inner">
            <h3>시설 장비</h3>
            <swiper class="about_visual"
            :modules="modules" 
            :navigation="true" 
            :autoplay="true"
            :loop="true"
            :speed="1000"
            :delay="3000"
            >
              <swiper-slide v-for="item in aboutVisualData" :key="item.id">
                <div class="slide" :class="`slide${item.id}`" :data-desc="item.desc"></div>
              </swiper-slide> 
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import TopBtn from '@/components/common/TopBtn.vue';
import SubVisual from '@/components/common/SubVisual.vue';

export default {
  components: {
    TopBtn,
    SubVisual,
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Navigation]
    }
  },
  data() {
    return {
      subTopCont: {
        className: 'about',
        title: '학교 소개',
        desc: '대전세잔직업전문학교는 디자인 교육에 전문적인 학교로서 \n테크놀로지와 어우러진 삶을 더욱 풍요롭고 아름답게 만드는 디자인 발전을 위해 최선을 다하고 있습니다.',
        url: '/about/'
      },
      aboutVisualData: [
        { id: 1, desc: '학교 전경' },
        { id: 2, desc: '강의실 1' },
        { id: 3, desc: '프론트' },
        { id: 4, desc: '강의실 2' },
        { id: 5, desc: '강의실 2' },        
        { id: 6, desc: '강의실 3' },
        { id: 7, desc: '강의실 4' },
        { id: 8, desc: '강의실 5' },
      ]
    }
  },
  methods : {
    ScrollSpy() {
      const spyEls = document.querySelectorAll('.scroll-spy');
      spyEls.forEach(item => {
        item.classList.add('show');
      });
    }
  },
  mounted() {
    this.ScrollSpy();
  }
}
</script>

<style lang="scss">
  @use '@/styles/about/about.scss' as *;
</style>