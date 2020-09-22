<template>
  <div class="skewed-page-section panoramic">
    <div class="container skewed-page-section__wrapper">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkewedPageSection',
}
</script>

<style scoped lang="scss">
@import '~/assets/css/global.scss';

.skewed-page-section {
  position: relative;
  padding: $skew-padding 0;
  background-color: transparent;
  color: $white;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    transform: skewY(-4deg);
    background-image: url(https://images.unsplash.com/photo-1589614435706-c363996e5b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: $dark-blue;
    transform: skewY(-4deg);
    opacity: 0.9;
  }

  &__wrapper {
    position: relative;
    margin: 0 auto;
    padding-top: 4rem;
    padding-bottom: 4rem;
    z-index: 1;
  }
}
</style>
