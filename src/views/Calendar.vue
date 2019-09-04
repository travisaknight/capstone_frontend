<template>
  <div class="layout">
    <div class="wrapper">
      <section class="module">
        <div class="container">
          <div class="demo-app">
            <div class="demo-app-top">
              <button @click="toggleWeekends">toggle weekends</button>
              <button @click="gotoPast">go to a date in the past</button>
              (also, click a date/time to add an event)
            </div>
            <FullCalendar
              class="demo-app-calendar"
              ref="fullCalendar"
              defaultView="dayGridMonth"
              :header="{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
              }"
              :plugins="calendarPlugins"
              :weekends="calendarWeekends"
              :events="calendarEvents"
              @dateClick="handleDateClick"
            />
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

<script>
/* global $, Chart */
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// must manually include stylesheets for each plugin
import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import axios from "axios";

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function() {
    return {
      workouts: [],
      completes: [],
      calendarPlugins: [
        // plugins must be defined in the JS
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin // needed for dateClick
      ],
      calendarWeekends: true,
      calendarEvents: [
        // initial event data
        { title: "Event Now", sets: "", reps: "", weight: "", start: new Date() }
      ]
    };
  },
  created: function() {
    axios.get("/api/completes").then(response => {
      this.completes = response.data;
      console.log("COMPLETED", this.completes, this.completes[0].exercise);
      this.calendarEvents = this.completes.map(complete => ({
        title: complete.exercise,
        sets: complete.sets,
        reps: complete.reps,
        weight: complete.weight,
        start: complete.created_at
      }));
    });
  },
  mounted: function() {
    axios.get("/api/workouts").then(response => {
      this.workouts = response.data;
      console.log("Secret Formula", this.workouts);
    });
    axios.get("/api/completes_sum").then(response => {
      this.completeSum = response.data;
      console.log("Sum Of Reps", this.completeSum);
      this.setupChart();
    });
  },
  methods: {
    setupChart: function() {
      console.log("setupChart", this.completeSum);
      var items = this.completeSum;
      var labels = items.map(item => item.exercise);
      var data = items.map(item => item.reps);
      // var data = completedReps + items.map(item => item.reps);

      $(".core-chart").each(function(workouts) {
        $(this).appear(function() {
          var ctx = $(this);
          var myChart = new Chart(ctx, {
            type: "horizontalBar",
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
                    // type: "time",
                    // time: {
                    //   unit: "month"
                    // },

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
    toggleWeekends() {
      this.calendarWeekends = !this.calendarWeekends; // update a property
    },
    gotoPast() {
      let calendarApi = this.$refs.fullCalendar.getApi(); // from the ref="..."
      calendarApi.gotoDate("2000-01-01"); // call a method on the Calendar object
    },
    handleDateClick(arg) {
      if (confirm("You trying to add your GAINZ for " + arg.dateStr + "? WAY TO SLAY!")) {
        this.calendarEvents.push({
          // add new event data
          title: "Today's workout",
          start: arg.date,
          allDay: arg.allDay,
          exercise: this.completes.exercise,
          sets: this.completes.sets,
          reps: this.completes.reps,
          weight: this.completes.weight
        });
      }
    }
  }
};
</script>

<style>
.demo-app {
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.demo-app-top {
  margin: 0 0 3em;
}

.demo-app-calendar {
  margin: 0 auto;
  max-width: 900px;
}
</style>
