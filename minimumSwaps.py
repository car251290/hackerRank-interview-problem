def minimumSwaps(arr):
    #swap the array min 2 times
    #return the number of swaps
 arr = [x - 1 for x in arr]
 swaps = 0
 i=0
 while i< len(arr):
    if arr[i] != i:
        temp = arr[i]
        arr[i], arr[temp] = arr[temp], arr[i]
        swaps += 1
    else:
        i += 1
 
 return swaps       