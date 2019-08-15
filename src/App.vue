<template>
  <div id="app">
    <header></header>
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">GAINZ</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Your Workouts</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/exercises" class="nav-link">Exercises</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signup" class="nav-link">Signup</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/logout" class="nav-link">Logout</router-link>
            </li>
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.navbar-brand {
  font-family: "Bowlby One SC", cursive;
  font-size: 50px;
}

body {
  font-family: "Arvo", serif;
}
</style>
