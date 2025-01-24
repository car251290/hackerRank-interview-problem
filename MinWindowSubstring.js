function MinWindowSubstring(strArr){
    let str = strArr[0]
    let substr = strArr[1]
    let minWindow = ''
    let minWindowLength = Number.MAX_VALUE
    let substrCount = {}
    let strCount = {}
    let left = 0
    let right = 0
    let count = 0
    for(let i = 0; i < substr.length; i++){
        if(substrCount[substr[i]]){
            substrCount[substr[i]]++
        }else{
            substrCount[substr[i]] = 1
        }
    }
    while(right < str.length){
        if(substrCount[str[right]]){
            if(strCount[str[right]]){
                strCount[str[right]]++
            }else{
                strCount[str[right]] = 1
            }
            if(strCount[str[right]] <= substrCount[str[right]]){
                count++
            }
        }
        while(count === substr.length){
            if(right - left + 1 < minWindowLength){
                minWindowLength = right - left + 1
                minWindow = str.slice(left, right + 1)
            }
            if(substrCount[str[left]]){
                strCount[str[left]]--
                if(strCount[str[left]] < substrCount[str[left]]){
                    count--
                }
            }
            left++
        }
        right++
    }
    if(minWindow === ''){
        return 'No window found'
    }
    strArr = []
    strArr.push(minWindow)

    
    return strArr
}