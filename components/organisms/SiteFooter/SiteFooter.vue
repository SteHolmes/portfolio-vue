<template>
  <footer>
    <div class="container">
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
</template>

<script>
export default {
  layout: 'default',
  name: 'Footer',
  props: {
    prefix: String,
    slug: String,
    posts: Array,
  },
}
</script>

<style scoped>
.SiteFooter {
  padding: 100px;
  padding-bottom: 100px;
}
</style>