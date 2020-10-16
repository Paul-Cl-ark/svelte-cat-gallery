<script>
  import { onMount } from 'svelte'
  import Image from './components/Image'

  let images = []

  const hitCatApi = (limit = 6) => {
    const path = `https://api.thecatapi.com/v1/images/search?limit=${limit}`
    const apiKey = `&api_key=${process.env.CAT_API_KEY}`
    return fetch(`${path}${apiKey}`)
      .then((response) => response.json())
      .catch((err) => [])
  }

  onMount(async () => images = await hitCatApi())

  const getNewCat = async ({detail}) => {
    const [newCat] = await hitCatApi(1)
    const newImages = images
    newImages.splice(detail, 1, newCat)
    images = newImages
  }
 </script>

<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
  {#each images as image, index}
    <Image {image} {index} on:getNewCat={getNewCat} />
  {/each}
</div>
