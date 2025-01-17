import { createRouter, createWebHistory } from "vue-router";
import { useUsersStore } from "@/stores/users.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "initial",
      component: () => import("../views/InitialPageView.vue"),
    },
    {
      path: "/home",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
      meta: { requiresAdmin: true },
    },
    {
      path: "/calendar",
      name: "calendar",
      component: () => import("../views/CalendarView.vue"),
    },
    {
      path: "/payment/:idEvent?/:idPack?",
      name: "payment",
      component: () => import("../views/PaymentView.vue"),
    },
    {
      path: "/packs",
      name: "packs",
      component: () => import("../views/PacksView.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfileView.vue"),
    },
    {
      path:'/about-us',
      name:'aboutUs',
      component:() => import('../views/AboutUsView.vue'),
    },
    {
      path:'/about-us',
      name:'aboutUs',
      component:() => import('../views/AboutUsView.vue'),
    },
    {
      path:'/workshops',
      name:'workshops',
      component:() => import('../views/WorkshopsView.vue'),
    },
    {
      path:'/shows',
      name:'shows',
      component:() => import('../views/ShowsView.vue'),
    },
   
  ],
});

router.beforeEach((to, from, next) => {
  const store = useUsersStore();
  const user = store.users.find((u) => u.email === store.currentUser?.email);

  if (to.meta.requiresAdmin) {
    if (!user || user.id !== 0) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
