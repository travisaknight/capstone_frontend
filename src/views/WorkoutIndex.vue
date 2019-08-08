<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="workout in workouts">
      <h2>{{ workout.user }}</h2>
      <h3>{{ workout.exercise }} {{ workout.sets }} x {{ workout.reps }}</h3>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "GAINZ",
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
