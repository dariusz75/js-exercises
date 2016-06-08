####Check if the given number is semiprime number

```js
function isPrime(value) {
  
    for(var i = 2; i < value; i++) {
      
        if(value % i=== 0) {
          return value + ' is a semiprime number.';
        } else if ((value % i) % (value % i) === 0) {
          return value + ' is not a semiprime number.';
          } 
    }
}

console.log(isPrime(15));
```

#### http://jsbin.com/rajuku/edit?js,console