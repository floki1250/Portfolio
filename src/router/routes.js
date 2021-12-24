const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/home", component: () => import("pages/Index.vue") },
      { path: "/", component: () => import("pages/Index.vue") },
      { path: "/About", component: () => import("pages/About.vue") },
      { path: "/contact", component: () => import("pages/ContactMe.vue") },
      {
        path: "/projects",
        component: () => import("components/Project.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
