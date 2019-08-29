<template>
  <div class="layout">
    <!-- Wrapper-->
    <div class="wrapper">
      <!-- Page Header-->
      <section class="module-page-title">
        <div class="container">
          <div class="row-page-title">
            <div class="page-title-captions">
              <h1 class="h5">Ready to make some GAINZ?</h1>
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

      <!-- Paragraph-->
      <section class="module module-divider-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <div class="special-heading">
                <h4>YOUR SECRET FORMULA</h4>
                <div v-for="workout in workouts">
                  <ul>
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>
                  <p>
                    {{ workout.exercise }}
                    <input type="text" v-model="workout.sets" />
                    :sets: x
                    <input type="text" v-model="workout.reps" />
                    :reps: :weight:
                    <input type="text" v-model="workout.weight" />
                    --
                    <button v-on:click="completeExercise(workout)">Complete this exercise!</button>
                    <button v-on:click="destroyExercise(workout)">Delete</button>
                  </p>
                </div>
                <router-link to="/add_exercise">Add an exercise</router-link>
              </div>
            </div>
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
      <!-- Paragraph end-->
    </div>
  </div>
</template>

<style>
button {
  height: 40px;
  width: 60px;
  font-size: 15px;
}
</style>

<script>
/* global $, Chart */

import axios from "axios";

export default {
  data: function() {
    return {
      workouts: [],
      workout: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/workouts").then(response => {
      this.workouts = response.data;
      console.log("Secret Formula", this.workouts);
    });
  },
  mounted: function() {
    $(".core-chart").each(function() {
      $(this).appear(function() {
        var items = [
          { name: "something", price: 23 },
          { name: "something1", price: 2 },
          { name: "something2", price: 3 }
        ];
        var labels = items.map(item => item.name);
        var data = items.map(item => item.price);

        var ctx = $(this);
        var myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
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
  methods: {
    completeExercise: function(workout) {
      var params = {
        workout_id: workout.id,
        sets: workout.sets,
        reps: workout.reps,
        weight: workout.weight
      };
      console.log("params sent", params);
      axios.post("api/completes", params).then(response => {
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
