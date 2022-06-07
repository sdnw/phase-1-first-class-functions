function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return function namedFunc() {
        console.log('hi')
    }
}

function returnsAnAnonymousFunction() {
    return function(){}
}