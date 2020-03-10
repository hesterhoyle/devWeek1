let fib = [1,1];
let i = 0;

while(i < 100) {
    fib.push(fib[i] + fib[i+1]);
    i++;
}
console.log(fib);