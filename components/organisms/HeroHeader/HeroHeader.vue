<template>
  <div class="hero-header panoramic">
    <div class="container hero-header__text-wrapper">
      <h1 class="hero-header__heading"></h1>
      <p class="hero-header__subheading"></p>
    </div>
    <div class="hero-header__bg-image"></div>
  </div>
</template>

<script>
export default {
  name: 'HeroHeader',
  data() {},
}
</script>

<style scoped lang="scss">
@import '~/assets/css/global.scss';

.hero-header {
  display: flex;
  align-items: center;
  height: 100vh;
  color: white;
  background-color: $dark-blue;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &__text-wrapper {
    z-index: 1;
  }

  &__heading {
    max-width: 20ch;
  }

  &__subheading {
    font-size: 1.5rem;
  }

  &__bg-image {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}
</style>
