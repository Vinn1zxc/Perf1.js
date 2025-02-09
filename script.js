function testVar() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x);
    }
    console.log(x);
}

function testLet() {
    let y = 10;
    if (true) {
        let y = 20;
        console.log(y);
    }
    console.log(y);
}

function testConst() {
    const z = 10;
    console.log(z);
}

testVar();
testLet();
testConst();