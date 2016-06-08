####Check if the given number is a prime number

```js
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return value + ' is not a prime number';
        }
    }
    return  value + ' is a prime number';
}

console.log(isPrime(4));
```

#### http://jsbin.com/suqezi/edit?js,console