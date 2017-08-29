####List Comprehension
List comprehension is the process of generating a list using mathematical expression. Look at the following example where we are generating a list using mathematical expression in the format of [output | range ,condition].

```
Prelude> [x*2| x<-[1..10]] 
[2,4,6,8,10,12,14,16,18,20]
Prelude> [x*2| x<-[1..5]] 
[2,4,6,8,10]
Prelude> [x| x<-[1..5]] 
[1,2,3,4,5]
```
####Sequence / Range Operator
Sequence or Range is a special operator in Haskell. It is denoted by "(..)". You can use this operator while declaring a list with a sequence of values.

If you want to print all the values from 1 to 10, then you can use something like "[1..10]". Similarly, if you want to generate all the alphabets from "a" to "z", then you can just type "[a..z]".

The following code shows how you can use the Sequence operator to print all the values from 1 to 10 −


```
[0,5 .. 100 ] -- the list of multiples of 5 between 0 and 100 
[1..] -- the infinite list of positive integers
[1,3 ..] -- the infinite list of odd positive numbers
```
: is an infix 'cons' (list constructor) operator.  Example:
```3 : [4,5]```
++ is the infix append operator:

```[1,2] ++ [3,4,5]```
length finds the length of a list
null tests whether a list is empty
```
null [1,2,3]
False
```
####Strings
strings are just lists of characters (type Char).  Try this:
```
['y', 'u', 'p']
"yup"

```

The show function takes a value and turns it into a string:
```
show (3+4)
"7"
```
####PAIRS, TRIPLES, AND TUPLES
A pair is a pair of other values, and is written like this:
```
(1, 4)
(True, False)
(1, "squid")
```