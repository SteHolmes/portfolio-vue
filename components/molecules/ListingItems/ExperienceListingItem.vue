<template>
  <div class="row no-gutters text-dark bg-light p-4 rounded">
    <div class="col-lg-9 pl-2">
      <h4 :class="`text-${ct}`">
        {{ item.attributes.title }}
      </h4>
      <p class="description mt-3">{{ item.attributes.description }}</p>
    </div>
    <div class="col-lg-3 mt-0 border-l border-light">
      <h6>Key skills:</h6>
      <span
        v-for="tag in tags"
        v-if="tags.length > 0"
        :class="`badge badge-pill badge-primary mr-1 px-3 py-2`"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'ExperienceListingItem',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    item: Object,
    // eslint-disable-next-line vue/require-default-prop
    prefix: String,
    // eslint-disable-next-line vue/require-default-prop
    ct: String,
  },
  computed: {
    tags() {
      return this.item.attributes.tags
        ? this.item.attributes.tags.split(',')
        : []
    },
  },
}
</script>
