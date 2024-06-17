def twoString(s1,s2):
    if len(set(s1) & set(s2)) > 0 :
        return "YES"
    return "NO"
    