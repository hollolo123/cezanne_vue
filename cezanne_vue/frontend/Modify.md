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
    - 이벤트 리스너 중복 추가: handlerSiteMap()이 호출될 때마다 새로운 이벤트 리스너가 추가되어 중복실행
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


2025.11.02
# About 스크롤 이벤트
- 기존 ScrollMagic 라이브러리 ---> 스크롤 이벤트로 교체
  - 스크롤 이벤트 등록 : window.addEventListener('scroll', () => {})
  - document.querySelectorAll('.scroll-spy')
  - 화면 높이 계산 : window.innerHeight
  - 각 요소의 위치 계산 : getBoundingClientRect().top **
  - 90% 도달 시 show 추가 


2025.11.03
# Notice 조회수 증가
- 게시글 상세 접근 시 조회수 증가시키는 방식
- 조회수를 localStorage에 저장하여 조회수 증가시키는 방식
- 조회수를 저장하는 키 : board_view_${id}

detail
```js
methods : {
  incrementViewCount() {
    const id = parseInt(this.$route.params.id);
    const storageKey = `board_view_${id}`;

    // localStorage에서 조회수 가져오기, 없으면 기본값 사용
    const storedView = localStorage.getItem(storageKey);
    const baseView = this.boardDetailData.view || 0;

     // 저장된 조회수가 있으면 사용, 없으면 기본값에서 시작
    let currentView = storedView ? parseInt(storedView) : baseView;

    // 조회수 증가
    currentView += 1;

    // localStorage에 저장
    localStorage.setItem(storageKey, currentView.toString());

    // 화면에 반영
    this.viewCount = currentView;
  }
}
```
List 
```js
<td>{{ getViewCount(item.id) }}</td>

methods : {
  getViewCount(id) {
    const storageKey = `board_view_${id}`;
    const storedView = localStorage.getItem(storageKey);
    
    // localStorage에 저장된 조회수가 있으면 반환, 없으면 기본값 반환
    return storedView ? parseInt(storedView) : (this.boardList.find(item => item.id === id)?.view || 0);
  }
}

```


*** 주요 변경사항 ***
1. NoticeDetail.vue
- viewCount 데이터 속성 추가
- mounted 라이프사이클에서 incrementViewCount() 호출
- incrementViewCount() 메서드:
  - localStorage에서 해당 게시글의 조회수 조회
  - 없으면 기본값(boardDetailData.view) 사용
  - 조회수 증가 후 localStorage에 저장
  - 화면에 반영

2. BoardList.vue
- getViewCount() 메서드 추가
  - localStorage에서 조회수 조회
  - 없으면 기본값 사용
  - 목록에서도 동적 조회수 표시

3. 동작 방식
  - 상세 페이지 접근 시 조회수가 자동 증가
  - localStorage에 조회수 저장되어 브라우저를 닫아도 유지
  - 목록과 상세 페이지 모두 동일한 조회수 표시
  - 게시글 상세 페이지를 열 때마다 조회수가 증가하며, localStorage에 저장되어 다음 방문 시에도 유지됩니다.