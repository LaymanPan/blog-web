<template>
  <div  class="info-main">
    <!-- 个人信息 -->

  </div>
</template>

<script>
  import {getUserInfo} from '@/api/userinfo'
  export default {
    created () {
      getUserInfo('panym').then(response => {
        console.log(response)
      }).catch(error=>{

      })
    },
    methods:{

    }
  }
</script>

<style scoped>
.info-main{
  margin: 10px 0px;
  background: silver ;
  height: 700px;
}
</style>
