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
                  Choose two core exercises that complement each other like the pallof press and the plank. Any corework
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

                <p v-if="evaluationState === 'UpperSolid'">Nice well balanced workout!</p>
                <p v-if="evaluationState === 'MORE-LOWER'">Need more lowers!</p>
                <p v-if="evaluationState === 'MORE-UPPER'">Need more uppers!</p>
                <p v-if="evaluationState === 'MORE-CORE'">Need more core!</p>
                <p v-if="evaluationState === 'BAD'">Awful!</p>
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
  },
  computed: {
    evaluationState: function() {
      var selectedExercises = this.exercises.filter(exercise => exercise.selected);

      var upperCount = 0;
      var lowerCount = 0;
      var coreCount = 0;
      selectedExercises.forEach(exercise => {
        if (exercise.category_id === 1) {
          upperCount++;
        } else if (exercise.category_id === 2) {
          lowerCount++;
        } else if (exercise.category_id === 3) {
          coreCount++;
        }
      });

      if (upperCount >= 3) {
        return "UpperSolid";
      } else if (upperCount === 2) {
        return "OneMoreUpper";
      } else if (upperCount <= 1) {
        return "MoreUpper";
      } else if (lowerCount >= 3) {
        return "OneMoreLower";
      } else if (lowerCount === 2) {
        return "TwoMoreLower";
      } else if (lowerCount <= 1) {
        return "MoreLower";
      } else if (upperCount <= 1) {
        return "TwoMoreUpper";
      } else {
        return "BAD";
      }

      // if (selectedExercises.length > 2) {
      //   return "AWESOME";
      // } else if (selectedExercises.length > 1) {
      //   return "OKAY";
      // } else {
      //   return "TERRIBLE";
      // }
      //   if (upperCount >= 3 && lowerCount > 0 && coreCount > 0) {
      //     return "Nailed it!";
      //   } else if (upperCount === 2 && lowerCount === 0) {
      //     return "One more upper";
      //   } else if (upperCount) {
      //     return "BAD";
      //   }
      // }
    }
  }
};
</script>
