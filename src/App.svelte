<script>
  import { onMount } from 'svelte'

  let images = []

  onMount(() => {
    const path = 'https://api.thecatapi.com/v1/images/search?limit=5'
    const apiKey = `&api_key=${process.env.CAT_API_KEY}`
    fetch(`${path}${apiKey}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        images = response
      })
      .catch((err) => [])
  })
</script>

<div>
  <p>Hello World</p>
  {#each images as image}
  <img src="{image.url}" alt="A nice cat" />
  {/each}
</div>
