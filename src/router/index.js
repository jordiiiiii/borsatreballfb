import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ofertes from "@/views/oferta/Ofertes";
import Oferta from "@/views/oferta/Oferta";
import CrearOferta from "@/views/oferta/CrearOferta";
import CrearOferta2 from "@/views/oferta/CrearOferta2";
import Signup from "@/views/usuari/Signup";
import Signin from "@/views/usuari/Signin";
import Profile from "@/views/usuari/Profile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ofertes",
    name: "Ofertes",
    component: Ofertes,
  },
  {
    path: "/ofertes/:id",
    name: "Oferta",
    props: true,
    component: Oferta,
  },
  {
    path: "/oferta/nova",
    name: "CrearOferta",
    component: CrearOferta,
    // beforeEnter: AuthGuard,
  },
  {
    path: "/crearOferta2",
    name: "CrearOferta2",
    component: CrearOferta2,
    // beforeEnter: AuthGuard,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    // beforeEnter: AuthGuard,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
