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

<div>
  {#each images as image}
  <img src="{image.url}" alt="A nice cat" />
  {/each}
</div>

<style>
  img {
    width: 300px;
    height: 300px;

    /*Scale down will take the necessary specified space that is 100px x 100px without stretching the image*/
    object-fit: scale-down;
  }
</style>
