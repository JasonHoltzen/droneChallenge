<script>
  import { tick } from 'svelte';
  import { slide } from 'svelte/transition';
  import Button from './Button.svelte';
  import { locations } from '../stores/locations';

  let name = "";
  let weight = "";

  const addLocation = async () => {
    locations.add({name, weight});
    await tick();
    name = "";
    weight = "";
  }

  const removeLocation = (del_name) => {
    locations.remove(del_name);
  }
</script>
<div class="container">
  <h3>Locations</h3>
  <ul class="colLabels">
    <li>Location Name</li>
    <li>Total Weight</li>
  </ul>
  <ul>
    <li>
      <input bind:value={name} />
      <input bind:value={weight} />
      <Button class="square" text="+" click={addLocation}/>
    </li>
    {#each $locations as location}
    <li transition:slide>
      <div>{location.name}</div>
      <div>{location.weight}</div>
      <Button class="square" text="-" click={() => removeLocation(location.name)}/>
    </li>
    {/each}
  </ul>
</div>

<style>
  ul {
    display: flex;
    flex-flow: column nowrap;
    padding: 0;
    width: 100%;
  }
  li, .colLabels {
    display: grid;
    grid-template-columns: 43% 43% 1fr;
    gap: 5px;
    list-style-type: none;
    margin: 0;
  }
</style>