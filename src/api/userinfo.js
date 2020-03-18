import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/userinfo/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function register (userinfo) {
  return request({
    url: 'userinfo/addUser',
    method: 'post',
    // headers:{
    //   'Content-Type': 'application/json'
    // },
    data:userinfo

  })
}
export function getUserInfo(username){
    return request({
      url: '/userinfo/findUserInfo?username=' + username,
      method: 'get',
    })
}

export function logout () {
  return request({
    url: '/userinfo/loginOut',
    method: 'get',
  })
}
