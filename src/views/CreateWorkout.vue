<template>
  <div class="layout">
    <div class="wrapper">
      <section class="module-page-title">
        <div class="container">
          <div class="row-page-title">
            <div class="page-title-captions">
              <h1 class="h5">YOUR SECRET FORMULA!</h1>
            </div>
            <div class="page-title-secondary">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Shortcodes</a></li>
                <li class="breadcrumb-item active">Typography</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section class="module module-divider-bottom">
        <div class="container">
          <div class="row">
            <div class="row m-b-40">
              <div class="col-md-4">
                <div class="special-heading">
                  <h4>3 Upper Body Exercises</h4>
                </div>
                <p>
                  Choose one pulling exercise like a pull up or row and then choose one pushing exercise like push ups
                  or overhead press. Your third exercise could be any accessory exercise you'd like to work. Triceps
                  push down, biceps curl, lateral raises, etc. Stick to 3 sets of 8-10 to start.
                </p>
              </div>
              <div class="col-md-4">
                <div class="special-heading">
                  <h4>3 Lower Body Exercises</h4>
                </div>
                <p>
                  Choose one knee-dominant lower body exercise like a squat or lunge then choose one hip dominant
                  exercise like a Romanian Deadlift or conventional deadlift. Your third choice could be an accessory
                  like single leg squats or hip bridges. Stick to 3 sets of 8-10 to start.
                </p>
              </div>
              <div class="col-md-4">
                <div class="special-heading">
                  <h4>2 Core Exercises</h4>
                </div>
                <p>
                  Choose two core exercises that compliment each other like the pallof press and the plank. Any corework
                  that requires a hold (any plank variation) should be held between 20-30 seconds. If the exercise
                  requires reps, again, stick to 3 sets of 8-10. Core exercises can be done in between sets of your
                  upper and lower body sets to save time.
                </p>
              </div>
            </div>
          </div>
          <div class="row m-b-50">
            <div class="special heading">
              <form v-on:submit.prevent="addExercise()">
                <ul>
                  <li v-for="error in errors">{{ error }}</li>
                </ul>
                <section>
                  <div class="row m-b-50">
                    <div v-for="exercise in exercises" class="col-md-8 m-auto">
                      <div class="special-heading">
                        <h1>{{ exercise.name }}</h1>
                        <input type="checkbox" v-model="exercise.selected" />
                        <div>
                          <h4>{{ exercise.category }}</h4>
                        </div>
                      </div>
                      <form class="form-inline">
                        <ul>
                          <li v-for="error in errors">{{ error }}</li>
                        </ul>
                        <label class="sr-only" for="inlineFormInput">Name</label>
                        <div class="input-group-addon">SETS</div>
                        <input
                          class="form-control mb-2 mr-sm-2 mb-sm-0"
                          id="inlineFormInput"
                          type="text"
                          v-model="exercise.sets"
                        />
                        <label class="sr-only" for="inlineFormInput">Name</label>
                        <div class="input-group-addon">REPS</div>
                        <input
                          class="form-control mb-2 mr-sm-2 mb-sm-0"
                          id="inlineFormInput"
                          type="text"
                          v-model="exercise.reps"
                        />
                        <label class="sr-only" for="inlineFormInputGroup">Username</label>
                        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                          <div class="input-group-addon">WEIGHT</div>
                          <input class="form-control" id="inlineFormInputGroup" type="text" v-model="exercise.weight" />
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
                <!-- <section class="module module-divider-bottom">
                    <div class="container">
                      <div class="row m-b-50">
                        <div class="col-md-8 m-auto" v-for="exercise in exercises">
                          <div class="special-heading">
                            <h3>{{ exercise.name }}</h3>
                            <input type="checkbox" v-model="exercise.selected" />
                          </div>
                          <div class="special-heading">
                            <h4>{{ exercise.category }}</h4>
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
                  </section> -->
                <input class="btn btn-circle btn-shadow btn-gray" type="submit" value="Add Your Exercises" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
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
          category_id: exercise.category_id,
          sets: exercise.sets,
          reps: exercise.reps,
          weight: exercise.weight
        };
        var upperLowerMinimum = 3;
        var coreMinimum = 2;

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
