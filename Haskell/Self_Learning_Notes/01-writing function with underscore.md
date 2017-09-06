01-writing function with underscore
========================


I know! Let's write our own version of length! We'll call it length'.

```
length' xs = sum [1 | _ &lt;- xs]  
```


_ means that we don't care what we'll draw from the list anyway so instead of writing a variable name that we'll never use, we just write _. This function replaces every element of a list with 1 and then sums that up. This means that the resulting sum will be the length of our list.




