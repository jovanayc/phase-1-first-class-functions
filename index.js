
//Callback functions 
function named(person){
    return function (){console.log(`3 fruits a day, ${person}`);}
}

//Primary functions
function receivesAFunction (person){
    return person();
}

function returnsANamedFunction (){
    return named('Jovanay');
}

const returnsAnAnonymousFunction = () => {
    return function (){console.log(`How many fruits a week?`);}
}

/*
console.log(named("Jovanay"));
console.log(receivesAFunction(named()));
console.log(returnsANamedFunction());
console.log(returnsAnAnonymousFunction());
*/