<template>
  <div id="app">
    <!-- Layout-->
    <div class="layout">
      <!-- Header-->
      <header class="header header-right">
        <div class="container-fluid">
          <!-- Logos-->
          <div class="inner-header">
            <!-- <a class="inner-brand" href="index.html"> -->
            <router-link class="inner-brand" to="/">
              <img class="brand-dark" src="assets/images/GAINZ.png" width="77px" alt="" />
              <img class="brand-light" src="assets/images/GAINZ.png" width="77px" alt="" />
              <!-- </a> -->
            </router-link>
          </div>
          <!-- Navigation-->
          <div class="inner-navigation collapse">
            <div class="inner-navigation-inline">
              <div class="inner-nav onepage-nav">
                <ul>
                  <li><router-link to="/create_workout">Create A Workout</router-link></li>
                  <li><router-link to="/your_workout">Your Workout</router-link></li>
                  <li><router-link to="/exercises">Exercises</router-link></li>
                  <li><router-link to="/login">Login</router-link></li>
                  <li><a href="#team">Logout</a></li>
                  <li><a href="#services">Signup</a></li>
                  <!-- Button-->
                  <li>
                    <!-- <a class="nav-btn external" href="#">
                      <div class="btn btn-circle btn-brand">Get started</div>
                    </a> -->
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Mobile menu-->
          <div class="nav-toggle">
            <a href="#" data-toggle="collapse" data-target=".inner-navigation">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </a>
          </div>
        </div>
      </header>
      <!-- Header end-->

      <!-- Wrapper-->
      <div class="wrapper">
        <router-view />

        <!-- Footer-->
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <!-- Text widget-->
                <aside class="widget widget_text">
                  <div class="textwidget">
                    <p><img src="assets/images/GAINZ.png" width="100" alt="" /></p>
                    <p>
                      Here to educate you on the ways of the iron paradise.
                    </p>
                    E-mail:
                    <a href="/">HalfTonDeadlift@GAINZ.com</a>
                    <br />
                    Phone: 1-800-BUNZ-BE-TIGHT
                    <br />
                    Fax: 8 800 123 4567 --- FAX? LOLOLOLOL
                    <br />
                  </div>
                </aside>
              </div>
              <div class="col-md-6 col-lg-3">
                <!-- Recent entries widget-->
                <aside class="widget widget_recent_entries">
                  <div class="widget-title">
                    <h5>Recent Posts</h5>
                  </div>
                  <ul>
                    <li>
                      <a href="/">Best selfie advice for the gym? DON'T.</a>
                      <span class="post-date">August 12, 2019</span>
                    </li>
                    <li>
                      <a href="/">Splitting ones' pants at the bottom of a squat: A Short Story</a>
                      <span class="post-date">July 30, 2019</span>
                    </li>
                    <li>
                      <a href="/">When people say "Judo Chop" do they really mean "Karate Chop?"</a>
                      <span class="post-date">April 20, 2019</span>
                    </li>
                  </ul>
                </aside>
              </div>
              <div class="col-md-6 col-lg-3">
                <!-- Twitter widget-->
                <aside class="widget twitter-feed-widget">
                  <div class="widget-title">
                    <h5>Twitter Feed</h5>
                  </div>
                  <div class="twitter-feed" data-twitter="345170787868762112" data-number="1"></div>
                  <p>
                    Twitter is lame. Social media is just an excuse for people to curate their perfect lives and make
                    themselves feel better. The reality is, they are desperate for deeper human connection. Anyway...
                    Follow us on the 'Gram for some sick vids of athletic feats.
                  </p>
                </aside>
              </div>
              <div class="col-md-6 col-lg-3">
                <!-- Tags widget-->
                <aside class="widget widget_tag_cloud">
                  <div class="widget-title">
                    <h5>Sweet Hashes</h5>
                  </div>
                  <div class="tagcloud">
                    <a href="/">#Jacked</a>
                    <a href="/">#Getswoll</a>
                    <a href="/">#NeverSkipLegDay</a>
                    <a href="/">#GymLyfe</a>
                    <a href="/">#PeoplesElbow</a>
                    <a href="/">#WakandaForever</a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="text-center">
                    <span class="copyright">
                      © 2019 GAINZ, All Rights Reserved. Design with love by T. Knight. Brought to you in part by:
                      Actualize Coding Bootcamp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <!-- Footer end-->

        <a class="scroll-top" href="#top"><i class="fa fa-angle-up"></i></a>
      </div>
      <!-- Wrapper end-->
    </div>
    <!-- Layout end-->
  </div>
</template>

<style></style>
