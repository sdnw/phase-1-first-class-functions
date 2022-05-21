const receivesAFunction = callback => {
   return callback();
}

const returnsANamedFunction = function() {
    return function namedFn() {
        console.log('named function')
    }
}

function returnsAnAnonymousFunction () {
    return function() {}
}