<template>
  <div :style="{minWidth:MIN_WINDOW_WIDTH}">
    <navbar></navbar>
    <el-container style="">
      <el-aside width="60%" style="margin-right: 5%;min-height: 800px">
        <!-- 图片区 -->
        Aside
      </el-aside>
      <el-main style="min-height: 800px;width: 40%;">
        <!-- 登录 -->
        <el-card class="box-card">
          <div class="clearfix" style="height: 40px;">
            <span>登录</span>
          </div>
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="账号">
              <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="form.password"placeholder="请输入密码" :type="pwdType"><i @click="showPwd" slot="suffix" class="el-input__icon el-icon-view"></i></el-input>
            </el-form-item>
            <el-form-item style="margin-left: 0;">
              <el-button type="primary" native-type="submit" @submit="handleLogin" @click="handleLogin">登录</el-button>
              <el-button type="primary" @click="handleRegister">注册</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
    </el-container>
    <footbar></footbar>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data(){
      return{
        form:{
          username:'',
          password:''
        },
        pwdType: 'password'
      }
    },
    components:{
    },
    methods:{
      handleLogin: function () {
        this.$store.dispatch('Login',this.form).then(() => {
          this.$message({
            showClose: true,
            message: '登录成功',
            type: 'success',
            duration:1000,
            onClose:()=>{
              this.$router.push({path:'/home'})// 跳转到首页
            }
          });
        }).catch(error => {
          console.log(error)
        })
      },
      handleRegister: function () {
        this.$router.push({path:'/register'})
      },
      showPwd:function () {
        if( this.pwdType === 'text'){
          this.pwdType = 'password'
        }else {
          this.pwdType = 'text'
        }
      }
    }
  }
</script>

<style scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card{
    width: 400px;
    margin:200px auto;
  }

</style>
