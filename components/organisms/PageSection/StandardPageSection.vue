<template>
  <div :class="['page-section panoramic', bgColourClass]">
    <div class="container">
      <p>Placeholder text</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageSection',
  props: {
    bgColourClass: String,
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/css/global.scss';
@import '~/assets/css/components/pageSection.scss';
.page-section {
  padding: 4rem 0;
}
</style>
