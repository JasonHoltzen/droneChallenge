<script>
  import { errors } from '../stores/errors.js';
  import { fade } from 'svelte/transition';
</script>

{#if $errors.length > 0}
<div class="container">
  <h3>Errors</h3>
    <p transition:fade>
      The following packages do not have a large enough drone to carry them:
    </p>
      <ul>
        {#each $errors as err}
          <li>location: {err.name} - weight: {err.weight}</li>
        {/each}
      </ul>
    </div>
  {/if}

<style>
  p {
    max-width: 100%;
  }
</style>