<template>
    <div :style="{minWidth:MIN_WINDOW_WIDTH}">
      <!-- 上方导航 -->
      <navbar></navbar>
      <el-row style="width:1000px;margin: auto" :gutter="20">
        <el-col :span="3">
          <user-left-bar></user-left-bar>
        </el-col>
        <el-col :span="21">
          <info-main></info-main>
        </el-col>
      </el-row>
      <footbar></footbar>
    </div>
</template>

<script>
  import {UserLeftBar,InfoMain} from './components'

  export default {
    name: 'layout',
    components:{
      UserLeftBar,
      InfoMain
    }
  }
</script>

<style scoped>

</style>
