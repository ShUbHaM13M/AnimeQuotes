<script>
  export let content;
  import { fade } from "svelte/transition";
</script>

<div class="card" in:fade={{ duration: 500 }}>
  <div class="card-content">
    <p class="title is-4">{content.quote}</p>
    <p class="subtitle">{content.character}</p>
  </div>
  <div class="card-footer">
    <p class="card-footer-item">
      Anime: {content.anime}
    </p>
  </div>
</div>

<style>
  .card {
    height: 100%;
    display: flex;
    border: 1px solid hsl(141, 71%, 48%);
    flex-direction: column;
    justify-content: space-between !important;
  }
  .card-footer {
    border-top-color: hsl(141, 71%, 48%);
  }
</style>
