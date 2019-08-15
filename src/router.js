import Vue from "vue";
import Router from "vue-router";
import WorkoutIndex from "./views/WorkoutIndex.vue";
import ExerciseIndex from "./views/ExerciseIndex.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import AddNewExercise from "./views/WorkoutNewExercise.vue";
import WorkoutEdit from "./views/WorkoutEdit.vue";

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
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/add_exercise",
      name: "add_exercise",
      component: AddNewExercise
    },
    {
      path: "/exercise/:id/edit",
      name: "workouts-edit",
      component: WorkoutEdit
    }
  ]
});
