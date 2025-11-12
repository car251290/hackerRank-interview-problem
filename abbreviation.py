def abbreviation(a, b):
    # Write your code here
    m, n = len(a), len(b)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for i in range(1, m + 1):
        dp[i][0] = dp[i - 1][0] and a[i - 1].islower()
    for j in range(1, n + 1):
        dp[0][j] = False
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if a[i - 1].lower() == b[j - 1].lower():
                dp[i][j] = dp[i - 1][j - 1]
            if a[i - 1].islower():
                dp[i][j] |= dp[i - 1][j]
    return "YES" if dp[m][n] else "NO"
# Example usage:
a = "daBcd"
b = "ABC"
print(abbreviation(a, b))  # Output: "YES"