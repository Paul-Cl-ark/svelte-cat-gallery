<script>
  export let image
</script>

<div class="wrapper">
  <div
    class="relative" 
    style={
    `background: url(${image.url});
    background-size: cover;
    background-position: center;
    min-height: 100%;
    border-radius: 5px;`
  }
  >
    <button class="
      m-3 absolute right-0 bottom-0 bg-pink-400 hover:bg-pink-500 text-white 
      font-bold py-2 px-4 rounded"
    >
      CHANGE DIS WAN!!
    </button>
  </div>
</div>

<style>
  .wrapper {
    max-height: 50vh;
    min-height: 50vh;
    padding: 1em;
  }
</style>
