<script>
  export let name;
  export let isLoading;
</script>

<button
  on:click
  class="button is-primary is-outlined"
  class:is-loading={isLoading === true}
>
  <span class="icon">
    <i class="material-icons"> search </i>
  </span>
  <span>{name}</span>
</button>

<style>
</style>
