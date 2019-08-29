<template>
  <section class="module module-divider-bottom">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <div class="special heading">
            <form v-on:submit.prevent="addExercise()">
              <ul>
                <li v-for="error in errors">{{ error }}</li>
              </ul>
              <section class="module module-divider-bottom">
                <div class="container">
                  <div class="row m-b-50">
                    <div class="col-md-8 m-auto" v-for="exercise in exercises">
                      <div class="special-heading">
                        <h4>{{ exercise.name }}</h4>
                        <input type="checkbox" v-model="exercise.selected" />
                      </div>
                      <div class="form-group row">
                        <label class="col-2 col-form-label" for="sets">SETS</label>
                        <div class="col-10">
                          <input class="form-control" type="text" v-model="exercise.sets" />
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="col-2 col-form-label" for="example-search-input">REPS</label>
                        <div class="col-10">
                          <input class="form-control" type="text" v-model="exercise.reps" />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-2 col-form-label" for="example-search-input">WEIGHT</label>
                        <div class="col-10">
                          <input class="form-control" type="text" v-model="exercise.weight" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <input class="btn btn-circle btn-shadow btn-gray" type="submit" value="Add Your Exercises" />
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
      var numCompleted = 0;
      var selectedExercises = this.exercises.filter(exercise => exercise.selected);
      selectedExercises.forEach(exercise => {
        var params = {
          exercise_id: exercise.exercise_id,
          sets: exercise.sets,
          reps: exercise.reps,
          weight: exercise.weight
        };
        console.log("sending params", params);
        axios.post("/api/workouts", params).then(response => {
          console.log("success", response.data);
          numCompleted += 1;
          if (numCompleted >= selectedExercises.length) {
            this.$router.push("/your_workout");
          }
        });
      });
    }
  }
};
</script>
