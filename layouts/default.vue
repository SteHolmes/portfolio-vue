<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </nav>
    <main>
      <div>
        <router-view></router-view>
      </div>
    </main>
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

main {
  margin: 0 auto;
}
</style>
