'use strict';

function stringConstructions(s){

        // Write your code here
        let set = new Set(s);
        //return set.size;
for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
        set.add(s[i]);
    }
}
return set.size;
    
}