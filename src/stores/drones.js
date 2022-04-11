
import {writable} from 'svelte/store';

const defaultVal = [
  { name: "R2-D2", maxWeight: "15" },
  { name: "C3PO", maxWeight: "6" },
  { name: "A15AUC3", maxWeight: "26"}
];

const createDroneStore = () => {
  const {subscribe, set, update} = writable(defaultVal);

  return {
    subscribe,
    set,
    update,
    add: (drone) => update(n => [...n, drone]),
    remove: (droneName) => update(n => n.filter(d => droneName !== d.name))
  }
}

export const drones = createDroneStore();