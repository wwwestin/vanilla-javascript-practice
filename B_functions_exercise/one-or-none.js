let oneOrNone = function(val1, val2){
    if ((val1||val2) && !(val1 && val2)){
    return true; 
} else {
    return false;
}
};

console.log(oneOrNone(false, false)); 
console.log(oneOrNone(true, false)); 
console.log(oneOrNone(false, true)); 
console.log(oneOrNone(true, true)); 