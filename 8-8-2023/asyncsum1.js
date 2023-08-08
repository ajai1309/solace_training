const async = require("async");


function sum(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

 

async function add1(c, d, e) {
    const ans = await sum(c, d, e);
    console.log(ans);
    console.log(e);
}

 

async function add2(x, y, g) {
    const ans1 = await sum(x,y);
    console.log(ans1);
    console.log(g);
}

 

add1(10, 20, 20);
add2(45, 45, 78);