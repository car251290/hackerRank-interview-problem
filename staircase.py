#make 3 foorloops
def staircase (n):
    for i in range(n):
        for j  in range(n):
            if i + j == n-1:
                 print(" "*j+"#"*(n-j))
                 
                 
print (staircase(6))





    