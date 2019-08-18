<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="exercise in exercises">
      <h1>{{ exercise.name }}</h1>
      <h2>{{ exercise.category }}</h2>
      <div>
        <iframe
          width="560"
          height="315"
          v-bind:src="exercise.video_demo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <!-- <div>
        <iframe
          width="560"
          height="315"
          src="http://www.youtube.com/embed/-P9HIPp1QG4"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> -->
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
