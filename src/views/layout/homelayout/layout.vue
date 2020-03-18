<template>
  <div :style="{minWidth:MIN_WINDOW_WIDTH}">
      <div class="app-wrapper" >
        <!-- 上方导航栏 -->
        <navbar></navbar>
        <!-- 左侧内容 -->
        <left-sidebar></left-sidebar>
        <!-- 页面内容 -->
        <appmain></appmain>
        <!-- 右侧内容 -->
        <right-sidebar></right-sidebar>
      </div>
      <br clear="both">
      <div>
        <!-- 底部内容 -->
        <footbar></footbar>
      </div>
  </div>
</template>

<script>
  import {LeftSidebar,Appmain,RightSidebar,Footbar} from './components'

  export default {
    name: 'layout',
    components:{
      LeftSidebar,
      Appmain,
      RightSidebar,
      Footbar
    }
  }
</script>

<style scoped>
.app-wrapper{
}
</style>
