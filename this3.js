/**
 * Created by yxia on 5/14/15.
 */

var foo = {
    bar: 123
};

function bas(){
    if(this === global)
        console.log('called from global');
    if(this === foo)
        console.log('called from foo');
}

bas();

foo.bas = bas;
foo.a = bas;
foo.bas();
foo.a();
console.log(foo);



//Output
/*
/opt/node/current/bin/node this3.js
called from global
called from foo
called from foo
{ bar: 123, bas: [Function: bas], a: [Function: bas] }

Process finished with exit code 0
*/