<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="editWorkout()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Exercise:
      <input type="text" v-model="workout.exercise" />
      Sets:
      <input type="text" v-model="workout.sets" />
      Reps:
      <input type="text" v-model="workout.reps" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Update your workout",
      workout: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/workouts/" + this.$route.params.id).then(response => {
      this.workout = response.data;
    });
  },
  methods: {
    editWorkout: function(workout) {
      var params = {
        exercise: workout.exercise,
        sets: workout.sets,
        reps: workout.reps
      };
      axios
        .patch("/api/workouts/" + workout.id, params)
        .then(response => {
          this.$router.push("/workouts");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
