<template>
  <section class="module module-divider-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <div class="special heading">
            <h1>{{ message }}</h1>
            <form v-on:submit.prevent="addExercise()">
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
              Exercise:
              <select v-model="newExercise">
                <option v-for="exercise in exercises" :value="exercise.exercise_id">{{ exercise.name }}</option>
              </select>
              Sets:
              <input type="text" v-model="sets" />
              Reps:
              <input type="text" v-model="reps" />
              Weight:
              <input type="text" v-model="weight" />
              <br />

              <input type="submit" value="Add Exercise" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Add an exercise",
      newExercise: "",
      exercises: [],
      sets: "",
      reps: "",
      weight: "",
      errors: []
    };
  },
  created: function() {
    axios.get("/api/exercises").then(response => {
      this.exercises = response.data;
      console.log("exercise options", this.exercises);
    });
  },
  methods: {
    addExercise: function() {
      var params = {
        exercise_id: this.newExercise,
        sets: this.sets,
        reps: this.reps,
        weight: this.weight
      };
      axios
        .post("/api/workouts", params)
        .then(response => {
          this.$router.push("/your_workout");
        })
        .catch(error => {
          console.log(error.response);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
