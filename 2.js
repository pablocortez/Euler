var series = [1, 2];

for (var i = 2; series[series.length-1] <= 4000000; i++) {
	series[i] = (series[i-2] + series[i-1]); 
}	

function sumOfEvens(array) {
	var sum = 0;
	array.forEach(function (item, index, array) {
		item % 2 == 0 ? sum += item : null
	});
	return sum;
}

console.log(sumOfEvens(series));

