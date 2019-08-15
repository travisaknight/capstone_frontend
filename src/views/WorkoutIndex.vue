<template>
  <div class="container index">
    <h1>{{ message }}</h1>
    <div v-for="workout in workouts">
      <h3>{{ workout.exercise }} {{ workout.sets }} x {{ workout.reps }}</h3>
    </div>
    <router-link to="/add_exercise">Add an exercise</router-link>
    <div><router-link to="/workout_edit">Edit this workout</router-link></div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Your Secret Formula",
      workouts: []
    };
  },
  created: function() {
    axios.get("/api/workouts").then(response => {
      this.workouts = response.data;
      console.log("Secret Formula", this.workouts);
    });
  },
  methods: {}
};
</script>
