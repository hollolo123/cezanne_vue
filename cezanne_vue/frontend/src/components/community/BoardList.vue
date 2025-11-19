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
          <tr v-for="item in noticeList" :key="item.id">
            <td>{{ item.id }}</td>
            <td class="text__left"><router-link :to="`/community/notice/${item.id}`">{{ item.title }}</router-link></td>
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