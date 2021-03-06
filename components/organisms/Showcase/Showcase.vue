<template>
  <section aria-label="showcase" class="project-showcase">
    <div class="row">
      <div class="col-lg-4" v-for="(item, index) in data.items" :key="index">
        <showcase-card
          :data="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ShowcaseCard from '~/components/molecules/Card/ShowcaseCard.vue'
import Interests from '~/json/interests.json'
export default {
  layout: 'default',
  name: 'Showcase',
  components: {
    ShowcaseCard,
  },
  data(){
    return{
      data: Interests
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 100px;
  padding-bottom: 100px;
}
</style>
