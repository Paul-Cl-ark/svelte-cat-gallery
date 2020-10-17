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

  onMount(() => getSixCats())

  const getSixCats = (async () => {
    images = await hitCatApi(6)
    loading = false
  })

  const getNewCat = async ({detail}) => {
    const [newCat] = await hitCatApi(1)
    const newImages = images
    newImages.splice(detail, 1, newCat)
    images = newImages
  }
</script>

<style>
  button {
    transition: all .3s ease-in-out; 
  }

  button:hover { 
    transform: scale(1.03); 
  }
</style>

{#if loading}
  <div class="flex h-screen bg-gray-100">
    <img class="m-auto rounded-full" src="https://media1.tenor.com/images/2900121f5d66061f8a5d8d34c41d4454/tenor.gif" loop=infinite/>            
  </div>
{:else}
  <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 bg-gray-100">
  {#if images.length}
  {#each images as image, index}
    <Image {image} {index} on:getNewCat={getNewCat} />
  {/each}
  {:else}
    <div class="flex h-screen w-screen">
      <div class="m-auto">
        <p class="font-mono">AWWW SHUCKS... NO KATS 4 U</p>
        <p>
          <button
            on:click={getSixCats}
            class="m-3 bg-pink-400 hover:bg-pink-500 text-white py-2 px-4 rounded font-mono">
            PLZ I CAN TRY AGAIN?!?
          </button>
        </p>
      </div>
    </div>
  {/if}
  </div>
{/if}
