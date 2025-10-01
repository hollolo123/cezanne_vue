# 대전세잔직업전문학교 리뉴얼 고도화 - Vue

## 작업일지

2025.10.01
1. `Header`
  - mobile button 클릭시 mobileWrap methods 코드 수정
  - 기존코드
    ```vue
    return {
        isActive: false
      }
    },
    
    methods : {
      handlerSiteMap(){
        this.isActive = !this.isActive;
        const body = document.querySelector('body');
        if (this.isActive) {
          body.classList.add('open');
        } else {
          body.classList.remove('open');
        }
    }
    ```

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

    
