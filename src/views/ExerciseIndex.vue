<template>
  <!-- Video-->
  <div class="layout">
    <div class="wrapper">
      <!-- <section class="module module-divider-bottom">
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
      </section> -->
      <!-- Video end-->

      <section class="module module-divider-bottom">
        <div class="container">
          <div class="row m-b-100">
            <div v-for="exercise in exercises" class="col-md-8 m-auto">
              <div class="special-heading">
                <h4>{{ exercise.name }}</h4>
              </div>
              <p>
                <button
                  class="btn btn-round btn-brand"
                  type="button"
                  data-toggle="modal"
                  v-bind:data-target="`#modal-${exercise.exercise_id}`"
                >
                  Launch {{ exercise.name }} Demo
                </button>
              </p>

              <div class="modal fade" v-bind:id="`modal-${exercise.exercise_id}`">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title">This is how you</h5>
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
                      <p>
                        SUP JABRONIS!?
                      </p>
                      <p>
                        Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer
                        elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum.
                        Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone
                        Kickstarter, drinking vinegar jean shorts fixie consequat flexitarian four loko.
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-round btn-gray" type="button">Close</button>
                      <button class="btn btn-round btn-brand" type="button">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>
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
