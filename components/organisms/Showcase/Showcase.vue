<template>
  <section aria-label="showcase" class="project-showcase">
    <div class="row">
      <showcase-card></showcase-card>
      <showcase-card></showcase-card>
      <showcase-card></showcase-card>
    </div>
  </section>
</template>

<script>
import ShowcaseCard from '~/components/molecules/Card/ShowcaseCard.vue'
export default {
  layout: 'default',
  name: 'Showcase',
  components: {
    ShowcaseCard,
  },
  props: {
    prefix: String,
    slug: String,
    posts: Array,
  },
}
</script>

<style scoped>
.container {
  margin-top: 100px;
  padding-bottom: 100px;
}
</style>
