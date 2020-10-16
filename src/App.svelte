<script>
  import { onMount } from 'svelte'
  import Image from './components/Image'

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
  <Image {image}/>
  {/each}
</div>


