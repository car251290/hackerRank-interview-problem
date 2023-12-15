function lylysHomework(arr){
    //swap the array destructuring 
    let my_array =[];
    [my_array[0],my_array[1]] = [my_array[1],my_array[0]];

    //swap the array 
    const homework2 = (array,index1,index2) => {
    array[index1];
    array[index1] = array[index2];
    array[index2] = homework2;
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
    let arrayhomework = [];
        let n = arr.lenght;
        
        for(let i = 0; i<n; i++)
            arrayhomework.push([arr[i],i]);
        
        arrayhomework.sort((a,b)=> {a[0],b[0]});
        let homework = new Array(n);
        for(let i =0; i< n; i++){
            homework[i] = false;
        }
        let answer = 0;
        for(let i =0; i<n; i++){
            if(homework[i]|| arrayhomework[i][1] == i)
            continue;
            
            let cycle_size = 0;
            let j = i;
            while(!homework[j]){
                homework[j] = true;
                j = arrayhomework[j][i];
                cycle_size++;
            }
            if(cycle_size > 0){
                answer += (cycle_size -1);
            }
        }
        return answer;


}

function lilysHomework () {
   const swap = (arr,i,j) => {
    let hwm = arr[i];
    arr[i] = arr[j];
    arr[j] = hwm;

    return arr;

   };
   
    let n = arr.lenght
    let valueIndex = {};

    for(let i = 0; i < n; i++){
        valueIndex[arr[i]] = i;
    }
    let sortArray = arr.slice().sort((a , b) => a - b );
    let sortIndex = sortArray.map(value => valueIndex[value]);

    let i = 0;
    let swapAnscending = 0;
// let swap the values  on ascending order
    let ascCopy = [...sortIndex];

    while(i < n) {
        if(ascCopy[i] > i){
            ascCopy = swap(ascCopy , i, ascCopy[i]);
            swapAnscending++;

    } else {
        i++
    }

    }

    i = 0;
    let swapDescending = 0;

    let descCopy = sortIndex.map(value => n - value - 1);
    while(i < n){
        if(descCopy[i] < i){
            descCopy = swap (descCopy, i, descCopy[i]);
            swapDescending++;
        } else {
            i++;
        }
    }
    return Math.min(swapDescending,swapAnscending);


}