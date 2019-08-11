<template>
  <div class="container create">
    <h1>{{ message }}</h1>
    <form v-on:submit.prevent="addExercise()">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Exercise:
      <input type="text" v-model="newExercise" />
      Sets:
      <input type="text" v-model="sets" />
      Reps:
      <input type="text" v-model="reps" />
      <br />

      <input type="submit" value="Add Exercise" />
    </form>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Add an exercise or two",
      newExercise: "",
      sets: "",
      reps: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    addExercise: function() {
      var params = {
        exercise_id: this.newExercise,
        sets: this.sets,
        reps: this.reps
      };
      axios
        .post("/api/workouts", params)
        .then(response => {
          this.$router.push("/");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
