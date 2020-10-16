<script>
  import { onMount } from 'svelte'
  import Image from './components/Image'

  let images = []
  let loading = true

  const hitCatApi = (limit = 6) => {
    const path = `https://api.thecatapi.com/v1/images/search?limit=${limit}`
    const apiKey = `&api_key=${process.env.CAT_API_KEY}`
    return fetch(`${path}${apiKey}`)
      .then((response) => response.json())
      .catch((err) => [])
  }

  onMount(async () => {
    images = await hitCatApi()
    loading = false
  })

  const getNewCat = async ({detail}) => {
    const [newCat] = await hitCatApi(1)
    const newImages = images
    newImages.splice(detail, 1, newCat)
    images = newImages
  }
 </script>

{#if loading}
  <div class="flex h-screen">
    <img class="m-auto rounded-full" src="https://media1.tenor.com/images/2900121f5d66061f8a5d8d34c41d4454/tenor.gif" loop=infinite/>            
  </div>
{:else}
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
  {#if images.length}
  {#each images as image, index}
    <Image {image} {index} on:getNewCat={getNewCat} />
  {/each}
  {/if}
  </div>
{/if}
