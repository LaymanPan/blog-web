import { login, logout, getUserInfo, register } from '@/api/userinfo'
import { getToken, setToken, removeToken } from '@/utils/auth'
const user = {
  state: {
    token: '',
    avatar: '',
    username:''
  },
  mutations:{
    SET_TOKEN:(state,token) => {
      state.token = token
    },
    SET_AVATAR:(state,avatar) =>{
      state.avatar = avatar
    },
    SET_USERNAME:(state,username) => {
      state.username = username
    }
  },
  actions:{
    // 登录
    Login({commit},userinfo) {
      return new Promise((resolve,reject) => {
        login(userinfo.username, userinfo.password).then(response => {
          /* 保存token */
          /* cookie中添加token */
          /* 获取用户头像地址并保存 */
          commit('SET_USERNAME',userinfo.username)
          commit('SET_AVATAR','test')
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
    ,
    // 注册
    Register({commit},userinfo){
      return new Promise((resolve,reject) => {
        register(userinfo).then(response  => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    Logout({commit}){
      return new Promise((resolve,reject) => {
        logout().then(response  => {
          commit('SET_AVATAR','')//清空头像
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
