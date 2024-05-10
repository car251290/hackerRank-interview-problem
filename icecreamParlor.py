def icecreamParlor(m,arr):
     dic= {}
     for i in range(len(arr)):
        if m-arr[i] in dic:
            return [dic[m-arr[i]], i+1]
        else:
            dic[arr[i]] = i+1
icecreamParlor()
