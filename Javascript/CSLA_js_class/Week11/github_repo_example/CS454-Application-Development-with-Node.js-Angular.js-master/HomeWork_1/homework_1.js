function isPalindrome(str) {
    var length = str.length; //get the length of the word
    for ( var i = 0; i < Math.floor(length/2); i++ ) {
        if (str[i] !== str[length - 1 - i]) { //check the equality of the letters from both ends of th word
            return console.log(false);
        }
    }
    return console.log(true);
};

isPalindrome('cook');

function replaceLetters(str) {
    var newstr = "";
    var length = str.length;
    for (var i = 0;  i < length; i++){
        if (str[i] === str[i+1] || str[i] === str[i-1]){
            newstr = newstr.concat("*");
        } else {newstr = newstr.concat(str[i])}
    }
    return console.log(newstr);
};

replaceLetters("schoolllaab");

function repeatingLetters(str) {
    var map = {};
    for (var i = 0; i < str.length; i++) {
        map[str[i]] = (map[str[i]] || 0) + 1;
    }
  return console.log(map);
};

repeatingLetters("dgsdgsgsgsgsg");

function shuffleArray(array) {
    var length = array.length;
    for (var i = length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return console.log(array);
};

shuffleArray([1, 2, 3, 4, 5]);

function calculate(a, b, c){
    if (c === "+"){
      result = a+b
    } else if (c === "-"){
      result = a-b
    } else if (c === "*"){
      result = a*b
    } else if (c === "/"){
      result = a/b
    }

    var string = a+" "+c+" "+b+" = "+result

    return console.log(string);
};

calculate(2, 8, '-'); // 2 - 8 = -6
calculate(2, 8, '+'); // 2 + 8 = 10
calculate(2, 8, '*'); // 2 * 8 = 16
calculate(2, 8, '/'); // 2 / 8 = 0.25

function sumArray(array){
    var sum = 0;
    array.forEach(function (elm) {
      if (!isNaN(elm)){
        sum += parseInt(elm);
      }
    });

    return console.log(sum);
};

sumArray([1, 2, 3.2, 'a', '7' ]);
sumArray([1, 2, 'a', 4, '7', 'b', 'c', 7]); // 21

function totalPaid(array, tax){
    var recipe = [];
    var total = 0;
    for (i = 0; i < array.length; i++){
        var object = {};
        var paid = array[i].price + (array[i].price * (tax/100));
        object.name = array[i].name;
        object.paid = paid.toFixed(2);
        recipe.push(object);
        total += paid;
    }

    var map = {total: total.toFixed(2)};
    recipe.unshift(map);
    return console.log(recipe);
};

var groceries = [
  { name: 'Orange Juice', price: 2.00 },
  { name: 'Milk', price: 3.50 },
  { name: 'Cereal', price: 2.00 },
  { name: 'Sugar', price: 1.75 }
];

totalPaid(groceries, 9.5);
