function main() {
    // Enter your code here
    class calculate{
       power(n,p){
        if(n<0){
            throw "n and p should be non-negative";
        } if(p<0){
            throw "n and p should be non-negative";
        }
        return n**p;

       }
    }
    calculate.power(2,3);


}