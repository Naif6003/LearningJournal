01-writing function with underscore
========================


I know! Let's write our own version of length! We'll call it length'.

```
length' xs = sum [1 | _ &lt;- xs]  
```