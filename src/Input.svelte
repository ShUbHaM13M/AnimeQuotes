<script>
  export let name;
  export let onChange;
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
      on:change={(e) => onChange(e.target.value)}
    />
  </p>
</div>

<style>
</style>
