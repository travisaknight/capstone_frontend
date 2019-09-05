<template>
  <div class="layout">
    <!-- Wrapper-->
    <div class="wrapper">
      <!-- Page Header-->
      <section class="module-page-title">
        <div class="container">
          <div class="row-page-title">
            <div class="page-title-captions">
              <h1 class="h5">YOUR SECRET FORMULA!</h1>
            </div>
            <div class="page-title-secondary"></div>
          </div>
        </div>
      </section>

      <!-- Page Header end-->

      <section>
        <div class="row m-b-50">
          <div v-for="workout in workouts" class="col-md-8 m-auto">
            <div class="special-heading">
              <h1>{{ workout.exercise }}</h1>
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
                v-model="workout.sets"
              />
              <label class="sr-only" for="inlineFormInput">Name</label>
              <div class="input-group-addon">REPS</div>
              <input
                class="form-control mb-2 mr-sm-2 mb-sm-0"
                id="inlineFormInput"
                type="text"
                v-model="workout.reps"
              />
              <label class="sr-only" for="inlineFormInputGroup">Username</label>
              <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                <div class="input-group-addon">WEIGHT</div>
                <input class="form-control" id="inlineFormInputGroup" type="text" v-model="workout.weight" />
              </div>
              <button style="margin: 10px" v-on:click="completeExercise(workout)" class="btn btn-round btn-brand">
                COMPLETED
              </button>

              <button v-on:click="destroyExercise(workout)" class="btn btn-round btn-brand">Delete</button>
            </form>
          </div>
        </div>
      </section>

      <section class="module module-divider-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <canvas class="core-chart"></canvas>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style></style>

<script>
/* global $, Chart */

import axios from "axios";

export default {
  data: function() {
    return {
      workouts: [],
      workout: {},
      completes: [],
      errors: []
    };
  },
  created: function() {},
  mounted: function() {
    axios.get("/api/workouts").then(response => {
      this.workouts = response.data;
      console.log("Secret Formula", this.workouts);
    });
    axios.get("/api/completes").then(response => {
      this.completes = response.data;
      console.log("COMPLETED", this.completes);
      this.setupChart();
    });
    axios.get("/api/completes_sum").then(response => {
      this.completeSum = response.data;
      console.log("Sum Of Reps", this.completeSum);
    });
  },
  methods: {
    setupChart: function() {
      console.log("setupChart", this.completes);
      var items = this.completes;
      var labels = items.map(item => item.created_at_calendar);
      // var data = items.map(item => item.reps);
      var exercises = items.map(item => item.exercise).filter((v, i, a) => a.indexOf(v) === i);
      var datasets = exercises.map(exercise => ({
        label: exercise,
        data: items.filter(item => item.exercise === exercise).map(item => ({ x: item.created_at, y: item.reps })),
        borderColor: this.getRandomColor(),
        backgroundColor: "rgba(74, 144, 226, 0)",
        lineTension: 0,
        hidden: true
      }));
      console.log("setupChart", exercises, datasets);
      // var time = items.map(item => item.created_at);
      // var data = completedReps + items.map(item => item.reps);

      var s1 = {
        label: "s1",
        borderColor: "blue",
        data: [{ x: "2017-01-06 18:39:30", y: 100 }, { x: "2017-01-07 18:39:28", y: 101 }]
      };

      var s2 = {
        label: "s2",
        borderColor: "red",
        data: [{ x: "2017-01-07 18:00:00", y: 90 }, { x: "2017-01-08 18:00:00", y: 105 }]
      };

      $(".core-chart").each(function(workouts) {
        $(this).appear(function() {
          var ctx = $(this);
          var myChart = new Chart(ctx, {
            // type: "line",
            // data: { datasets: [s1, s2] },

            type: "line",
            data: {
              labels: labels,
              datasets: datasets
            },
            options: {
              bezierCurve: false,
              legend: {
                display: true
              },
              scales: {
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    }
                  }
                ]
              }
            }
          });
        });
      });
    },

    getRandomColor: function() {
      var letters = "0123456789ABCDEF".split("");
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    completeExercise: function(workout) {
      var params = {
        workout_id: workout.id,
        exercise_id: workout.exercise_id,
        sets: workout.sets,
        reps: workout.reps,
        weight: workout.weight
      };
      console.log("params sent", params);
      axios.post("api/completes", params).then(response => {
        this.$router.push("/your_workout");
        console.log("victory", response.data);
      });
    },
    destroyExercise: function(workout) {
      axios.delete("/api/workouts/" + workout.id).then(response => {
        this.$router.push("/your_workout");
      });
    }
  }
};
</script>

<!--  
 -->
