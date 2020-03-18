import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout/homelayout/layout'
import userinfolayout from '../views/layout/userinfolayout/userinfolayout'
import bloglayout from '../views/layout/bloglayout/bloglayout'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/login', name: 'login', component:() =>import('../views/login/index'),meta:{title:'登录'}},
    {path:'/register',name: 'register',component:() =>import('../views/register/index'),meta:{title:'注册'}},
    {
      path: '',
      name: 'layout',
      component: layout,
      redirect: '/home',
      children:[{
        path: 'home',
        name: 'home',
        component: () => import('../views/home'),
        meta:{title:'首页'}
        }
      ]
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: userinfolayout,
      redirect: '/userinfo/personalCenter',
      children: [{
        path: 'personalCenter',
        name: 'personalCenter',
        component: () => import('../views/userinfo/PersonalCenter'),
        meta: {title:'个人中心'}
      }]
    },
    {
      path:'/bloginfo',
      name:'bloginfo',
      component:bloglayout,
      redirect:'/blogInfo/myBlog',
      children:[{
        path:'myBlog',
        name:'myBlog',
        component:() => import('../views/bloginfo/MyBlog'),
        meta:{title:'我的博客'}
      }]
    }
  ]
})
