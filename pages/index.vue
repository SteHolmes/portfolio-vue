<template>
  <div class="home text-white">
    <div class="jumbotron jumbotron-fluid skewed-page-section">
      <div class="container skewed-page-section__wrapper text-center">
        <h1 class="display-4">Steve Holmes</h1>
        <p
          class="lead"
        >Hi, I'm a front-end web developer currently working at CTI Digital in Manchester.</p>
      </div>
    </div>
    <section class="container" aria-label="introduction">
      <div class="row">
        <div class="col-lg-9 mt-4 py-5">
          <h2 class="text-uppercase pb-2 border-bottom border-dark">A bit about me...</h2>
          <p>Hi, my name is Steve Holmes and I'm a creative front end developer living in Marple, Stockport. I love problem solving, coding, learning new skills, hiking, cycling and playing the guitar. I built this portfolio site to try out a few new things, and build upon my knowedge of Vue.js. I'm always keen to maintain best practices and discover new ways to write re-useable, DRY code.</p>
          <p>I currently work as a front-end developer on the .NET team at CTI Digital, in Manchester.</p>
        </div>
        <div class="col-lg-3 mt-4 py-5">
          <img class="w-100" src="~/assets/images/profile_photo.jpg" />
        </div>
      </div>
    </section>
    <section class="bg-secondary panoramic" aria-label="contact details">
      <div class="container">
        <div class="row">
          <div class="mt-4 py-5">
            <h2 class="text-uppercase">Projects</h2>
            <div class="project-showcase">
              <showcase></showcase>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Showcase from '~/components/organisms/Showcase/Showcase.vue'
export default {
  layout: 'default',
  name: 'Home',
  components: {
    Showcase,
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/css/custom/global.scss';
@import '~/assets/css/custom/components/pageSection.scss';
</style>

