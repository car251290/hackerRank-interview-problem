function reverse(str) {
    str = [1,2,3,4]
    for (let i = 0; i < str.length; i++) {
        // swap the first and last elements of the array
        // swap the second and second to last elements of the array
        str[i] = str[str.length - 1 - 1];
    }
    return str;
  

}
console.log(reverse());

//console.log(reverse("hello world"));


