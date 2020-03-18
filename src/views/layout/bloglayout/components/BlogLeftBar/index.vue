<template>
  <div class="left-bar">
    <div v-for="(item,index) in itemList" :class="activeIndex === index ?'active':''" :key="index" class="left-label">
      <router-link :to="item.to" @click.native="changeActive(index)">{{item.text}}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        itemList:[{text:'我的博客', to:'/'},
          {text:'我的收藏', to:'/'},
          {text:'我的关注', to:'/'},
          {text:'我的标签', to:'/'}

        ],
        activeIndex:0
      }
    },
    methods:{
      changeActive(index){
        console.log("asdad")
        this.activeIndex = index
      }
    }
  }
</script>

<style scoped>
  .left-bar{
    height: 500px;
    background: #F5F5F5;
    border: 0 solid;
    border-radius: 5px;
    margin: 0 1.5%;
  }
  .left-label{
    margin-left: 10%;
    width: 80%;
    font-size: 18px;
    height: 30px;
    padding-top: 6px;
    margin-top: 10px;
  }
  .left-label:hover  {
    background: #FF0000;
    border-radius: 5px;
  }
  .left-label:hover  a{
    color: white;
  }
  .active {
    background: #FF0000;
    border-radius: 5px;
  }
  .active a{
    color: white;
  }
</style>
