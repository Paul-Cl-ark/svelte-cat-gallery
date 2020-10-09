<script>
  export let image
</script>

<div class="wrapper">
  <div style={
    `background: url(${image.url});
    background-size: cover;
    background-position: center;
    min-height: 100%;`
  }>
    hello
  </div>
</div>

<style>
  .wrapper {
    max-height: 50vh;
    min-height: 50vh;
    padding: 1em;
  }
</style>
