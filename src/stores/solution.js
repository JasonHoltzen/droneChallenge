import { derived } from "svelte/store"; 
import { locations } from "./locations";
import { drones } from "./drones";
import {errors} from "./errors";

// Calculate the highest weighted trip under capacity
const bestTrip = (locations, capacity) => {
  let highest = [];
  let highestVal = 0

  function* genSubsets(items, offset = 0) {
    while(offset < items.length) {
      //prevent pairing with self
      let item = items[offset++];
      //run against remaining items
      for(let subset of genSubsets(items, offset)) {
        subset.push(item);
        yield subset;
      }
    }
    yield []
  }

  // Loop through possible trip sets and find the
  // highest total weight, then return the
  // corresponding trip set.
  for(let subset of genSubsets(locations)) {
    let subTotal = subset.reduceRight((acc, s) => {return acc + s.weight}, 0);
    if(subTotal > highestVal && subTotal <= capacity ) {
      highestVal = subTotal;
      highest = subset;
    }
  }
  return highest;
}

// Get optimal deliveries for each drone, given
// remaining deliveries.
const deliveries = (drones, locations) => {
  //JSON.parse used only for the sake of simplicity.
  //There are libraries and more performant methods
  //to obtain a structured clone.  I did not want to
  //clutter the solution by adding additional libraries
  //or code which I felt distracted from the objective.
  let remaining = JSON.parse(JSON.stringify(locations));
  let droneFleet = JSON.parse(JSON.stringify(drones));

  // While we still have packages, get a drone and
  // it's optimal load.
  if(!remaining.length > 0 || !droneFleet.length > 0) {
    return []
  }

  while (remaining.length > 0) {
    let isFoundThisRound = false;

    // make sure we have drones
    if(droneFleet.length <= 0) {
      return [drones];
    }

    droneFleet.forEach(drone => {
      if (locations.length <= 0)      {
        return droneFleet;
      } else {
        let deliveries = bestTrip(remaining, drone.maxWeight);

        // make sure we have a place to push our trips to
        if(drone.trips === undefined) drone.trips = [];

        // make sure we aren't assigning empty deliveries
        // if current drone couldn't handle the weight
        // and adding deliveries to drone
        if(deliveries.length > 0) {
          let formattedTrip = {number: drone.trips.length + 1, deliveries}
          drone.trips.push(formattedTrip);
          isFoundThisRound = true;
        }

          remaining = remaining.filter(loc => !deliveries.includes(loc));
      }
    });

    // Would want some legit error handling here,
    // fully implemented, validation wouldn't even
    // allow it to get this far, and a real human
    // would be notified in some way.
    if(!isFoundThisRound) {
      remaining.forEach(p => errors.add(p));
      remaining.length = 0;
    } else {
      errors.clear();
    }
  }
  return droneFleet;
}

export const fleet = derived(
  [drones, locations], ([$drones, $locations]) => {
    return deliveries($drones, $locations);
  }
)