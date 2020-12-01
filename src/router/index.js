import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import("../pages/Home");
const categories = () => import("../pages/Categories");
const shoppingcart = () => import("../pages/ShoppingCart");
const profile = () => import("../pages/Profile");
const MainMenuContent = () => import("@/components/content/MainMenuContent");

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    component: home,
    meta: {
      title: "首页"
    }
  },
  {
    path: '/categories',
    component: categories,
    meta: {
      title: "菜谱"
    }
  },
  {
    path: '/shoppingcart',
    component: shoppingcart,
    meta: {
      title: "收藏"
    }
  },
  {
    path: '/profile',
    component: profile,
    meta:{
      title: "我的"
    }
  },
  {
    path: '/MainMenuContent',
    component: MainMenuContent,
    meta:{
      title: "菜谱详情"
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title;
  next();
})

export default router;