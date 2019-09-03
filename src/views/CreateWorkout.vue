<template>
  <div class="layout">
    <div class="wrapper">
      <section class="module-page-title">
        <div class="container">
          <div class="row-page-title">
            <div class="page-title-captions">
              <h1 class="h5">Formula Ingredients</h1>
            </div>
            <div class="page-title-secondary"></div>
          </div>
        </div>
      </section>
      <section class="module module-divider-bottom">
        <div class="container">
          <div class="container">
            <div class="row">
              <div class="col-md-8 m-auto">
                <div class="special-heading m-b-40">
                  <h4>The Build</h4>
                </div>
                <!-- Tabs-->
                <ul class="nav nav-tabs justify-content-center">
                  <li class="nav-item">
                    <a class="nav-link active" href="#tab-7" data-toggle="tab">General Weight Loss GAINZ</a>
                  </li>
                  <li class="nav-item"><a class="nav-link" href="#tab-8" data-toggle="tab">Strong GAINZ</a></li>
                  <li class="nav-item"><a class="nav-link" href="#tab-9" data-toggle="tab">Big GAINZ</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane in active" id="tab-7">
                    <h4>3 Upper Body Exercises</h4>
                    <p>
                      Choose one pulling exercise like a pull up or row and then choose one pushing exercise like push
                      ups or overhead press. Your third exercise could be any accessory exercise you'd like to work.
                      Triceps push down, biceps curl, lateral raises, etc. Stick to 3 sets of 8-10 to start.
                    </p>
                    <h4>3 Lower Body Exercises</h4>
                    <p>
                      Choose one knee-dominant lower body exercise like a squat or lunge then choose one hip dominant
                      exercise like a Romanian Deadlift or conventional deadlift. Your third choice could be an
                      accessory like single leg squats or hip bridges. Stick to 3 sets of 8-10 to start.
                    </p>
                    <h4>2 Core Exercises</h4>
                    <p>
                      Choose two core exercises that complement each other like the pallof press and the plank. Any
                      corework that requires a hold (any plank variation) should be held between 20-30 seconds. If the
                      exercise requires reps, again, stick to 3 sets of 8-10. Core exercises can be done in between sets
                      of your upper and lower body sets to save time.
                    </p>
                  </div>
                  <div class="tab-pane" id="tab-8">
                    <p>
                      Day handsome addition horrible sensible goodness two contempt. Evening for married his account
                      removal. Estimable me disposing of be moonlight cordially curiosity. Delay rapid joy share allow
                      age manor six. Went why far saw many knew.
                    </p>
                    <p>
                      At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande
                      lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del
                      coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan
                      lingues.
                    </p>
                  </div>
                  <div class="tab-pane" id="tab-9">
                    <p>
                      Day handsome addition horrible sensible goodness two contempt. Evening for married his account
                      removal. Estimable me disposing of be moonlight cordially curiosity. Delay rapid joy share allow
                      age manor six. Went why far saw many knew.
                    </p>
                    <p>
                      Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit
                      seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip
                      veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone Kickstarter,
                      drinking vinegar jean shorts fixie consequat flexitarian four loko.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <section class="module">
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <div class="alert alert-brand">
                    <strong>Heads up!</strong>
                    This alert needs
                    <a class="alert-link" href="#">your attention</a>
                    , but it's not super important.
                  </div>
                  <div class="alert alert-success">
                    <strong>Well done!</strong>
                    <p v-if="counts === 'UpperSolid'"></p>
                    You built a balanced workout! GO GET AFTER IT!
                  </div>
                  <div class="alert alert-info">
                    <strong>Heads up!</strong>
                    This alert needs
                    <a class="alert-link" href="#">your attention</a>
                    , but it's not super important.
                  </div>
                  <div class="alert alert-warning">
                    <strong>Warning!</strong>
                    Better check yourself,
                    <a class="alert-link" href="#">you're not</a>
                    looking too good.
                  </div>
                  <div class="alert alert-danger">
                    <strong>DO YOU EVEN LIFT?!</strong>
                    <p v-if="counts === 'BAD'">Awful!</p>
                    Don't forget your 2 core and 3 upper and lower body exercises!
                  </div>
                </div>
              </div>
            </div>
          </section> -->

          <!-- Forms-->

          <div>
            <p v-if="counts.upper >= 3">Hit the required upper body goals!</p>
            <p v-if="counts.upper === 2">One upper body exercise away.</p>
            <p v-if="counts.upper < 2">You need 3 upper body exercises.</p>
          </div>

          <div>
            <p v-if="counts.lower >= 3">Those legs got some work to do!</p>
            <p v-if="counts.lower === 2">One more lower body exercise away!</p>
            <p v-if="counts.lower < 2">3 lower body exercises required. No chicken legs!</p>
          </div>
          <div>
            <p v-if="counts.core >= 2">Core is noice and toight!</p>
            <p v-if="counts.core === 1">One more core exercise needed.</p>
            <p v-if="counts.core < 1">You need 2 core exercises!</p>
          </div>
          <div>
            <p v-if="counts.core === 2 && counts.lower === 3 && counts.upper">THAT'S A SOLID WORKOUT, YO!</p>
          </div>
          <div class="row m-b-50">
            <div class="special heading">
              <form v-on:submit.prevent="addExercise()">
                <ul>
                  <li v-for="error in errors">{{ error }}</li>
                </ul>
                <section>
                  <div class="container">
                    <div class="row m-b-50">
                      <div class="col-md-8 m-auto">
                        <div class="special-heading">
                          <h4>Search by Category or Exercise</h4>
                        </div>
                        <form class="form-inline">
                          <label class="sr-only" for="inlineFormInput">Name</label>
                          <input
                            class="form-control mb-2 mr-sm-2 mb-sm-0"
                            id="inlineFormInput"
                            v-model="searchFilter"
                            type="text"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="row m-b-50">
                    <div
                      v-for="exercise in filterBy(exercises, searchFilter, 'category', 'name')"
                      class="col-md-8 m-auto"
                    >
                      <div class="special-heading">
                        <h1>{{ exercise.name }}</h1>
                        <input type="checkbox" v-model="exercise.selected" />
                        <div>
                          <h4>{{ exercise.category }}</h4>
                        </div>
                      </div>
                      <p>
                        <button
                          class="btn btn-round btn-brand"
                          type="button"
                          data-toggle="modal"
                          v-bind:data-target="`#modal-${exercise.exercise_id}`"
                        >
                          {{ exercise.name }} demo.
                        </button>
                      </p>

                      <div class="modal fade" v-bind:id="`modal-${exercise.exercise_id}`">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title">This is how you {{ exercise.name }}</h5>
                              <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span>&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <p>
                                <iframe
                                  width="420"
                                  height="250"
                                  :src="exercise.video_demo"
                                  frameborder="0"
                                  allowfullscreen
                                ></iframe>
                              </p>
                              <h3>
                                {{ exercise.name }}
                              </h3>
                              <p>{{ exercise.description }}</p>
                            </div>
                            <div class="modal-footer">
                              <button class="btn btn-round btn-gray" type="button">Close</button>
                              <button class="btn btn-round btn-brand" type="button">Save changes</button>
                            </div>
                          </div>
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
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Add an exercise",
      exercises: [],
      searchFilter: "",
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
    counts: function() {
      var selectedExercises = this.exercises.filter(exercise => exercise.selected);

      var upper = 0;
      var lower = 0;
      var core = 0;
      selectedExercises.forEach(exercise => {
        if (exercise.category_id === 1) {
          upper++;
        } else if (exercise.category_id === 2) {
          lower++;
        } else if (exercise.category_id === 3) {
          core++;
        }
      });

      return { upper, lower, core };

      // if (upper >= 3) {
      //   return "UpperSolid";
      // } else if (upper === 2) {
      //   return "OneMoreUpper";
      // } else if (upper <= 1) {
      //   return "MoreUpper";
      // } else if (lower >= 3) {
      //   return "LowerSolid";
      // } else if (lower === 2) {
      //   return "OneMoreLower";
      // } else if (lower <= 1) {
      //   return "MoreLower";
      // } else if (core >= 2) {
      //   return "CoreSolid";
      // } else if (core === 1) {
      //   return "OneMoreCore";
      // } else if (core < 1) {
      //   return "MoreCore";
      // } else if (upper === 3 && lower === 3 && core === 2) {
      //   return "Balance";
      // } else {
      //   return "TryHarder";
      // }
    }
  }
};
</script>
