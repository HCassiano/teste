module.exports.pow = function (x,n) {
	var a = 1;
	//if (n == 0) return 1;
	if (n < 0) {
		for (var i = 0; i < -n; i++) {
			a = a / x;
		}
	}
	if (n > 0) {
		for (var i = 0; i < n; i++) {
			a = a * x;
		}
	}
	return a; 
}