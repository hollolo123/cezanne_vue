<template>
  <!-- Container -->
  <div id="container">
    <!-- sub_visual -->
    <SubVisual :subTopCont = "subTopCont" /> 
    <!-- portfolio -->
    <div id="contents_body">
      <div class="inner">
        <div class="common__tab">
          <ul class="tab__list" data-tab-list>
            <li class="active">
              <a href="#" class="portfolio__tab" data-target="tab1">전체</a>
            </li>
            <li>
              <a href="#" class="portfolio__tab" data-target="tab2">웹 과정</a>
            </li>
            <li>
              <a href="#" class="portfolio__tab" data-target="tab3">편집 과정</a>
            </li>
            <li>
              <a href="#" class="portfolio__tab" data-target="tab4">메타버스 과정</a>
            </li>
          </ul>
          <div class="tab__contents">
            <div id="tab1" class="tab__content active">
              <div class="common__top">
                <div>
                    <span>total</span>
                    <strong data-count></strong>
                </div>
                <!--   -->
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
              </div> <!-- common__top -->
              <!-- portfolio -->
              <section class="portfolio">
                <ul class="portfolio__list">
                  <!-- 카드 1 -->
                  <li class="portfolio-card">
                    <a href="../p_detail/p_detail.html" class="portfolio-card__link">
                      <figure class="portfolio-card__img">
                        <img src="../../images/portfolio/portfolio_img1.png" alt="WEB 41기 포트폴리오1">
                        <!-- + 아이콘 -->
                        <i class="ri-add-line plus-icon"></i>
                      </figure>
                      <!-- text -->
                      <div class="portfolio-card__body">
                        <h3 class="portfolio-card__title">WEB 41기</h3>
                        <p class="portfolio-card__desc">
                          웹디자인 & 멀티미디어 콘텐츠 제작A(포토샵, UIUX디자인, 동영상편집)
                        </p>
                        <p class="portfolio-card__date">2025-03-14 ~ 2025-08-12</p>
                        <p class="portfolio-card__name">유*은 수강생</p>
                        <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                      </div>
                    </a>
                  </li>
                  <!-- 카드 2 -->
                  <li class="portfolio-card">
                    <a href="../p_detail/p_detail2.html" class="portfolio-card__link">
                      <figure class="portfolio-card__img">
                        <img src="../../images/portfolio/portfolio_img2.png" alt="WEB 41기 포트폴리오2">
                        <!-- + 아이콘 -->
                        <i class="ri-add-line plus-icon"></i>
                      </figure>
                      <!-- text -->
                      <div class="portfolio-card__body">
                        <h3 class="portfolio-card__title">WEB 41기</h3>
                        <p class="portfolio-card__desc">
                          웹디자인 & 멀티미디어 콘텐츠 제작A(포토샵, UIUX디자인, 동영상편집)
                        </p>
                        <p class="portfolio-card__date">2025-03-14 ~ 2025-08-12</p>
                        <p class="portfolio-card__name"> 강*린 수강생</p>
                        <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                      </div>
                    </a>
                  </li>
                  <!-- 카드 3 -->
                  <li class="portfolio-card">
                    <a href="../p_detail/p_detail3.html" class="portfolio-card__link">
                      <figure class="portfolio-card__img">
                        <img src="../../images/portfolio/portfolio_img3.png" alt="WEB 37기 포트폴리오1">
                        <!-- + 아이콘 -->
                        <i class="ri-add-line plus-icon"></i>
                      </figure>
                      <!-- text -->
                      <div class="portfolio-card__body">
                        <h3 class="portfolio-card__title">WEB 37기</h3>
                        <p class="portfolio-card__desc">
                          한 번에 끝내는 프론트엔드 개발자
                        </p>
                        <p class="portfolio-card__date">2024-04-22 ~ 2024-10-23</p>
                        <p class="portfolio-card__name">김*진 수강생</p>
                        <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                      </div>
                    </a>
                  </li>
                  <!-- 카드 4 -->
                  <li class="portfolio-card">
                    <a href="#" class="portfolio-card__link">
                      <figure class="portfolio-card__img">
                        <img src="../../images/portfolio/portfolio_img4.png" alt="WEB 35기 포트폴리오1">
                        <!-- + 아이콘 -->
                        <i class="ri-add-line plus-icon"></i>
                      </figure>
                      <!-- text -->
                      <div class="portfolio-card__body">
                        <h3 class="portfolio-card__title">WEB 35기</h3>
                        <p class="portfolio-card__desc">
                          취업을 향한 도전 프론트엔드의 모든 것
                        </p>
                        <p class="portfolio-card__date">2024-01-02 ~ 2024-07-19</p>
                        <p class="portfolio-card__name">우*호 수강생</p>
                        <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                      </div>
                    </a>
                  </li>
                  <!-- 카드 5 -->
                  <li class="portfolio-card">
                    <a href="#" class="portfolio-card__link">
                      <figure class="portfolio-card__img">
                        <img src="../../images/portfolio/portfolio_img5.png" alt="WEB 35기 포트폴리오1">
                        <!-- + 아이콘 -->
                        <i class="ri-add-line plus-icon"></i>
                      </figure>
                      <!-- text -->
                      <div class="portfolio-card__body">
                        <h3 class="portfolio-card__title">WEB 35기</h3>
                        <p class="portfolio-card__desc">
                          취업을 향한 도전 프론트엔드의 모든 것
                        </p>
                        <p class="portfolio-card__date">2024-01-02 ~ 2024-07-19</p>
                        <p class="portfolio-card__name">김*연 수강생</p>
                        <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                      </div>
                    </a>
                  </li>
                  <!-- 카드 6 -->
                  <li class="portfolio-card">
                    <a href="#" class="portfolio-card__link">
                      <figure class="portfolio-card__img">
                        <img src="../../images/portfolio/portfolio_img6.jpg" alt="WEB 32기 포트폴리오1">
                        <!-- + 아이콘 -->
                        <i class="ri-add-line plus-icon"></i>
                      </figure>
                      <!-- text -->
                      <div class="portfolio-card__body">
                        <h3 class="portfolio-card__title">디퍼 & 웹 32기</h3>
                        <p class="portfolio-card__desc">
                          편집디자인 & 웹디자인E
                        </p>
                        <p class="portfolio-card__date">23.05.31~23.11.27</p>
                        <p class="portfolio-card__name">최*영 수강생</p>
                        <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                      </div>
                    </a>
                  </li>  
                  <!-- 카드 7 -->
                  <li class="portfolio-card">
                    <a href="#" class="portfolio-card__link">
                      <figure class="portfolio-card__img">
                        <img src="../../images/portfolio/portfolio_img7.jpg" alt="메타버스 공간구축 02기 포트폴리오1">
                        <!-- + 아이콘 -->
                        <i class="ri-add-line plus-icon"></i>
                      </figure>
                      <!-- text -->
                      <div class="portfolio-card__body">
                        <h3 class="portfolio-card__title">메타버스 공간구축 02기</h3>
                        <p class="portfolio-card__desc">
                          메타버스공간구축
                        </p>
                        <p class="portfolio-card__date">23.06.02~23.11.06</p>
                        <p class="portfolio-card__name">이*현 수강생</p>
                        <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                      </div>
                    </a>
                  </li>
                </ul>
              </section> <!-- 포트폴리오 카드 -->
            </div>
            <!-- #tab2 -->
            <div id="tab2" class="tab__content">
              <div class="common__top">
                <div>
                    <span>total</span>
                    <strong data-count></strong>
                </div>
                <!--   -->
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
              </div> <!-- common__top -->
              <ul class="portfolio__list">
                <!-- 카드 1 -->
                <li class="portfolio-card">
                  <a href="../p_detail/p_detail.html" class="portfolio-card__link">
                    <figure class="portfolio-card__img">
                      <img src="../../images/portfolio/portfolio_img1.png" alt="WEB 41기 포트폴리오1">
                      <!-- + 아이콘 -->
                      <i class="ri-add-line plus-icon"></i>
                    </figure>
                    <!-- text -->
                    <div class="portfolio-card__body">
                      <h3 class="portfolio-card__title">WEB 41기</h3>
                      <p class="portfolio-card__desc">
                        웹디자인 & 멀티미디어 콘텐츠 제작A(포토샵, UIUX디자인, 동영상편집)
                      </p>
                      <p class="portfolio-card__date">2025-03-14 ~ 2025-08-12</p>
                      <p class="portfolio-card__name">유*은 수강생</p>
                      <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                    </div>
                  </a>
                </li>
                <!-- 카드 2 -->
                <li class="portfolio-card">
                  <a href="../p_detail/p_detail2.html" class="portfolio-card__link">
                    <figure class="portfolio-card__img">
                      <img src="../../images/portfolio/portfolio_img2.png" alt="WEB 41기 포트폴리오2">
                      <!-- + 아이콘 -->
                      <i class="ri-add-line plus-icon"></i>
                    </figure>
                    <!-- text -->
                    <div class="portfolio-card__body">
                      <h3 class="portfolio-card__title">WEB 41기</h3>
                      <p class="portfolio-card__desc">
                        웹디자인 & 멀티미디어 콘텐츠 제작A(포토샵, UIUX디자인, 동영상편집)
                      </p>
                      <p class="portfolio-card__date">2025-03-14 ~ 2025-08-12</p>
                      <p class="portfolio-card__name"> 강*린 수강생</p>
                      <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                    </div>
                  </a>
                </li>
                <!-- 카드 3 -->
                <li class="portfolio-card">
                  <a href="../p_detail/p_detail3.html" class="portfolio-card__link">
                    <figure class="portfolio-card__img">
                      <img src="../../images/portfolio/portfolio_img3.png" alt="WEB 37기 포트폴리오1">
                      <!-- + 아이콘 -->
                      <i class="ri-add-line plus-icon"></i>
                    </figure>
                    <!-- text -->
                    <div class="portfolio-card__body">
                      <h3 class="portfolio-card__title">WEB 37기</h3>
                      <p class="portfolio-card__desc">
                        한 번에 끝내는 프론트엔드 개발자
                      </p>
                      <p class="portfolio-card__date">2024-04-22 ~ 2024-10-23</p>
                      <p class="portfolio-card__name">김*진 수강생</p>
                      <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                    </div>
                  </a>
                </li>
                <!-- 카드 4 -->
                <li class="portfolio-card">
                  <a href="#" class="portfolio-card__link">
                    <figure class="portfolio-card__img">
                      <img src="../../images/portfolio/portfolio_img4.png" alt="WEB 35기 포트폴리오1">
                      <!-- + 아이콘 -->
                      <i class="ri-add-line plus-icon"></i>
                    </figure>
                    <!-- text -->
                    <div class="portfolio-card__body">
                      <h3 class="portfolio-card__title">WEB 35기</h3>
                      <p class="portfolio-card__desc">
                        취업을 향한 도전 프론트엔드의 모든 것
                      </p>
                      <p class="portfolio-card__date">2024-01-02 ~ 2024-07-19</p>
                      <p class="portfolio-card__name">우*호 수강생</p>
                      <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                    </div>
                  </a>
                </li>
                <!-- 카드 5 -->
                <li class="portfolio-card">
                  <a href="#" class="portfolio-card__link">
                    <figure class="portfolio-card__img">
                      <img src="../../images/portfolio/portfolio_img5.png" alt="WEB 35기 포트폴리오1">
                      <!-- + 아이콘 -->
                      <i class="ri-add-line plus-icon"></i>
                    </figure>
                    <!-- text -->
                    <div class="portfolio-card__body">
                      <h3 class="portfolio-card__title">WEB 35기</h3>
                      <p class="portfolio-card__desc">
                        취업을 향한 도전 프론트엔드의 모든 것
                      </p>
                      <p class="portfolio-card__date">2024-01-02 ~ 2024-07-19</p>
                      <p class="portfolio-card__name">김*연 수강생</p>
                      <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                    </div>
                  </a>
                </li>  
              </ul>
            </div> <!-- end : #tab2 -->
            <!-- #tab3 -->
            <div id="tab3" class="tab__content">
              <div class="common__top">
                <div>
                    <span>total</span>
                    <strong data-count></strong>
                </div>
                <!--   -->
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
              </div> <!-- common__top -->
              <ul class="portfolio__list">
                <!-- 카드 6 -->
                <li class="portfolio-card">
                  <a href="#" class="portfolio-card__link">
                    <figure class="portfolio-card__img">
                      <img src="../../images/portfolio/portfolio_img6.jpg" alt="WEB 32기 포트폴리오1">
                      <!-- + 아이콘 -->
                      <i class="ri-add-line plus-icon"></i>
                    </figure>
                    <!-- text -->
                    <div class="portfolio-card__body">
                      <h3 class="portfolio-card__title">디퍼 & 웹 32기</h3>
                      <p class="portfolio-card__desc">
                        편집디자인 & 웹디자인E
                      </p>
                      <p class="portfolio-card__date">23.05.31~23.11.27</p>
                      <p class="portfolio-card__name">최*영 수강생</p>
                      <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                    </div>
                  </a>
                </li>
              </ul>
            </div> <!-- end : #tab3 -->
            <!-- #tab4 -->
            <div id="tab4" class="tab__content">
              <div class="common__top">
                <div>
                    <span>total</span>
                    <strong data-count></strong>
                </div>
                <!--   -->
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
              </div> <!-- common__top -->
              <ul class="portfolio__list">
                <!-- 카드 7 -->
                <li class="portfolio-card">
                  <a href="#" class="portfolio-card__link">
                    <figure class="portfolio-card__img">
                      <img src="../../images/portfolio/portfolio_img7.jpg" alt="메타버스 공간구축 02기 포트폴리오1">
                      <!-- + 아이콘 -->
                      <i class="ri-add-line plus-icon"></i>
                    </figure>
                    <!-- text -->
                    <div class="portfolio-card__body">
                      <h3 class="portfolio-card__title">메타버스 공간구축 02기</h3>
                      <p class="portfolio-card__desc">
                        메타버스공간구축
                      </p>
                      <p class="portfolio-card__date">23.06.02~23.11.06</p>
                      <p class="portfolio-card__name">이*현 수강생</p>
                      <span class="portfolio-card__view">view <i class="ri-arrow-right-long-line"></i></span>
                    </div>
                  </a>
                </li>
              </ul>
            </div> <!-- end : #tab4 -->
          </div>
        </div>
      </div> <!-- end : inner -->
    </div> <!-- end : contents_body -->
  </div>
</template>

<script>
import SubVisual from '@/components/common/SubVisual.vue';
  export default {
    components : {
      SubVisual,
    },
    data() {
      return {
        subTopCont : {
          className : 'port',
          title : "포트폴리오",
          desc : '대전세잔직업전문학교는 디자인 교육에 전문적인 학교로서 테크놀로지와 어우러진 삶을 더욱 풍요롭고 아름답게 만드는 디자인 발전을 위해 최선을 다하고 있습니다.',
          url : '/portfolio/'
        }
      }
    }
  }
</script>

<style lang="scss"> 
  @use '@/styles/portfolio/portfolio.scss';
</style>