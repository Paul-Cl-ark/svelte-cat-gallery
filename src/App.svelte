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

<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
  {#each images as image}
  <img src="{image.url}" alt="A nice cat" />
  {/each}
</div>

<style>
  img {
    width: 100%;
    height: auto;
    max-height: 50vh;
    object-fit: scale-down;
    padding: 1em;
  }
</style>
