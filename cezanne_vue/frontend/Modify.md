# 대전세잔직업전문학교 리뉴얼 고도화 - Vue

## 작업일지

2025.10.01
1. `Header`
  - mobile button 클릭시 mobileWrap methods 코드 수정
  - 기존코드
    ```vue
    export default {
      data() {
        return {
          isActive: false,
          isOpen : false
        }
      },
    
      methods : {
        handlerSiteMap(){
          this.isActive = !this.isActive;
          const body = document.querySelector('body');
          document.addEventListner('click', () => {
            body.classList.toggle('open');
        });
      }
    ```
    *** 문제점 파악 (document.addEventListener('click', ...) 이벤트 리스너가 매번 새로 추가되고 있어서 문제가 발생할 수 있다.)
    - 이벤트 리스너 중복 추가: handlerSiteMap()이 호출될 때마다 새로운 이벤트 리스너가 추가
    - 잘못된 이벤트 타겟: document에 클릭 이벤트를 추가하고 있어서 의도하지 않은 동작이 발생
    - 클래스 토글 로직 문제: isActive 상태와 body의 open 클래스가 동기화되지 않음

    
  - 수정코드
    ```vue
    export default {
    data() {
      return {
        isActive: false,
      }
    },
    methods : {
      handlerSiteMap(){
        this.isActive = !this.isActive;
        if(this.isActive){
          body.classList.add('open');
        } else {
          body.classList.remove('open')
        }
      }
    }
    ```
    *** 해결
    - 불필요한 isOpen 변수 제거: isActive만 사용
    - 이벤트 리스너 제거: document.addEventListener 제거
    - 직접적인 클래스 제어: isActive 상태에 따라 body에 open 클래스를 직접 추가/제거
    - 명확한 로직: if-else 문으로 클래스 추가/제거를 명확하게 구분
    
