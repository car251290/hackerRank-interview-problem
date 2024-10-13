
`https://www.hackerrank.com/challenges/minimum-swaps-2/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays`
function mininumSwapts(arr: number[]) {
    let swapt = 0;
    for(let i =0; i< arr.length; i++) {
        if(arr[i] !== i+1){
            let t = i;
            while(arr[t] !== i+1){
                let count = t++;
                //let swapt it
                let temp = arr[count];
                arr[count] = arr[temp];
                arr[temp] = temp;
            }
        }
       
    }
    return swapt;
}