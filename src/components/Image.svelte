<script>
  export let image
  export let index
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  const getNewCat = () => dispatch('getNewCat', index)
</script>

<style>
  .wrapper {
    max-height: 50vh;
    min-height: 50vh;
    padding: 1em;
  }

  button {
    transition: all .3s ease-in-out; 
  }

  button:hover { 
    transform: scale(1.03); 
  }
</style>

<div class="wrapper">
  <div
    class="relative rounded-md bg-center min-h-full shadow-lg"
    style={`background: url(${image.url}); background-size: cover;`}
  >
    <button
      on:click={getNewCat}
      class="m-3 absolute right-0 bottom-0 bg-pink-400 hover:bg-pink-500 
      text-white py-2 px-4 rounded font-mono">
      CHANGE DIS JUAN!!
    </button>
  </div>
</div>
