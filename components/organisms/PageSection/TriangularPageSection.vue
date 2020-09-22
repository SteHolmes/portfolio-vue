<template>
  <div class="triangular-page-section">
    <div :class="['triangular-page-section__peak', bgColourClass]"></div>
    <div :class="['triangular-page-section__wrapper panoramic', bgColourClass]">
      <div class="container triangular-page-section__content">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TriangularPageSection',
  props: {
    bgColourClass: String,
  },
}
</script>

<style scoped lang="scss">
@import '~/assets/css/global.scss';
@import '~/assets/css/components/pageSection.scss';

.triangular-page-section {
  &__wrapper {
    position: relative;
    padding-top: 0;
  }

  &__content {
    position: relative;
    margin: 0 auto;
    padding-top: 4rem;
    padding-bottom: 4rem;
    z-index: 1;
  }

  &__peak {
    background-color: transparent !important;
    position: relative;
    width: 100%;
    height: 0;
    top: -4.5rem;
    transform: scale(-1);

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      width: 0;
      height: 0;
      border-left: 50vw solid transparent;
      border-right: 50vw solid transparent;
      border-top: 4.5rem solid;
    }
  }
}
</style>
