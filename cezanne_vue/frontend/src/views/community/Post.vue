<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <!-- Sub Visual -->
    <SubVisual :subTopCont="subTopCont"/>
    <div id="contents_body">
      <div class="inner">
        <div class="post__wrap">
          <div class="input__form">
            <form action="#" name="post">
              <div class="input__wrap">
                <label for="userName" class="hidden">이름</label>
                <input 
                  type="text" 
                  name="userName" 
                  id="userName"
                  placeholder="이름"
                  autocomplete="off"
                  required
                >
              </div>
              <div class="input__wrap">
                <label for="userName" class="hidden">비밀번호</label>
                <input type="password" name="userPwd" id="userPwd" placeholder="비밀번호를 입력하세요." required>
              </div>
              <div class="input__wrap">
                <label for="cont" class="hidden">내용</label>
                <textarea name="cont" id="cont" placeholder="내용을 입력하세요."></textarea>
              </div>
              <button type="submit">작성 완료</button>
            </form>
          </div>
          <div class="post__content">
            <div class="list">
              <ul>
                <li>
                  <span data-label="번호">29</span>
                  <strong data-label="작성자">메타버스 과정 수료생</strong>
                  <p data-label="내용">재미있었습니다. 제가 모델링에 흥미가 있다는 사실을 알게 되어서 유익했던 시간이라고 생각합니다. 더불어 잔업하는 기분을 맛보기도 했습니다. 부족하지만 포토폴리오의 형식은 잡아두었으니 더욱 노력하여 취업하겠습니다. 감사합니다.</p>
                </li>
                <li>
                  <span data-label="번호">28</span>
                  <strong data-label="작성자">소프트웨어 과정 수료자</strong>
                  <p data-label="내용">소프트웨어에 자바스크립트나 웹디자인을 처음 접해보는데 흥미롭고 재밌게 수업을 들었던거 같습니다. 선생님들이 많은 지식을 가지고 아낌없이 가르쳐 주려고 해서 좋았습니다. 제가 머리가 좋지 않아 아직은 많이 버벅거리지만 선생님들의 열의와 지식은 진짜 대단했습니다. 그래서 계속 배우고 싶네요. 새로운 도전이였고 선생님들의 열정이 불타올라 수강생들을 잘 가르쳐주셔서 이해하기가 좋았습니다!</p>
                </li>
                <li>
                  <span data-label="번호">27</span>
                  <strong data-label="작성자">프론트엔드 개발자 과정 수료자</strong>
                  <p data-label="내용">선생님들이 굉장히 열정적이시고 하나라도 더 알려주려고 하셔서 저 또한 더욱 더 열정적으로 임할 수 있었습니다. 전체적인 수업 구성, 방식도 이해 적인 면에서 좋았고 과제도 해보면서 팀원들과 실제 실무처럼 어떤 식으로 협업이 이뤄지는지 알 수 있었고 현재 본인 실력을 객관적으로 판단 할 수 있었습니다. 복습 시간도 충분히 주셔서 모르는 것을 바로 질문 하거나 수업 내용을 적용해보기에도 좋았습니다. 공부하는 배우는 것에 있어서 정말 본인이 원한다면 하고 싶은 만큼 만족스럽게 충분히 할 수 있다고 생각합니다. 매우 유익한 경험과 시간이었고 이걸 토대로 스스로도 성장한 느낌을 많이 받았습니다. 감사합니다</p>
                </li>
                <li>
                  <span data-label="번호">26</span>
                  <strong data-label="작성자">프론트엔드 개발자 과정 수료자</strong>
                  <p data-label="내용">처음 접해본 분야인데 기초부터 설명해주셔서 좋았어요 수강한 과정내용과 관련되어 좀 더 많은 분야의 공부에 제 시간을 투자하고 싶게 해준 훈련과정입니다.</p>
                </li>
                <li>
                  <span data-label="번호">25</span>
                  <strong data-label="작성자">포토샵 수료생</strong>
                  <p data-label="내용">포토샵은 처음이라 어려울것 같아서 걱정했는데, 선생님께서 친절하게 차근차근 잘 알려주셔서 재미있게 배웠습니다! 감사했어요~ 다음에는 영상편집이나 일러스트도 배워보고 싶어요~</p>
                </li>
                <li>
                  <span data-label="번호">24</span>
                  <strong data-label="작성자">포토샵/프리미어 프로 수료생</strong>
                  <p data-label="내용">질문사항을 일목하게 정리해주시고 잊지않고 대답해주셨습니다. 프리미어 프로뿐 아니라 다른 응용프로그램등도 실제 사용예제와함께 많은 실증을 소개해주셔서 도움이 많이 됐습니다.</p>
                </li>
                <li>
                  <span data-label="번호">23</span>
                  <strong data-label="작성자">멀티미디어 콘텐츠제작 수료생</strong>
                  <p data-label="내용">많은 곳 중에 제가 이곳으로 오게되어 정말 감사하고 좋았어요! 학원을 잘만나서 너무 좋았습니다! 행정 선생님들도 귀찮으실 일도 하나하나 다 챙겨주시고 제가만난 선생님 두분도 수업도 잘알려주시고 필요한 말들도 아끼지않고 해주시고 많은 배움이 된 시간이였습니다!!</p>
                </li>
                <li>
                  <span data-label="번호">22</span>
                  <strong data-label="작성자">편집디자인 & 웹디자인</strong>
                  <p data-label="내용">선생님들께서 처음부터 찬찬히 알려주셔서 잘 배울수 있었어요 격려해주시고 모르는 것도 끝까지 알려주셔서 포기하지 않고 끝까지 할수 있었어요 너무 좋은 선생님들만나서 즐겁게 배웠습니다. 5개월동안 많은 것을 배웠습니다. 가르쳐주신 선생님들께 너무 감사드리고요. 취업 꼭 성공할게요!! 감사합니다.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBtn from '@/components/common/TopBtn.vue';
  import SubVisual from '@/components/common/SubVisual.vue';  

  export default {
    components : {
      TopBtn,
      SubVisual
    },
    data() {
      return {
        subTopCont : {
          className : 'post',  
          title : '커뮤니티',
          title2 : '수강후기',
          desc : '대전세잔직업전문학교는 여러분의 꿈과 도전을 위해 항상 함께합니다.',
          url : '/community/notice',
          url2 : '/community/post'
        }
      }
    }
  }
</script>

<style lang="scss">
  @use '@/styles/community/post.scss' as *;
</style>