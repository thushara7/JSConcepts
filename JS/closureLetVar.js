console.log('closure');

// closure is the function with its lexical scope wrapped together so that inner function has access to the outer function/scope.
// its diff from a pure function cz in this case all the data required by the function which is its lexical scope is stored in a heap memory perm untill deleted.

//q
for(let i=0;i<3;i++){
    const log =()=> console.log(i);

    setTimeout(log,1)
}

// for var its 3,3,3
// this is because var is function scoped and the var variable declared in the for loop has global scope and it get hoisted to the top.
// hence when the loop runs var is mutated and after 1 sec when the timer runs, the loop has finished and there it logs the last known value of the var



// for let its 0,1,2 or for IIFE
// cz let it black scoped, so a new let is created for every iteration of for loop. and each log function's heap memory stores a new value of the let.