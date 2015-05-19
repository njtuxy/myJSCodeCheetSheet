//Function .Call how to use and understand
var foo = {};
var bar = {};

function func(val){
    this.val = val;
}

func.call(foo, 123);
func.call(bar, 456);

foo.a = "abc";

console.log(typeof foo);
console.log(foo.val);
