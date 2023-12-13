function lylysHomework(arr){
    //swap the array destructuring 
    let my_array =[];
    [my_array[0],my_array[1]] = [my_array[1],my_array[0]];

    //swap the array 
    const homework2 = (array,index1,index2) => {
    array[index1];
    array[index1] = array[index2];
    array[2] = homework;
    }
    //swap with the splice method
    let myArray =[];
    myArray[0]=myArray.split(1,1,myArray[0])[0];

    //return the minimum number to swaps that arr

    let sort = arr.sort((a,b) => a - b);

    for(let i = 0; i<sort.length; i++){
        sort[i];
        //Math.mi(sort[i])
        //Math.min(...sort);



    }

    // took 2 swaps to make the array beautiful


    //solution1 
    let array = [];
    for(let i = 0; i<arr.length; i++){
        array.push[[arr[i],i]];
    }
    array = sort((a,b)=> a[0]-b[0])

    let homework = new Array(arr.length);

    for(let i = 0; i<arr.length; i++){
        homework[i] =false;

    }
    let ans = 0;

    for(let i = 0; i<arr.length; i++){
        if(homework[i] || array[i][1] ===i){
            continues;
        }
        let cycle_size = 0;
        let j = i;
        while(!homework[j]){
            homework[j] = true;
            j = array[j][1];
            cycle_size++
        }
        if(cycle_size > 0){
            ans += (cycle_size-1);
        }
    }
return ans;



}
