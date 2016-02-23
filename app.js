var value = 103;

if(value >= 102){
        value += 2;
}
else {
        value -= 18;
}

value = "89" + value;

var array = [];

for(var i = 0; i < value.length; i++ ){
        array.push(value.charAt(i));
};

array.shift();
array.pop();

var reverseArray = "";

for(var i = array.length; i > 0; i--){
        reverseArray += array[i];
}

value = parseInt(value);
reverseArray = parseInt(reverseArray);

value += reverseArray;
if(value > 8596) {
	  value = 12;
	}else if(value == 1111) {
	  value = 2;
	}else {
	  value = 14;
	};
var count = 4;
while(count > 0) {
	value++;
	count--;
};
function convertString(val) {
	val = val.toString();
if (val.length > 1) {
	val = val.slice(1);
};
return val;
}
value = convertString(value);
console.log(value);