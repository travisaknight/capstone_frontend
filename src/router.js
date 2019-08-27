import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import WorkoutIndex from "./views/WorkoutIndex.vue";
import ExerciseIndex from "./views/ExerciseIndex.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import AddNewExercise from "./views/WorkoutNewExercise.vue";
import WorkoutEdit from "./views/WorkoutEdit.vue";
import CreateWorkout from "./views/CreateWorkout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/your_workout",
      name: "your_workout",
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
    },
    {
      path: "/create_workout",
      name: "create-workout",
      component: CreateWorkout
    }
  ]
});
