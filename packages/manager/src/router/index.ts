import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { staticRouter } from "./static";
import { loading } from "../utils/loading";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: staticRouter,
});

// 路由加载前
router.beforeEach(async (to, from, next) => {
  NProgress.configure({ showSpinner: false });
  NProgress.start();
  loading.show();
  next();
});

// 路由加载后
router.afterEach(() => {
  loading.hide();
  NProgress.done();
});

router.beforeEach(async (to) => {
  if (to.meta.title) {
    // 判断是否有标题
    document.title = to.meta.title as string;
  }
});

export default router;
