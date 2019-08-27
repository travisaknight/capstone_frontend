<template>
  <div class="layout">
    <!-- Wrapper-->
    <div class="wrapper">
      <!-- Page Header-->
      <section class="module-page-title">
        <div class="container">
          <div class="row-page-title">
            <div class="page-title-captions">
              <h1 class="h5">Good day, yo</h1>
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
                  <p>
                    {{ workout.exercise }}
                    <input type="text" v-model="workout.sets" />
                    sets x
                    <input type="text" v-model="workout.reps" />
                    reps --
                    <router-link v-bind:to="`/exercise/${workout.id}/edit`" tag="button">Edit</router-link>
                    --
                    <button v-on:click="destroyExercise(workout)">Delete</button>
                  </p>
                </div>
                <router-link to="/add_exercise">Add an exercise</router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Paragraph end-->
    </div>
  </div>
</template>

<!-- <div class="container index">
    <div v-for="workout in workouts">
      <h3>
        {{ workout.exercise }} {{ workout.sets }} x {{ workout.reps }} --
        <router-link v-bind:to="`/exercise/${workout.id}/edit`" tag="button">Edit</router-link>
        --
        <button v-on:click="destroyExercise(workout)">Delete</button>
      </h3>
    </div>
    <router-link to="/add_exercise">Add an exercise</router-link>
  </div> -->

<style>
button {
  height: 40px;
  width: 60px;
  font-size: 15px;
}
</style>

<script>
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
  methods: {
    destroyExercise: function(workout) {
      axios.delete("/api/workouts/" + workout.id).then(response => {
        this.$router.push("/your_workout");
      });
    }
  }
};
</script>
