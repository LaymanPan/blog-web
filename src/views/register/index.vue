<template>
  <div :style="{minWidth:MIN_WINDOW_WIDTH}" >
    <navbar></navbar>
    <el-container style="min-height: 700px;width: 450px;margin: auto">
      <el-main >
        <!-- 登录/注册 -->
        <el-card class="box-card">
          <div class="clearfix" style="height: 40px;">
            <span>注册</span>
          </div>
          <el-form ref="form" :model="form" label-width="80px" :rules="registerRules" >
            <el-form-item label="账号" prop="username">
              <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password" type="password">
              <el-input v-model="form.password" :type="pwdType"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass" >
              <el-input v-model="form.checkPass" :type="pwdType"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nickname">
              <el-input v-model="form.nickname"></el-input>
            </el-form-item>
            <el-form-item label="出生日期" prop="birth">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.birth" style="width: 100%;" format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd 00:00:00"></el-date-picker>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="form.sex">
                <el-radio label="1" >男</el-radio>
                <el-radio label="0" >女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="个人简介" prop="intro">
              <el-input type="textarea" v-model="form.intro" resize="none" cols="20" maxlength="200" :rows="5"></el-input>
            </el-form-item>
            <el-form-item style="margin-left: 0;">
              <el-button type="primary" native-type="submit" @submit="handleRegister" @click="handleRegister">注册</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import {hasIllegalChar,isLegalEamil} from '@/utils/validate'
  export default {
    name: 'index',
    data() {
      const validateUsername = (rule, value, callback) => {// 验证用户账号
        if (value === '') {
          callback(new Error('账号不能为空'));
        } else if(hasIllegalChar(value)){
          callback(new Error('不能包含特殊符号'))
        } else{
          callback()
        }
      };
      const validatePass = (rule, value, callback) => {// 验证密码
        if (value.length < 6) {
          callback(new Error('密码不能小于6位'))
        } else if(hasIllegalChar(value)){
          callback(new Error('不能包含特殊符号'))
        }
        else {
          callback()
        }
      };
      const validateCheckPass = (rule, value, callback) => {// 验证确认密码
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      const validateNickname = (rule, value, callback) => {// 验证用户昵称
        if (value === '') {
          callback(new Error('昵称不能为空'));
        } else {
          callback();
        }
      };
      const validateEmail =  (rule, value, callback) => {// 验证用户昵称
        if (value !== '' && !isLegalEamil(value)) {
          callback(new Error('邮箱格式错误'));
        } else {
          callback();
        }
      };
      return {
        form: {
          username: '',
          password: '',
          nickname: '',
          email:null,
          sex:null,
          birth:null,
          intro:null
        },
        pwdType: 'password',
        registerRules: {
          username: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePass}],
          checkPass: [{required: true, trigger: 'blur', validator: validateCheckPass}],
          nickname: [{required: true, trigger: 'blur', validator: validateNickname}],
          email: [{trigger: 'blur', validator: validateEmail}],
        },

      }
    },
    methods:{
      handleRegister:function () {
        this.$refs.form.validate(valid => {
            if(valid) {// 如果字段参数都合法
              this.$store.dispatch('Register', this.form).then(() => {// 注册成功 跳转到登录界面
                this.$router.push({path: '/login'})
              }).catch(error => {
                console.log(error)
              })
            }else{
              return false
            }
        })
      }
    }
  }
</script>

<style scoped>
</style>
