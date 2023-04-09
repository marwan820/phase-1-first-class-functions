


const receivesAFunction = spy => spy() 




returnsANamedFunction = () => { return receivesAFunction};

function returnsAnAnonymousFunction(){
return function(){}
}