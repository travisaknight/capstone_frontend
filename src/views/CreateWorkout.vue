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

              <div class="exercise_column" v-for="exercise in exercises">
                <span>
                  <input type="checkbox" v-model="exercise.selected" />
                  <label for="exercise">{{ exercise.name }}</label>
                </span>
                <div>
                  <span>
                    <label for="sets">SETS:</label>
                    <input type="text" v-model="exercise.sets" />
                    <label for="reps">REPS:</label>
                    <input type="text" v-model="exercise.reps" />
                  </span>
                </div>
              </div>

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
      exercises: [],
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
      // this.exercises.each do |exercise|
      var numCompleted = 0;
      var selectedExercises = this.exercises.filter(exercise => exercise.selected);
      selectedExercises.forEach(exercise => {
        var params = {
          exercise_id: exercise.exercise_id,
          sets: exercise.sets,
          reps: exercise.reps
        };
        console.log("sending params", params);
        axios.post("/api/workouts", params).then(response => {
          // this.$router.push("/your_workout");
          console.log("success", response.data);
          numCompleted += 1;
          if (numCompleted >= selectedExercises.length) {
            this.$router.push("/your_workout");
          }
        });
      });
      // this.exercises.forEach(exercise => {
      //   if (exercise.selected) {
      //     var params = {
      //       exercise_id: exercise.exercise_id,
      //       sets: exercise.sets,
      //       reps: exercise.reps
      //     };
      //     console.log("sending params", params);
      //     axios.post("/api/workouts", params).then(response => {
      //       // this.$router.push("/your_workout");
      //       console.log("success", response.data);
      //       numCompleted += 1;
      //       if (numCompleted >= this.exercises.length) {
      //         this.$router.push("/your_workout");
      //       }
      //     });
      //     // var exercise = this.exercises[0].selected;
      //   }
      // });
      // var params = {
      //   exercise_id: exercise.id,
      //   sets: exercise.sets,
      //   reps: exercise.reps
      // };

      // loop through this.exercises
      //   if exercise.selected
      //     send post request to /api/workouts with exercise.id, exercise.sets, exercise.reps
      // var exercise = this.exercises[0];
      // var params = {
      //   exercise_id: exercise.id,
      //   sets: exercise.sets,
      //   reps: exercise.reps
      // };
      // axios
      //   .post("/api/workouts", params)
      //   .then(response => {
      //     this.$router.push("/your_workout");
      //   })
      //   .catch(error => {
      //     console.log(error.response);
      //     this.errors = error.response.data.errors;
      //   });
    }
  }
};
</script>
