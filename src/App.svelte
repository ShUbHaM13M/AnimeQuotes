<script>
  import Input from "./Input.svelte";
  import Button from "./Button.svelte";
  import CardContainer from "./CardContainer.svelte";

  let animeName = "";
  let characterName = "";
  const rootUrl = "https://animechanapi.xyz/api/quotes";

  let quotes = [];
  let isFetching = false;

  const setAnimeName = (value) => {
    animeName = value;
  };

  const setCharacterName = (value) => {
    characterName = value;
  };

  const handleSearch = () => {
    fetchQuotes();
  };

  const fetchQuotes = async () => {
    isFetching = true;
    let query = "";
    if (animeName !== "") query = `?anime=${animeName}`;
    else if (characterName !== "") query = `?char=${characterName}`;

    const searchUrl = `${rootUrl}${query}`;

    try {
      const res = await fetch(searchUrl);
      const data = await res.json();
      quotes = data.data;
    } catch (err) {
      console.log(err);
    }

    isFetching = false;
  };
</script>

<main class="section container">
  <h1 class="title has-text-centered">Anime Quotes</h1>
  <div class="columns is-centered mt-4">
    <div class="column is-3">
      <Input
        disabled={characterName !== "" ? true : false}
        name="Enter Anime name"
        onChange={setAnimeName}
      />
    </div>
    <div class="column is-3">
      <Input
        disabled={animeName !== "" ? true : false}
        name="Enter Character name"
        onChange={setCharacterName}
      />
    </div>
    <div class="column is-1">
      <Button isLoading={isFetching} name="Search" onClick={handleSearch} />
    </div>
  </div>
  <div class="section has-text-centered pt-0">
    <button
      class={isFetching
        ? "button is-primary inverted is-loading"
        : "button is-primary inverted"}
      on:click={handleSearch}>Generate Random</button
    >
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
