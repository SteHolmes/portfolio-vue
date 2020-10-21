<!-- Progress: currently working on adding ExperienceListItems to this ExperienceList component using the markdown method. Config
should now be set up. Just need to check existing configuration used in PostCard component to pull through markdown data -->
<template>
  <div :class="`pb-0`">
    <div class="owls-2">
      <experience-listing-item
        v-for="item in items"
        v-bind:key="item.slug"
        :prefix="prefix"
        :item="item"
      ></experience-listing-item>
    </div>
  </div>
</template>

<script>
import ExperienceListingItem from '~/components/molecules/ListingItems/ExperienceListingItem.vue'
export default {
  layout: 'default',
  name: 'ExperienceList',
  components: {
    ExperienceListingItem,
  },
  props: {
    prefix: String,
    slug: String,
    items: Array,
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

<style scoped>
.container {
  margin-top: 100px;
  padding-bottom: 100px;
}
</style>
