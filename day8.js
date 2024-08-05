
function processData(input){
 input = input.split('\n');
 const len = input[0];
 const keyValueMap = Object.fromEntries(input.splice(1,len).map(k => k.split(' ')));

 input.splice(1).forEach(key => {
    if(key in keyValueMap){
        console.log(key + '=' + keyValueMap[key]);

    } else {
        console.log('Not Found');

    }
 })
   
}