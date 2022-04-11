# Coding challenge: Drone Delivery

By Jason Holtzen

## Problem Specs

- Each drone can carry a specific weight
- Each drone can make multiple deliveries before returning home to pick up additional deliveries
- Fewest number of trips are needed, due to cost
- Solution should include inputs for drone name/capacity and location name/weight
- Highlight most efficient trip for each drone to make on each trip.

### Non-factors

- Time and distance to dropoff
- Package size
- Variable trip costs per drone
- Max number of drones is 100

### Assumptions made

- The optimal solution, given the specs, would be to have only the largest capacity drone make all the deliveries, as it would always be the most efficient.  I assumed that the solution was not that simple as a delivery service would not just let packages sit there if they had a way to deliver them.
- I also assumed that, if a drone had capacity, it should be given a delivery on each trip.

## Solution

- Drone data is written to the drone store, created in `/src/stores/drones.js`
- Location/package data is written to the location store, created in `/src/stores/locations.js`
- Trip/delivery data is calculated by taking the location and drone stores, then creating a derived store (fleet), created in `/src/stores/solution.js`.  Note: solution.js was used to more easily be able to identify the core logic for the exercise (not because it was a good name).

### Running the project

```bash
npm install
npm run dev
```
