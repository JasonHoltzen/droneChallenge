
import {writable} from 'svelte/store';

const defaultVal = [
  { name: "loc 3", weight: 3 },
  { name: "badpkg", weight: 300},
  { name: "loc 5", weight: 8 },
  { name: "loc 2", weight: 2 },
  { name: "loc 6", weight: 13 },
  { name: "loc 7", weight: 21 },
  { name: "loc 4", weight: 5 },
  { name: "loc 1", weight: 1 },
];

const createLocationsStore = () => {
  const {subscribe, set, update} = writable(defaultVal);

  return {
    subscribe,
    set,
    update,
    add: (loc) => update(n => [...n, loc]),
    remove: (locName) => update(n => n.filter(l => locName !== l.name))
  }
}

export const locations = createLocationsStore();