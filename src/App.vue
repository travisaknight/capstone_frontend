<template>
  <div id="app">
    <header class="header header-right">
      <div class="container-fluid">
        <!-- Logos-->
        <div class="inner-header">
          <a class="inner-brand" href="/">
            <img class="brand-dark" src="assets/images/logo.png" width="77px" alt="" />
            <img class="brand-light" src="assets/images/logo-light.png" width="77px" alt="" />
          </a>
        </div>
        <!-- Navigation-->
        <div class="inner-navigation collapse">
          <div class="inner-navigation-inline">
            <div class="inner-nav onepage-nav">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a class="external" href="start.html">All Demos</a></li>
                <!-- Button-->
                <li>
                  <a class="nav-btn external" href="#">
                    <div class="btn btn-circle btn-brand">Get started</div>
                  </a>
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

    <router-view />

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <!-- Text widget-->
            <aside class="widget widget_text">
              <div class="textwidget">
                <p><img src="assets/images/logo-light.png" width="100" alt="" /></p>
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non
                  enim eleifend felis pretium feugiat.
                </p>
                E-mail:
                <a href="mailto:support@core.com">support@core.com</a>
                <br />
                Phone: 8 800 123 4567
                <br />
                Fax: 8 800 123 4567
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
                  <a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a>
                  <span class="post-date">May 8, 2016</span>
                </li>
                <li>
                  <a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a>
                  <span class="post-date">April 7, 2016</span>
                </li>
                <li>
                  <a href="#">Experience the sound of a modern and clean 360° Bluetooth Speaker.</a>
                  <span class="post-date">April 7, 2016</span>
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
            </aside>
          </div>
          <div class="col-md-6 col-lg-3">
            <!-- Tags widget-->
            <aside class="widget widget_tag_cloud">
              <div class="widget-title">
                <h5>Tags</h5>
              </div>
              <div class="tagcloud">
                <a href="#">Design</a>
                <a href="#">Travel</a>
                <a href="#">Startup</a>
                <a href="#">Music</a>
                <a href="#">Portfolio</a>
                <a href="#">Responsive</a>
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
                  © 2017 Core, All Rights Reserved. Design with love by
                  <a href="http://2the.me/">2the.me</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style></style>
