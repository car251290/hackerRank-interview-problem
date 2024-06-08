
'use strict';
`https://www.hackerrank.com/challenges/flatland-space-stations/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign`
function flatlandSpaceStations(n, c) {
   // The distance to the nearest space station for each city is listed below:has distance , as it contains a space station.
   // has distance  to the space station in .
   // has distance  to the space stations in  and .
   // has distance  to the space station in .
   // has distance , as it contains a space station.
   

   // The maximum distance is  unit.
   for(let i = 0; i<n.length; i++){
      let max = 0;
      for(let j= 0; j<c.length; j++ ){
         let distance = Math.abs(i -c[j]);
         if(distance > max){
            max = distance;
         }
         console.log(max);
      }
   }

}





