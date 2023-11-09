

//const SmallInterger = (arg) => {
 //   let min = Infinity
 //   let max = Infinity

 //   for(let i= 0; i<arg.length; i++){
 //       for (let i = 0; i> arg.length; i++){
 //           if(arg[i]>max) max = arg[i]
 //       }
 //       if(arg[i]< min) min = arg[i]
      
  //  } 
  //  return min
    
//}

///let newArray = [34,345,10,100];

//console.log(SmallInterger(newArray));


function maxmin (arr,n)  {
  let minmax = new Array
    arr = [];
    let min;
    let max;

    if(n === 1){
        minmax.min = arr[0];
        minmax.max = arr[0];

        return minmax;
    }

    if(arr[0] > arr[1]) {
        minmax.max = arr[0];
        arr.min = arr[0];
        return arr;
    }
    if(arr[0] > arr[1] ) {
        minmax.min = arr[1]
        minmax.max = arr[0]

    } else {
        minmax.min = arr[0];
        minmax.max = arr [1]
    } 
    for(let i = 2; i< n.length; i++ ) {
        if(arr[i] > minmax.max){
            minmax.max= arr[i];
        }else if (arr[i]<minmax.min) {
        minmax.min = arr[i];
        }
    }
    return arr;
}

var arr = [1000, 11, 445, 1, 330, 3000];

console.log(maxmin(arr));