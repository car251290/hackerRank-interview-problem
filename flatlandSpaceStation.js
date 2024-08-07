
'use strict';
`https://www.hackerrank.com/challenges/flatland-space-stations/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign`
function flatlandSpaceStations(n, c) {
   // The distance to the nearest space station for each city is listed below:has distance , as it contains a space station.
   // has distance  to the space station in .
   // has distance  to the space stations in  and .
   // has distance  to the space station in .
   // has distance , as it contains a space station.
   

   // The maximum distance is  unit.
   
   // The distance to the nearest space station for each city is listed below:
// Sort the array of space stations to ensure they are in ascending order
   c.sort((a,b) => a-b);
   let maxDistance = 0;
   let distance = 0;
   // Distance from the first city to the first space station
   const firstCity = c[0];

   maxDistance = Math.max(firstCity,maxDistance);
   // Calculate the maximum distance between consecutive space stations
   // check the maximum distance between the first city and the first space
   for(const city of c){
      const midCity = Math.floor((city - distance)/2);
      maxDistance = Math.max(maxDistance,midCity);
      distance = city;
   }
    // Distance from the last space station to the last city
   // check the last city distance
   const lastCityDistance = n - distance -1;
   maxDistance = Math.max(maxDistance,lastCityDistance);
   return maxDistance;

}
