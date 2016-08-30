bind-generator
==============

Change the scope of a generator function


```javascript
let bindGenerator = require("bind-generator");

let scopedGenerator = bindGenerator(instance, instance.myGeneratorFunction);

yield scopedGenerator();
```
