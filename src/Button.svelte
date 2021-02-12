<script>
  export let name;
  export let onClick;
  export let isLoading;

  let className =
    isLoading === true
      ? "button is-primary is-outlined is-loading"
      : "button is-primary is-outlined";
</script>

<button on:click={onClick} class={className}>
  <span class="icon">
    <i class="material-icons"> search </i>
  </span>
  <span>{name}</span>
</button>

<style>
</style>
