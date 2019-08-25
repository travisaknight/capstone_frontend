<template>
  <!-- Layout-->
  <div class="layout">
    <div class="wrapper">
      <section class="module">
        <div class="container">
          <div class="row">
            <div class="col-md-4 m-auto">
              <div class="up-logo">
                <p class="text-center m-b-50"><img src="assets/images/logo.png" width="100" alt="" /></p>
              </div>
              <div class="up-form">
                <form v-on:submit.prevent="submit()" method="post">
                  <ul>
                    <li class="text-danger" v-for="error in errors">{{ error }}</li>
                  </ul>
                  <div class="form-group">
                    <input class="form-control form-control-lg" type="email" v-model="email" />
                  </div>
                  <div class="form-group">
                    <input class="form-control form-control-lg" type="password" v-model="password" />
                  </div>
                  <div class="form-group">
                    <button class="btn btn-block btn-lg btn-round btn-brand" type="submit">Log in</button>
                  </div>
                </form>
              </div>
              <div class="up-help">
                <p><a href="#">Forgot your password?</a></p>
                <p>
                  Don't have an account yet?
                  <a href="#">Sign in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <!-- Layout end-->

  <!-- <div class="login">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Login</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div> -->
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
