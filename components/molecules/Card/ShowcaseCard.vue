<template>
  <div class="item bg-light rounded">
    <img
      class="w-100"
      :src="data.image"
    />
    <a class="icon" href="/" target="_blank">
      <i class="fas fa-eye"></i>
    </a>
    <div class="proj-text text-dark py-3">
      <h5 class="proj-title text-uppercase">{{ data.heading }}</h5>
      <p class="text-left proj-desc pb-3">
        <span class="d-block">{{ data.subheading }}</span>
        {{ data.summary }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'ShowcaseCard',
  props: [
    "data"
  ]
}
</script>
