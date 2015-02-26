/*
 * Solves problem 4
 */

 var largestPalindrome = 0;

 for(var x = 100; x < 999; x++){
 	for(var y = x; y < 999; y++){
 		var prod = x * y;
 		var prodS = prod.toString();
 		var prodR = prodS.split('').reverse().join('');
 		if(prodS == prodR){
 			largestPalindrome = Math.max(largestPalindrome, prod);
 		}
 	}
 }
 console.log(largestPalindrome);

 // solution is: 906609