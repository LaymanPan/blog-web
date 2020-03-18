<template>
  <div :style="{minWidth:MIN_WINDOW_WIDTH}">
    <!-- 上方导航 -->
    <navbar></navbar>
    <el-row style="width:1000px;margin: auto" :gutter="20">
      <el-col :span="3">
        <blog-left-bar></blog-left-bar>
      </el-col>
      <el-col :span="21">
        <blog-main></blog-main>
      </el-col>
    </el-row>
    <footbar></footbar>
  </div>
</template>

<script>
  import {BlogLeftBar,BlogMain} from './components'

  export default {
    name: 'bloglayout',
    components:{
      BlogLeftBar,
      BlogMain
    }
  }
</script>

<style scoped>

</style>
