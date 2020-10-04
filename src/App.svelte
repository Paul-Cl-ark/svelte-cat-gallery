<script>
  import { onMount } from 'svelte'

  let images = []

  onMount(() => {
    const path = 'https://api.thecatapi.com/v1/images/search?limit=6'
    const apiKey = `&api_key=${process.env.CAT_API_KEY}`
    fetch(`${path}${apiKey}`)
      .then((response) => response.json())
      .then((response) => (images = response))
      .catch((err) => {})
  })
</script>

<div class="images">
  {#each images as image}
  <img src="{image.url}" alt="A nice cat" />
  {/each}
</div>

<style>
  .images {
    display: grid;
    grid-gap: 5vh;
    grid-template-columns: repeat(3, 1fr);
  }

  img {
    width: 100%;
    height: auto;
    max-height: 46vh;
    object-fit: scale-down;
  }
</style>
