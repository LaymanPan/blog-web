import  {getToken} from '@/utils/auth'
import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'

/* 部分页面需要登录才可以 */
router.beforeEach((to,from,next) => {
  NProgress.start()
  // if(to.path.indexOf('/userinfo') !== -1){
  //   if(store.getters.avatar !== ''){
  //     next()
  //   }else{
  //     next({ path: '/login' })
  //   }
  // }else{
  //   next()
  // }
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
