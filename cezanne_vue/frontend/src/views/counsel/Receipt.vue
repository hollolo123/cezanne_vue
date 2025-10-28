<template>
  <!-- Container -->
  <div id="container">
    <TopBtn />
    <!-- Sub Visual -->
    <SubVisual :subTopCont="subTopCont" />
    <div id="contents_body">
      <div class="inner">
        <div class="write__info">
          <p><i class="ri-information-fill"></i> 기입하신 정보는 수강료 조회 및 상담 신청 목적 외에 다른 용도로 절대 사용하지 않으며, 내용이 사실과 다를 시 상담이 원활하게 진행되지 않을 수 있습니다.</p>
        </div>
        <!-- form -->
        <form action="#" method="post">
          <div class="write__ar">
            <div class="write__item">
              <span>유형</span>
              <div>
                <select name="flag" id="flag">
                  <option value="1">칭찬</option>
                  <option value="2">불편</option>
                </select>
              </div>
            </div>
            <div class="write__item">
              <span>구분</span>
              <div>
                <select name="kind" id="kind">
                  <option value="manage">관리</option>
                  <option value="eductaion">강사/강의</option>
                  <option value="service">시설/서비스</option>
                  <option value="etc">기타</option>
                </select>
              </div>
            </div>
            <div class="write__item">
              <span>이름</span>
              <div><input type="text" name="userName" id="userName" placeholder="이름" autocomplete="off" required></div>
            </div>
            <div class="write__item">
              <span>휴대번호</span>
              <div class="phone">
                <select name="phoneNum" id="phoneNum">
                  <option value="010" selected>010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                </select>
                <span>-</span>
                <input type="text" name="secondNumber" id="secondNumber" pattern="\d{3,4}" maxlength="4" required>
                <span>-</span>
                <input type="text" name="lastNumber" id="lastNumber" pattern="\d{4}" maxlength="4" required>
              </div>
            </div>
            <div class="write__item">
              <span>이메일</span>
              <div><input type="email" name="userEmail" id="userEmail" placeholder="이메일" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required></div>
            </div>
            <div class="write__item">
              <span>내용</span>
              <div><textarea name="cont" id="cont" placeholder="고객님의 작은 소리에도 귀기울여 듣겠습니다." required></textarea></div>
            </div>
            <div class="write__item">
              <span>개인정보동의</span>
              <div>
                <input type="checkbox" name="chk" id="chk" required>
                <label for="chk">개인정보 수집 및 이용에 관한 사항에 동의함 (필수)</label>
              </div>
            </div>
          </div>
          <!-- 개인정보 동의 내용 -->
          <div class="info__agree" :class="{'active' : isAgree}">
            <button type="button" @click="handleAgree">
              <i class="ri-arrow-right-s-fill"></i> 개인정보 동의 내용 자세히 보기
            </button>
            <p class="hidden__content">
              개인정보 수집 및 이용에 관한 사항 <br>
              대전세잔직업전문학교의 개인정보취급방침은 다음과 같은 내용을 담고 있습니다. <br><br>

              가. 수집하는 개인정보 항목 및 수집방법 <br>
              나. 개인정보의 수집 및 이용목적 <br>
              다. 수집한 개인정보의 보유 및 이용기간 <br>
              라. 동의를 거부할 권리가 있다는 사실과 동의 거부에 따른 불이익 내용
            </p>
          </div>
          <div class="write__btn__container">
            <button type="submit" data-click-event="submit">의견 접수하기</button>
          </div>
        </form>
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
      SubVisual,
    },
    data() {
      return {
        isAgree : false,        
        subTopCont : {
          className : 'counsel',
          title : '고객 칭찬 / 불편 접수',
          desc : '상담 고객의 소중한 의견은 오직 대전세잔직업전문학교 원장님께만 공개 됩니다.\n불편과 칭찬을 작성해주시면 신중히 검토하여 답변드리겠습니다.',
          url : '/counsel/receipt/',
        },
      }
    },
    methods : {
      handleAgree() {
        this.isAgree = !this.isAgree;

        const infoAgree = document.querySelector('.info__agree');
        if(this.isAgree){
          infoAgree.classList.add('active');
        } else {
          infoAgree.classList.remove('active');
        }
      }
    }
  }
</script>

<style lang="scss">
  @use '@/styles/counsel/counsel.scss';
</style>