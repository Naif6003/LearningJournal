String.prototype.removeSubstring = function(a, b){
	var array = this.split("");
	var w = 0;
	var str = [];
	if (b !== undefined){
		array.forEach(function (elm) {
      		if (elm === a & w < b){
        		w += 1;
      		} else {
      			str.push(elm);
      		}
    	});
	} else {
		array.forEach(function (elm) {
      		if (elm !== a){
      			str.push(elm);
      		}
    	});
	}

	return str.toString();;

}

//------------------- Testing -----------------------------------//
var str1 = 'aaaaa';
var newStr1 = str1.removeSubstring('a', 3); // newStr = 'a' 
console.log( newStr1 );
var str2 = 'aaabbbbccc'; 
var newStr2 = str2.removeSubstring('b'); // newStr = 'bbbb' 
console.log( newStr2 );
//------------------- Testing -----------------------------------//