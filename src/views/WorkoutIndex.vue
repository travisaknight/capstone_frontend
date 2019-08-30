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
      <!-- Page Header end-->

      <section>
        <div class="row m-b-50">
          <div v-for="workout in workouts" class="col-md-8 m-auto">
            <div class="special-heading">
              <h1>{{ workout.exercise }}</h1>
            </div>
            <form v-on:submit.prevent="completeExercise()" class="form-inline">
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
              <button v-on:click="completeExercise(workout)" class="btn btn-round btn-brand">
                COMPLETED
              </button>
              -
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
  },
  methods: {
    setupChart: function() {
      console.log("setupChart", this.workouts);
      var items = [{ name: "TING", price: 99 }, { name: "something1", price: 2 }, { name: "something2", price: 3 }];
      var labels = items.map(item => item.name);
      var data = items.map(item => item.price);

      $(".core-chart").each(function(workouts) {
        $(this).appear(function() {
          console.log("Lisa's way", this.workouts);

          var ctx = $(this);
          var myChart = new Chart(ctx, {
            type: "horizontalBar",
            data: {
              labels: labels,
              workouts: [],
              datasets: [
                {
                  data: data,
                  backgroundColor: [
                    "rgba(74, 144, 226, 0.2)",
                    "rgba(74, 144, 226, 0.2)",
                    "rgba(74, 144, 226, 0.2)",
                    "rgba(74, 144, 226, 0.2)",
                    "rgba(74, 144, 226, 0.2)",
                    "rgba(74, 144, 226, 0.2)"
                  ],
                  borderWidth: 1
                }
              ]
            },
            options: {
              legend: {
                display: false
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
    completeExercise: function(workout) {
      var params = {
        workout_id: workout.id,
        sets: workout.sets,
        reps: workout.reps,
        weight: workout.weight
      };
      console.log("params sent", params);
      axios.post("api/completes", params).then(response => {
        this.$router.push("/your_workout");
        console.log("victory", response.data);
        console.log("failure", response.errors);
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
