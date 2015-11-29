var sum = 0;

for (var i = 0; i < 1000; i++) 
	((i % 3 == 0) || (i % 5 == 0)) ? sum += i : null	

console.log(sum);