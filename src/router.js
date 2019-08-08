import Vue from "vue";
import Router from "vue-router";
import WorkoutIndex from "./views/WorkoutIndex.vue";
import ExerciseIndex from "./views/ExerciseIndex.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: WorkoutIndex
    },
    {
      path: "/exercises",
      name: "exercises",
      component: ExerciseIndex
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});
