<template>
  <div>
    <card-grid prefix="software" :slug="slug" :posts="posts" />
  </div>
</template>

<script>
import CardGrid from '~/components/organisms/CardGrid/CardGrid.vue'
export default {
  layout: 'default',
  name: 'WebDevelopment',
  components: {
    CardGrid,
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
