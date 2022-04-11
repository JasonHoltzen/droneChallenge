<script>
  import { fleet } from '../stores/solution';
</script>

<div class="container">
  <h3>Trips</h3>
  <ul class="drones">
    {#each $fleet as drone}
      <li>
        <h4>{drone.name}</h4>
        {#if drone.trips.length > 0}
          <ul class="trips">
            {#each drone.trips as trip}
              <li>
                Trip {trip.number}
                <ul class="deliveries">
                  {#each trip.deliveries as d}
                    <li>
                      {d.name}
                      <small>({d.weight})</small>
                    </li>
                  {/each}
                </ul>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</div>

<style>
  .container > ul {
    margin-bottom: 1em;
  }
  ul {
    gap: .5em;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin: 0 0 0 .5em;
    padding: 0;
    border-radius: .25em;
  }

  .drones {
    display: flex;
    flex-flow: column nowrap;
    gap: .25em;
  }

  .drones > li {
    margin: 0;padding: 0;
  }

  .trips {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5em;
  }

  .trips > li {
    background: #fff;
    border: 1px solid #222;
    padding: .5em;
  }

  .deliveries {
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
  }
  .deliveries > li {
    background: #ddd;
    border: 1px solid #fff;
    padding: .25em .5em
  }
</style>