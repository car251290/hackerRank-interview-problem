function increment(){
    let arr = [3,6,7,11];
    // to increment it 4 times with the time h = 8 and k = 4
    // he has to eat each pibe on the minimum time 
    arr = Math.min(arr);

    console.log(arr);
    k = 4;
    h =8

    arr.forEach((item) => {
        for(let i = 2; i< item.length; i++){
            incre = item ++
            if(incre <= h){
                console.log("he has time to eat the pibes")
            }

        }
     //   incre = item + k;
     //   if(incre <= h){
     //       console.log("he has time to eat all the bananas")

       // } else {
       //     console.log("he did not have time to eat the pibe");
       // }
        //console.log(incre);
    });
}

increment();

function decrement(){
    let arr =  [100,200,300,400,500,600,700,800,900,1000];
    arr.forEach((item) => {
        decre = item -1;
        //console.log(decre);
    });
   


};
decrement();

