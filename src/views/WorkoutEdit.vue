<template>
  <div class="home">
    <h1>Update your sets and reps.</h1>
    <div>
      Exercise:
      <input type="text" v-model="workout.exercise" />
      Sets:
      <input type="text" v-model="workout.sets" />
      Reps:
      <input type="text" v-model="workout.reps" />
      <button v-on:click="updateExercise(workout)" class="button">Update!</button>
    </div>
  </div>
</template>

<style>
.button {
  height: 40px;
  width: 60px;
  font-size: 15px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      workout: {}
    };
  },
  created: function() {
    axios.get("/api/workouts/" + this.$route.params.id).then(response => {
      this.workout = response.data;
    });
  },
  methods: {
    updateExercise: function(inputExercise) {
      var params = {
        sets: inputExercise.sets,
        reps: inputExercise.reps
      };
      axios.patch("/api/workouts/" + inputExercise.id, params).then(response => {
        this.$router.push("/your_workout");
      });
    }
  }
};
</script>
