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
                      <h3>3 Upper Body Exercises</h3>
                      <p>
                        Choose one pulling exercise like a pull up or row and then choose one pushing exercise like push
                        ups or overhead press. Your third exercise could be any accessory exercise you'd like to work.
                        Triceps push down, biceps curl, lateral raises, etc. Stick to 3 sets of 8-10 to start.
                      </p>
                      <h3>3 Lower Body Exercises</h3>
                      <p>
                        Choose one knee-dominant lower body exercise like a squat or lunge then choose one hip dominant
                        exercise like a Romanian Deadlift or conventional deadlift. Your third choice could be an
                        accessory like single leg squats or hip bridges. Stick to 3 sets of 8-10 to start.
                      </p>
                      <h3>2 Core Exercises</h3>
                      <p>
                        Choose two core exercises that complement each other like the pallof press and the plank. Any
                        corework that requires a hold (any plank variation) should be held between 20-30 seconds. If the
                        exercise requires reps, again, stick to 3 sets of 8-10. Core exercises can be done in between
                        sets of your upper and lower body sets to save time.
                      </p>
                      <h4>The workout should flow as such:</h4>
                      <ul>
                        <li>Upper exercise</li>
                        <li>Lower exercise</li>
                        <li>Core exercise</li>
                        <p>Rest for 60-90 seconds and repeat the circuit 3 more times.</p>
                      </ul>
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
                      <h3>Pick 1 compound movement: Deadlift, Squat, Bench, Overhead Press</h3>
                      <p>
                        After your warm up you will start your day with you strength exercise. You will perform 5 sets
                        of 5 reps increasing the weight each set. Try to up your weight each week. If you're feeling
                        like a champ on a given day go for as many reps as possible on your last set.
                      </p>
                      <h3>Pick 2 Core exercises and 4 accessory exercises.</h3>
                      <p>
                        After you've completed your strength portion you're going to want to help solidfy the gainz
                        made. Lower accessories would be hip bridges, deadlift variations, lunges, etc. Upper could be
                        dumbbell incline, tricep pushdowns, dips, etc. Perform your accessories 4-5 sets for 10-12 reps.
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
                      <h3>Pick 1 compound movement: Deadlift, Squat, Bench, Overhead Press</h3>
                      <p>
                        Much like the strength GAINZ you want to start your day with a strength lift using the 5x5
                        strategy from above.
                      </p>
                      <h3>Pick 4 upper and 4 lower exercises. 3 core.</h3>
                      <p>
                        After you've completed your strenght GAINZ you'll perform your chosen accessories. The way you
                        make size GAINZ is by picking a reasonable amount of weight and going to near failure. Usually
                        in the 8-15 rep range. Perform the exercises as circuits and supersets. Lower, Upper, Core..
                        rest.. repeat.
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
                              <h3>You're gonna be great at this.</h3>
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
