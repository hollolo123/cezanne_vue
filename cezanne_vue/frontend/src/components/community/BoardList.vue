<template>
  <!-- board list -->
  <div class="table__responsive">
      <table class="table--center">
        <thead>
          <tr>
            <th scope="col">번호</th>
            <th scope="col">제목</th>
            <th scope="col">등록일</th>
            <th scope="col">조회 수</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list" :key="item.id">
            <!-- type : notice, 공모전 ex) ${item.type} // notice, 공모전 데이터 각각 따로  -->
            <td>{{ item.id }}</td>
            <td class="text__left"><router-link :to="`/community/${item.type === 'notice' ? 'notice' : 'competition'}/${item.id}`">{{ item.title }}</router-link></td>
            <td>{{ item.date }}</td>
            <td>{{ item.view }}</td>
          </tr>  
        </tbody>
      </table>
  </div>
</template>

<script> 
  export default {
    props : {
      noticeList : {
        type : Array,
        required : true,
        default : () => []
      }
    },
    methods : {
      
    }
  }
</script>

<style lang="scss">
@use '@/styles/community/board.scss' as *;
</style>