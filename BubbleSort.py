# steps: 
#1 defines a function bubbleSort
# 2 gets the length of the list using a variable N
# 3 start a forloop that runs the bubble sort algorith (n-1) times 
# 4 define a variable name it swap it will be use it to determine if a swap has ocurred
# 5 starts the inner loop that compares all the values in the list from the fist to the last one
# 6 uses the if statement to check if the value on the lest hand side is greater than the one on the immediate right side the swap
# 7 Assign the values of the list[j] to a temporal variable temp if the cordination evaluates to true
# 8 The value of the list [k+1] is assigned to the position of the list [k]
# 9 the value of the variable temp is assigned to possition the list [k+1]
# 10 the swap variable is assigned valie 1 to indecate that swap has taken place
# 11 the if statement has to be  == 0 if true break and return the list
# 12 make the arr = [21,6,9,1,33]
# 13 store the function bubblesort on a variable name it result.
# 14 print the result variable.


#sort()

# solution 2
def bubbleSort(list):
    n = len(list)
    for i in range(n - 1):
        swap = 0
        for k in range(n -1):
            if list[k] > list[ k + 1]:
                temp = list[k]
                list[k] = list[k + 1]
                list[ k+ 1] = temp
                swap = 1
        if swap == 0:
            break
    return list

arr = [21,6,9,1,33]

result = bubbleSort(arr)

print(result)



    