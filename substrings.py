def substrings (n):
    # the function is expected to return an Integer
    # the function accepts Integer n as a parameter
    
    # Write your code here
    MOD = 1000000007
    total_sum = 0
    current_sum = 0

    for i in range(len(n)):
        current_sum = (current_sum * 10 + (i + 1) * int(n[i])) % MOD
        total_sum = (total_sum + current_sum) % MOD

    return total_sum
#return substrings("1234")   # 1670
print (substrings("1234"))




