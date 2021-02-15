<script>
  import Input from "./Components/Input.svelte";
  import Button from "./Components/Button.svelte";
  import CardContainer from "./Components/CardContainer.svelte";
  import requestApi from "./utils/request";

  let animeName = "";
  let characterName = "";

  let quotes = [];
  let isFetching = false;

  const handleSearch = () => {
    isFetching = true;
    fetchQuotes();
  };

  const fetchQuotes = async () => {
    let query = "";
    if (animeName !== "") query = `?anime=${animeName}`;
    else if (characterName !== "") query = `?char=${characterName}`;

    try {
      quotes = await requestApi(query);
      isFetching = false;
    } catch (err) {
      console.log(err);
    }
  };
</script>

<main class="section container">
  <h1 class="title has-text-centered">Anime Quotes</h1>
  <div class="columns is-centered mt-4">
    <div class="column is-3">
      <Input
        disabled={characterName !== "" ? true : false}
        name="Enter Anime name"
        on:change={(e) => (animeName = e.target.value)}
      />
    </div>
    <div class="column is-3">
      <Input
        disabled={animeName !== "" ? true : false}
        name="Enter Character name"
        on:change={(e) => (characterName = e.target.value)}
      />
    </div>
    <div class="column is-1">
      <Button isLoading={isFetching} name="Search" on:click={handleSearch} />
    </div>
  </div>
  <div class="section has-text-centered pt-0">
    <button
      class:is-loading={isFetching === true}
      class="button is-primary inverted"
      on:click={handleSearch}
    >
      Generate Random
    </button>
  </div>

  {#if quotes.length}
    <CardContainer {quotes} />
  {:else}
    <div class="section">
      <p class="has-text-centered has-text-primary">
        Generate Random or Search for an Anime or Character to see Quotes
      </p>
    </div>
  {/if}
</main>

<style>
</style>
