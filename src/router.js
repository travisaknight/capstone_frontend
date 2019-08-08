import Vue from "vue";
import Router from "vue-router";
import WorkoutIndex from "./views/WorkoutIndex.vue";
import ExerciseIndex from "./views/ExerciseIndex.vue";

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
    }
  ]
});
