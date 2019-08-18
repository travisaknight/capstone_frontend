<template>
  <div class="container index">
    <h1>{{ message }}</h1>
    <div v-for="workout in workouts">
      <h3>
        {{ workout.exercise }} {{ workout.sets }} x {{ workout.reps }} --
        <router-link v-bind:to="`/exercise/${workout.id}/edit`" tag="button">Edit</router-link>
        --
        <button v-on:click="destroyExercise(workout)">Delete</button>
      </h3>
    </div>
    <router-link to="/add_exercise">Add an exercise</router-link>
  </div>
</template>

<style>
button {
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
      message: "Your Secret Formula",
      workouts: [],
      workout: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/workouts").then(response => {
      this.workouts = response.data;
      console.log("Secret Formula", this.workouts);
    });
  },

  methods: {
    destroyExercise: function(workout) {
      axios.delete("/api/workouts/" + workout.id).then(response => {
        this.$router.push("/");
      });
    }
  }
};
</script>
