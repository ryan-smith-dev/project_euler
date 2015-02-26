/*
 * Solves problem 3
 */

var primeFactors = [];
var count = 0;

var numToFactorize = 600851475143;

for(var x=2; x <= Math.sqrt(numToFactorize); x++){
    if(numToFactorize % x == 0){
		if(count == 0){
		    // if no current primes
		    primeFactors[count++] = x;
		} else {
			var isPrime = true;
			for(var y in primeFactors){
				if(x % primeFactors[y] == 0){
					isPrime = false;
					continue;
				}
			}
			if(isPrime){
				primeFactors[count++] = x;
			}
		}
    }
}

console.log(primeFactors[count-1]);

// solution is: 6857