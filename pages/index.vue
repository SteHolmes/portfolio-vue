<template>
  <div class="home text-white">
    <div class="jumbotron jumbotron-fluid skewed-page-section">
      <div class="container skewed-page-section__wrapper text-center">
        <h1 class="display-4">Steve Holmes</h1>
        <p class="lead">
          Hi, I'm a front-end web developer currently working at CTI Digital in
          Manchester.
        </p>
      </div>
    </div>
    <section class="container" aria-label="introduction">
      <div class="row">
        <div class="col-lg-9 mt-4 py-5">
          <h2 class="border-bottom border-light text-light-blue">
            <i class="fas fa-user mr-3 text-white"></i>A bit about me...
          </h2>
          <p>
            Hi, my name is Steve Holmes and I'm a creative front end developer
            living in Marple, Stockport. I love problem solving, coding,
            learning new skills, hiking, cycling and playing the guitar. I built
            this portfolio site to try out a few new things, and build upon my
            knowedge of Vue.js. I'm always keen to maintain best practices and
            discover new ways to write re-useable, DRY code.
          </p>
          <p>
            I currently work as a front-end developer on the .NET team at CTI
            Digital, in Manchester.
          </p>
        </div>
        <div class="col-lg-3 mt-4 py-5">
          <img
            class="w-100 border 2 border-light"
            src="~/assets/images/profile_photo.jpg"
          />
        </div>
      </div>
    </section>
    <section class="bg-asphalt panoramic" aria-label="contact details">
      <div class="container py-5">
        <h2 class="text-white"><i class="fas fa-eye mr-3"></i>Projects</h2>
        <showcase></showcase>
      </div>
    </section>
    <section class="bg-asphalt panoramic" aria-label="contact details">
      <div class="container py-5">
        <h2 class="text-white">
          <i class="fas fa-laptop-code mr-3"></i>Experience
        </h2>
        <experience-list :slug="slug" :items="items" />
      </div>
    </section>
  </div>
</template>

<script>
import Showcase from '~/components/organisms/Showcase/Showcase.vue'
import ExperienceList from '~/components/organisms/ExperienceList/ExperienceList.vue'
export default {
  layout: 'default',
  name: 'Home',
  components: {
    Showcase,
    ExperienceList,
  },
  props: ['slug'],
  async asyncData() {
    const resolve = require.context('~/listings/', true, /\.md$/)
    const imports = resolve
      .keys()
      .map((key) => {
        const [, slug] = key.match(/\/(.+)\.md$/)
        return Object.assign(resolve(key), { slug })
      })
      .filter((item) => item.attributes.category == 'experience')
    return {
      items: imports,
    }
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/css/custom/global.scss';
@import '~/assets/css/custom/components/pageSection.scss';
</style>

