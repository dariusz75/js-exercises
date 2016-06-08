####Morse code to English translator

```js
var alphabets = {
    a: '.-',    
    b: '-...',  
    c: '-.-.', 
    d: '-..',
    e: '.',     
    f: '..-.',  
    g: '--.',  
    h: '....',
    i: '..',    
    j: '.---',  
    k: '-.-',  
    l: '.-..',
    m: '--',    
    n: '-.',    
    o: '---',  
    p: '.--.',
    q: '--.-',  
    r: '.-.',   
    s: '...',  
    t: '-',
    u: '..-',   
    v: '...-',  
    w: '.--',  
    x: '-..-',
    y: '-.--',  
    z: '--..',  
    1: '.----', 
    2: '..---', 
    3: '...--', 
    4: '....-', 
    5: '.....', 
    6: '-....', 
    7: '--...', 
    8: '---..', 
    9: '----.', 
    0: '-----', 
    ' ': ' '
};

function toEnglish(sentence) {
  var result = '';
  for (var i = 0; i < sentence.length;  i++) {
    var letter = sentence[i].toLowerCase();
    if (alphabets[letter]) {
      result = result + alphabets[letter] + ' ';
    }
  }
  return result;
}


console.log(toEnglish('SOS SOS'));
```

#### http://jsbin.com/yapamenumi/edit?js,console