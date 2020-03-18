<template>
  <!-- 上方页面导航栏 -->
  <div class="nav-bar" :style="{minWidth:MIN_WINDOW_WIDTH}">
    <el-row>
      <el-col :span="1" class="nav-label">
        <router-link to="/">首页</router-link>
      </el-col>
      <el-col :span="1" class="nav-label">
        <router-link to="/">写博客</router-link>
      </el-col>
      <el-col :span="1" class="nav-label">
        <el-dropdown>
          <div v-if="avatar != ''">
            <img class="nav-avatar" alt="" src="@/assets/heshang.jpg">
            <el-dropdown-menu slot="dropdown" style=" padding:10px 20px;">
              <el-dropdown-item><router-link to="/userinfo/personalCenter">个人中心</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="/bloginfo/myBlog">我的博客</router-link></el-dropdown-item>
              <el-dropdown-item><router-link to="/login" @click.native="handleLogout()">退出登录</router-link></el-dropdown-item>
            </el-dropdown-menu>
          </div>
          <div v-else>
            <router-link to="/login">登录</router-link>
          </div>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed:{
      ...mapGetters([
        'avatar'
      ])
    },
    methods:{
      handleLogout(){
        this.$store.dispatch('Logout').then((response) => {
        }).catch(error => {
        })
      }
    }
  }
</script>

<style scoped>
  .nav-bar{
    height: 40px;
    margin-bottom: 10px;
  }
  .nav-label{
    height: 40px;
    padding-top: 9px;
    font-size: 18px;
    font-weight: bold;
    border: 0 solid;
    border-radius: 5px;
  }
  .nav-label:hover{
    background: #DCDFE6;
  }
  .nav-avatar{
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }
  /* 下拉菜单 */
  .el-dropdown {
    vertical-align: top;
  }
  el-dropdown-menu{

  }
  .el-dropdown + .el-dropdown {
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
