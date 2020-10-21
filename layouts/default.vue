<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark pt-3 pb-5">
      <a class="navbar-brand" href="#">Navbar w/ text</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
        <span class="navbar-text">Navbar text with an inline element</span>
      </div>
    </nav>
    <main>
      <div>
        <router-view></router-view>
      </div>
    </main>
    <footer class="bg-dark">
      <div class="container py-5 text-white">
        <div class="row">
          <div class="col-lg-6 mx-auto">
            <p>&#169; 2020 - Stephen Holmes</p>
            <p>
              Follow me on:
              <a href="https://codepen.io/Steve-H/"
                ><i class="fab fa-codepen"></i
              ></a>
              <a href="https://github.com/SteHolmes"
                ><i class="fab fa-github"></i
              ></a>
              <a href="https://www.linkedin.com/in/stephen-holmes-b00bb592/"
                ><i class="fab fa-linkedin"></i
              ></a>
            </p>
          </div>
          <div class="col-lg-6 mx-auto">
            <p>
              This responsive website is designed, developed, and maintained by
              Steve Holmes. View site source code on:
              <a href="https://github.com/SteHolmes/steholmes.github.io"
                ><i class="fab fa-github"></i
              ></a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: 'Stephen Holmes - Frontend Developer',
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/css/custom/main.scss';
</style>
