<script>
  export let name;
  export let disabled;
</script>

<div class="field">
  <p class="control">
    <input
      {disabled}
      type="text"
      class="input is-primary"
      {name}
      placeholder={name}
      on:change
    />
  </p>
</div>

<style>
</style>
