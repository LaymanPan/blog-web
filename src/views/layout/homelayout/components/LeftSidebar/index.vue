<template>
  <div class="left-bar">
    <div class="left-label"><router-link to="/">推荐</router-link></div>
    <div class="left-label"><router-link to="/">Java</router-link></div>
    <div class="left-label"><router-link to="/">Python</router-link></div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .left-bar{
    height: 500px;
    width: 8%;
    float: left;
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
  .left-label:hover {
    background: #FF0000;
    border-radius: 5px;
   }
  .left-label:hover a{
    color: white;
  }
</style>
