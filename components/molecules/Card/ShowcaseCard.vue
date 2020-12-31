<template>
  <div class="col-lg-4">
    <div class="item bg-light rounded">
      <img
        class="w-100"
        src="https://images.unsplash.com/photo-1464061884326-64f6ebd57f83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
      <a class="icon" href="/" target="_blank">
        <i class="fas fa-eye"></i>
      </a>
      <div class="proj-text text-dark py-3">
        <h5 class="proj-title text-uppercase">Card title</h5>
        <p class="text-left proj-desc pb-3">
          <span class="d-block">Tagline text or summary</span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
        <a class="source" href="https://github.com/SteHolmes/gif-channel">View source code</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'ShowcaseCard',
}
</script>
