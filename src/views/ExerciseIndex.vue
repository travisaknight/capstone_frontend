<template>
  <!-- Video-->
  <div class="layout">
    <div class="wrapper">
      <section class="module module-divider-bottom">
        <div class="container">
          <div class="row">
            <div v-for="exercise in exercises" class="col-md-12">
              <h1>{{ exercise.name }}</h1>
              <p>
                <iframe
                  width="560"
                  height="315"
                  v-bind:src="exercise.video_demo"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- Video end-->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Here be exercises",
      exercises: []
    };
  },
  created: function() {
    axios.get("/api/exercises").then(response => {
      this.exercises = response.data;
      console.log("Get Swoll", this.exercises);
    });
  },
  methods: {}
};
</script>
