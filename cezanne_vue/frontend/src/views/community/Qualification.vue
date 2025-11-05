<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <!-- Sub Visual -->
    <SubVisual :subTopCont = "subTopCont" />
    <div id="contents_body" class="qualification">
      <div class="inner">
        <div class="license">
          <ul class="tab__list">
            <li 
              :class="{active : selectedTab === 'tab1'}"
              @click="changeTab('tab1')"
              >
              <router-link to="#">웹디자인개발기능사</router-link>
            </li>
            <li
              :class="{active : selectedTab === 'tab2'}"
              @click="changeTab('tab2')"
            >
              <router-link to="#">전기기능사 / 승강기기능사</router-link>
            </li>
            <li
              :class="{active : selectedTab === 'tab3'}"
              @click="changeTab('tab3')"
            >
              <router-link to="#">컴퓨터그래픽스기능사</router-link>
            </li>
          </ul>
          <div class="tab__contents">
            <div :class="{active : selectedTab === 'tab1'}" class="tab__content">
              <div class="tit">
                <h3>웹디자인개발기능사 자격증 자격시험 시행 일정</h3>
              </div>
              <div class="table__responsive">
                <table>
                  <thead>
                    <tr>
                      <th>회차</th>
                      <th>차수</th>
                      <th>접수 일자</th>
                      <th>시험 일자</th>
                      <th>합격자 발표</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowspan="2">1회</td>
                      <td>필기</td>
                      <td>2025.01.06 - 2025.01.09</td>
                      <td>2025.01.21 - 2025.01.25</td>
                      <td>2025.02.06</td>
                    </tr>
                    <tr>
                      <td>실기</td>
                      <td>2025.02.10 - 2025.02.13</td>
                      <td>2025.03.15 - 2025.04.02</td>
                      <td>2025.04.11</td>
                    </tr>
                    <tr>
                      <td rowspan="2">2회</td>
                      <td>필기</td>
                      <td>2025.03.17 - 2025.03.21</td>
                      <td>2025.04.05 - 2025.04.10</td>
                      <td>2025.04.16</td>
                    </tr>
                    <tr>
                      <td>실기</td>
                      <td>2025.04.21 - 2025.04.24</td>
                      <td>2025.05.31 - 2025.06.15</td>
                      <td>2025.06.27</td>
                    </tr>
                    <tr>
                      <td rowspan="2">3회</td>
                      <td>필기</td>
                      <td>2025.06.09 - 2025.06.12</td>
                      <td>2025.06.28 - 2025.07.03</td>
                      <td>2025.07.16</td>
                    </tr>
                    <tr>
                      <td>실기</td>
                      <td>2025.07.28 - 2025.07.31</td>
                      <td>2025.08.30 - 2025.09.17</td>
                      <td>2025.09.26</td>
                    </tr>
                    <tr>
                      <td rowspan="2">4회</td>
                      <td>필기</td>
                      <td>2025.08.25 - 2025.08.28</td>
                      <td>2025.09.20 - 2025.09.25</td>
                      <td>2025.10.15</td>
                    </tr>
                    <tr>
                      <td>실기</td>
                      <td>2025.10.20 - 2025.10.23</td>
                      <td>2025.11.22 - 2025.12.10</td>
                      <td>2025.12.19</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tit">
                <h3>검정형 자격 시험 정보</h3>
              </div>
              <div class="table__responsive">
                <table>
                  <thead>
                    <tr>
                      <th>필기</th>
                      <th>실기</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>14,500원</td>
                      <td>20,100원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div :class="{active : selectedTab === 'tab2'}" class="tab__content">
              <div class="tit">
                <h3>전기기능사 / 승강기기능사 자격증 자격시험 시행 일정</h3>
              </div>
              <div class="table__responsive">
                <table>
                  <thead>
                    <tr>
                      <th>회차</th>
                      <th>차수</th>
                      <th>접수 일자</th>
                      <th>시험 일자</th>
                      <th>합격자 발표</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowspan="2">1회</td>
                      <td>필기</td>
                      <td>2025.01.06 - 2025.01.09</td>
                      <td>2025.01.21 - 2025.01.25</td>
                      <td>2025.02.06</td>
                    </tr>
                    <tr>
                      <td>실기</td>
                      <td>2025.02.10 - 2025.02.13</td>
                      <td>2025.03.15 - 2025.04.02</td>
                      <td>2025.04.11</td>
                    </tr>
                    <tr>
                      <td rowspan="2">2회</td>
                      <td>필기</td>
                      <td>2025.03.17 - 2025.03.21</td>
                      <td>2025.04.05 - 2025.04.10</td>
                      <td>2025.04.16</td>
                    </tr>
                    <tr>
                      <td>실기</td>
                      <td>2025.04.21 - 2025.04.24</td>
                      <td>2025.05.31 - 2025.06.15</td>
                      <td>2025.06.27</td>
                    </tr>
                    <tr>
                      <td rowspan="2">3회</td>
                      <td>필기</td>
                      <td>2025.06.09 - 2025.06.12</td>
                      <td>2025.06.28 - 2025.07.03</td>
                      <td>2025.07.16</td>
                    </tr>
                    <tr>
                      <td>실기</td>
                      <td>2025.07.28 - 2025.07.31</td>
                      <td>2025.08.30 - 2025.09.17</td>
                      <td>2025.09.26</td>
                    </tr>
                    <tr>
                      <td rowspan="2">4회</td>
                      <td>필기</td>
                      <td>2025.08.25 - 2025.08.28</td>
                      <td>2025.09.20 - 2025.09.25</td>
                      <td>2025.10.15</td>
                    </tr>
                    <tr>
                      <td>실기</td>
                      <td>2025.10.20 - 2025.10.23</td>
                      <td>2025.11.22 - 2025.12.10</td>
                      <td>2025.12.19</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tit">
                <h3>전기기능사 검정형 자격 시험 정보</h3>
              </div>
              <div class="table__responsive">
                <table>
                  <thead>
                    <tr>
                      <th>필기</th>
                      <th>실기</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>14,500원</td>
                      <td>106,200원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tit">
                <h3>승강기기능사 검정형 자격 시험 정보</h3>
              </div>
              <div class="table__responsive">
                <table>
                  <thead>
                    <tr>
                      <th>필기</th>
                      <th>실기</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>14,500원</td>
                      <td>77,800원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div :class="{active : selectedTab === 'tab3'}" class="tab__content">
              <div class="tit">
                <h3>컴퓨터그래픽스기능사 자격증 자격시험 시행 일정</h3>
              </div>
              <div class="table__responsive">
                <table>
                  <thead>
                    <tr>
                      <th>회차</th>
                      <th>차수</th>
                      <th>접수 일자</th>
                      <th>시험 일자</th>
                      <th>합격자 발표</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td rowspan="2">1회</td>
                      <td>필기</td>
                      <td>2025.01.06 - 2025.01.09</td>
                      <td>2025.01.21 - 2025.01.25</td>
                      <td>2025.02.06</td>
                    </tr>
                    <tr>
                      <td>실기</td>
                      <td>2025.02.10 - 2025.02.13</td>
                      <td>2025.03.15 - 2025.04.02</td>
                      <td>2025.04.18</td>
                    </tr>
                    <tr>
                      <td rowspan="2">2회</td>
                      <td>필기</td>
                      <td>2025.03.17 - 2025.03.21</td>
                      <td>2025.04.05 - 2025.04.10</td>
                      <td>2025.04.16</td>
                    </tr>
                    <tr>
                      <td>실기</td>
                      <td>2025.04.21 - 2025.04.24</td>
                      <td>2025.05.31 - 2025.06.15</td>
                      <td>2025.07.04</td>
                    </tr>
                    <tr>
                      <td rowspan="2">3회</td>
                      <td>필기</td>
                      <td>2025.06.09 - 2025.06.12</td>
                      <td>2025.06.28 - 2025.07.03</td>
                      <td>2025.07.16</td>
                    </tr>
                    <tr>
                      <td>실기</td>
                      <td>2025.07.28 - 2025.07.31</td>
                      <td>2025.08.30 - 2025.09.17</td>
                      <td>2025.09.30</td>
                    </tr>
                    <tr>
                      <td rowspan="2">4회</td>
                      <td>필기</td>
                      <td>2025.08.25 - 2025.08.28</td>
                      <td>2025.09.20 - 2025.09.25</td>
                      <td>2025.10.15</td>
                    </tr>
                    <tr>
                      <td>실기</td>
                      <td>2025.10.20 - 2025.10.23</td>
                      <td>2025.11.22 - 2025.12.10</td>
                      <td>2025.12.24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="tit">
                <h3>검정형 자격 시험 정보</h3>
              </div>
              <div class="table__responsive">
                <table>
                  <thead>
                    <tr>
                      <th>필기</th>
                      <th>실기</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>14,500원</td>
                      <td>23,700원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBtn from '@/components/common/TopBtn.vue';
  import SubVisual from '@/components/common/Subvisual.vue';

  export default {
    components : {
      TopBtn,
      SubVisual
    },
    data() {
      return {
        selectedTab : 'tab1',
        subTopCont : {
          className : 'qualification',
          title : '커뮤니티',
          title2 : '자격증 정보',
          desc : '대전세잔직업전문학교에서는 분야별 취업과 직무에 꼭 필요한 핵심 자격증을 소개합니다.',
          url : '/community/notice',
          url2 : '/community/qualification',
        }
      }
    },
    methods : {
      changeTab(tab) {
        this.selectedTab = tab;
      }
    }
  }
</script>

<style lang="scss">
  @use '@/styles/community/qualification.scss';
</style>