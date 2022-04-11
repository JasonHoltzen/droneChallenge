import {writable} from 'svelte/store';

let defaultVal = [];

const createErrorStore = () => {
  const {set, subscribe, update} = writable(defaultVal);
  return {
    subscribe,
    set,
    add: (err) => update(n => {
      n.push(err);
      return n;
    }),
    clear: () => set([])
  }
}

export const errors = createErrorStore();