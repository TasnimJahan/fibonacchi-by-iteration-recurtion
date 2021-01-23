// Using Iteration
function fibonacchiIterative(n) {
    var fibo=[0,1];
    for (let i = 2; i < n; i++) {
        var nextValue=fibo[i-1]+fibo[i-2];
        fibo.push(nextValue);
    }
    return fibo;
}
var fibonacchi=fibonacchiIterative(10);
console.log(fibonacchi);



// Using recursion
function fibonacchiRecursive(num) {
    /* stopping condition */
    if(num==0){
        return [0];
    }
    else if(num==1){
        return [0,1];
    }
    /* recursive call */
    var fibo=fibonacchiRecursive(num-1);
    var nextElement=fibo[num-1]+fibo[num-2];
    fibo.push(nextElement);
    return fibo;
}
var fibonacchi2=fibonacchiRecursive(10);
console.log(fibonacchi2);
