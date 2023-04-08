receivesAFunction = (workout) => workout();


returnsANamedFunction = () => {return receivesAFunction};

function returnsAnAnonymousFunction(){
return function(){}
}
