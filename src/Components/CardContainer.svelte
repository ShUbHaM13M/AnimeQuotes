<script>
  export let quotes;
  import Card from "./Card.svelte";
</script>

<div class="columns is-centered is-multiline">
  {#each quotes as quote, index}
    <div class="column is-5">
      <Card content={quote} />
    </div>
  {/each}
</div>

<style></style>
