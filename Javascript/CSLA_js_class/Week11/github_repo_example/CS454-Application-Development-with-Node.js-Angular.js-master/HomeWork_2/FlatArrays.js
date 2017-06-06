Array.prototype.flattenArray =  function (){
	var array = this.reduce(function(a, b) {return a.concat(b);}, []);
	return array;
}


//------------------- Testing -----------------------------------//
var arrays = [[2, 3, 4], [1, 2], [2]];
console.log( arrays.flattenArray() );
//------------------- Testing -----------------------------------//