<template>
  <div>
    <showcase prefix="software" :slug="slug" :posts="posts" />
  </div>
</template>

<script>
import Showcase from '~/components/organisms/Showcase/Showcase.vue'
export default {
  layout: 'default',
  name: 'WebDevelopment',
  components: {
    Showcase,
  },
  props: ['slug'],
  async asyncData() {
    const resolve = require.context('~/posts/', true, /\.md$/)
    const imports = resolve
      .keys()
      .map((key) => {
        const [, slug] = key.match(/\/(.+)\.md$/)
        return Object.assign(resolve(key), { slug })
      })
      .filter((post) => post.attributes.category === 'software')
    return {
      posts: imports,
    }
  },
}
</script>
