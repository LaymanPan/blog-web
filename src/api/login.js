import request from '@/utils/request'

export function login(username, password) {
  console.log("login" + username + password)
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
  console.log(userinfo)
  return request({
    url: 'userinfo/addUser',
    method: 'post',
    // headers:{
    //   'Content-Type': 'application/json'
    // },
    data:userinfo

  })
}
