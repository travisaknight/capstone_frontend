<template>
  <div class="layout">
    <div class="wrapper">
      <section class="module-page-title">
        <div class="container">
          <div class="row-page-title">
            <div class="page-title-captions">
              <h1 class="h5">If you build it... GAINZ will come.</h1>
            </div>
            <div class="page-title-secondary"></div>
          </div>
        </div>
      </section>
      <section class="module module-divider-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <div class="special-heading m-b-40">
                <h4>The Rough Rulez</h4>
              </div>
              <!-- Accordion card-body-->
              <div class="accordion panel-group" id="accordion">
                <div class="card">
                  <div class="card-header">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false">
                      General Weight Loss Gainz
                    </a>
                  </div>
                  <div class="collapse show" id="collapse4">
                    <div class="card-body">
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
                        exercise requires reps, again, stick to 3 sets of 8-10. Core exercises can be done in between
                        sets of your upper and lower body sets to save time.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false">
                      Strength Gainz
                    </a>
                  </div>
                  <div class="collapse" id="collapse5">
                    <div class="card-body">
                      <p>
                        Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer
                        elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.
                        Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone
                        Kickstarter, drinking vinegar jean shorts fixie consequat flexitarian four loko.
                      </p>
                      <p>
                        Day handsome addition horrible sensible goodness two contempt. Evening for married his account
                        removal. Estimable me disposing of be moonlight cordially curiosity. Delay rapid joy share allow
                        age manor six. Went why far saw many knew.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false">
                      Big Gainz
                    </a>
                  </div>
                  <div class="collapse" id="collapse5">
                    <div class="card-body">
                      <p>
                        Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer
                        elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.
                        Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone
                        Kickstarter, drinking vinegar jean shorts fixie consequat flexitarian four loko.
                      </p>
                      <p>
                        Day handsome addition horrible sensible goodness two contempt. Evening for married his account
                        removal. Estimable me disposing of be moonlight cordially curiosity. Delay rapid joy share allow
                        age manor six. Went why far saw many knew.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="upperBod">
            <p class="alert alert-success" v-if="counts.upper >= 3">Okay Upper Body! I see you!</p>
            <p class="alert alert-warning" v-if="counts.upper === 2">
              One more upper body exercise away from actualization.
            </p>
            <p class="alert alert-danger" v-if="counts.upper === 1">
              DO YOU EVEN LIFT!? You need 3 upper body exercises.
            </p>
          </div>

          <div class="lowerBod">
            <p class="alert alert-success" v-if="counts.lower >= 3">
              Those stems of yours are on the path of mightiness.
            </p>
            <p class="alert alert-warning" v-if="counts.lower === 2">
              Those legs need one more exercise to feel complete.
            </p>
            <p class="alert alert-danger" v-if="counts.lower === 1">
              You need 3 lower body exercises! No chicken legs!
            </p>
          </div>
          <div class="coreBod">
            <p class="alert alert-success" v-if="counts.core >= 2">
              Your abdominal wall is on it's way to legend status!
            </p>
            <p class="alert alert-warning" v-if="counts.core === 1">One. More. Core.</p>
            <p class="alert alert-danger" v-if="counts.core < 0">You need 2 core exercises!</p>
          </div>
          <div id="theEnd" class="workoutWinner">
            <h2 class="alert alert-brand" v-if="counts.core === 2 && counts.lower === 3 && counts.upper === 3">
              YOU WIN THE WORKOUT!
            </h2>
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
                        <div class="form-check">
                          <label class="custom-control custom-checkbox">
                            <input class="custom-control-input" type="checkbox" v-model="exercise.selected" />
                            <span class="custom-control-indicator"></span>
                            <span class="custom-control-description">
                              <h2>{{ exercise.name }}</h2>
                            </span>
                          </label>
                          <h5>{{ exercise.category }}</h5>
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
                              You're gonna be great at this.
                            </div>
                          </div>
                        </div>
                      </div>
                      <form class="form-inline" style="padding-bottom: 80px;">
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

<style>
.upperBod {
  position: fixed;
  top: 8em;
  z-index: 1;
}

.lowerBod {
  position: fixed;
  top: 4em;
  z-index: 1;
}

.coreBod {
  position: fixed;
  top: 12em;
  z-index: 1;
}
.workoutWinner {
  position: fixed;
  top: 8em;
  z-index: 2;
}
</style>

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
    }
  }
};
</script>
