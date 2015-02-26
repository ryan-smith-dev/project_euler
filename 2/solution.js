/*
 * Solves problem 2
 */

var sum = 2; // starting at 2 because of initial numbers (1 and 2)
var fprev = 1;
var fcurr = 2;

while(fcurr < 4000000){
    var fnext = fprev + fcurr;
    fprev = fcurr;
    fcurr = fnext;
    if(fcurr % 2 == 0){
        sum += fcurr;
    }
}

console.log(sum);
// solution is: 4613732
