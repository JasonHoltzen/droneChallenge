<script>
  import { tick } from 'svelte';
  import { slide } from 'svelte/transition';
  import Button from './Button.svelte';
  import { drones } from '../stores/drones';

  let name = "";
  let maxWeight = "";

  const addDrone = async () => {
    drones.add({name, maxWeight});
    await tick();
    name = "";
    maxWeight = "";
  }

  const removeDrone = (del_name) => {
    drones.remove(del_name);
  }
</script>
<div class="container">
  <h3>Drones</h3>
  <ul class="colLabels">
    <li>Drone Name</li>
    <li>Max Weight</li>
  </ul>
  <ul>
    <li>
      <input bind:value={name} />
      <input bind:value={maxWeight} />
      <Button class="square" text="+" click={addDrone}/>
    </li>
    {#each $drones as drone}
    <li transition:slide>
      <div>{drone.name}</div>
      <div>{drone.maxWeight}</div>
      <Button class="square" text="-" click={() => removeDrone(drone.name)}/>
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