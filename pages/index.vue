<template>
  <div class="home text-white">
    <div class="page-section page-section--hero page-section--bg-sky">
      <div class="page-section__gradient-overlay page-section__gradient-overlay--dark"></div>
      <div class="container page-section__wrapper">
        <h1 class="display-4">Steve Holmes <br> Front-end Web Developer</h1>
        <p class="lead">
          Currently working at CTI Digital in
          Manchester.
        </p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" preserveAspectRatio="none" viewBox="0 0 1680 40" class="svg__horizon-curve" style="bottom: -1px;"><path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#061535"></path></svg>

    </div>

    <section class="page-section container" aria-label="introduction">
      <div class="row">
        <div class="col-lg-9 mt-4">
          <h2 class="border-bottom border-light text-light-blue">
            <i class="fas fa-user mr-3 text-white"></i>A bit about me...
          </h2>
          <p>
            Hi, my name is Steve Holmes and I'm a creative front end developer
            living in Marple, Stockport. I love problem solving, coding,
            learning new skills, hiking, cycling and playing the guitar and piano. I built
            this portfolio site to try out a few new things, and build upon my
            knowedge of Vue.js. I'm always keen to maintain best practices and
            discover new ways to write re-useable, DRY code.
          </p>
          <p>
            I currently work as a front-end developer on the .NET team at CTI
            Digital, in Manchester.
          </p>
        </div>
        <div class="col-lg-3 mt-4">
          <img
            class="w-100 shadow rounded"
            src="~/assets/images/profile_photo.jpg"
          />
        </div>
      </div>
    </section>

    <section class="page-section page-section--bg-asphalt u-panoramic" aria-label="Skills">
    <div class="container my-auto">
      <div class="page-section__content-wrapper">
        <div class="row">
          <div class="col-lg-12 mx-auto">
            <h2>Skills and expertise</h2>
          </div>
        </div>
        <div class="page-section__body-wrapper">
        <div class="row">
          <div class="col-lg-6 col-md-4 mx-auto">
            <h3>Front End Development</h3>
          </div>
          <div class="col-lg-3 col-md-4 mx-auto">
              <h4>Skills</h4>
              <ul>
                <li>HTML5 and CSS3</li>
                <li>Javascript and jQuery</li>
                <li>Bootstrap</li>
                <li>Tailwind and utility first development</li>
                <li>APIs</li>
                <li>Umbraco development</li>
                <li>Razor</li>
              </ul>
          </div>
          <div class="col-lg-3 col-md-4 mx-auto">
              <h4>Tools</h4>
              <ul>
                <li>SCSS</li>
                <li>Git and Github</li>
                <li>Webpack</li>
                <li>NPM</li>
                <li>Gulp</li>
              </ul>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-lg-6 col-md-4 mx-auto">
            <h3>Design</h3>
          </div>
          <div class="col-lg-3 col-md-4 mx-auto">
            <h4>Skills</h4>
            <ul>
              <li>Responsive Web Design</li>
              <li>Digital Illustration</li>
              <li>Animation</li>
              <li>Working with Brand Guidelines and Corporate Identity</li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-4 mx-auto">
            <h4>Tools</h4>
            <ul>
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>GIMP</li>
              <li>Inkscape</li>
              <li>CSS3 Keyframes</li>
              <li>GSAP</li>
            </ul>
          </div>
        </div>
        </div>
        </div>
      </div>
    </section>

    <section class="page-section page-section--bg-asphalt u-panoramic" aria-label="Projects">
      <div class="container py-5">
        <h2 class="text-light-blue"><i class="fas fa-eye mr-3 text-white"></i>Interesting stuff</h2>
        <showcase></showcase>
      </div>
    </section>

    <section class="page-section page-section--bg-asphalt u-panoramic" aria-label="Experience">
      <div class="container py-5">
        <h2 class="text-light-blue">
          <i class="fas fa-laptop-code mr-3 text-white"></i>Experience
        </h2>
        <experience-list :slug="slug" :items="items" />
      </div>
    </section>

    <section class="page-section page-section--bg-asphalt u-panoramic" aria-label="Contact details">
      <div class="container py-5">
        <h2 class="text-light-blue">
          <i class="fas fa-laptop-code mr-3 text-white"></i>Get in touch
        </h2>
        <p>Contact form</p>
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

