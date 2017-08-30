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
We can also have triples:
 ```(1, 0, False)```

'tuple' is the most general name -- this has 0 or more elements.  Note that
a tuple with 4 Booleans has a different type from a tuple with 3 Booleans!
But a list of Booleans always has type [Bool]

#####DEFINING A FUNCTION
Putting this in a file or add 'let' in ghci terminal
```
double :: Integer -> Integer
double x = 2*x
```
For 'triple' we haven't declare the type of the triple function.
The inferred type will allow this to work with floats as well as
integers and uses the type class mechanism 
```triple x = 3*x```

Haskell is case-sensitive, function names should start with lower case, type names and constructors with upper case

#### SIMPLE RECURSION EXAMPLES
```
rec_factorial :: Integer -> Integer
rec_factorial n =
    if n>0
      then n * rec_factorial (n-1)
      else 1
```

 here's another version with error checking:
 ```
 rec_factorial n =
    if n>0
      then n * rec_factorial (n-1)
      else if n==0
        then 1
        else error "factorial called with n<0"
```

-- factorial using the built-in prod function
-- note that this gives 1 for the case of n<0 rather than an error  
```
factorial :: Integer -> Integer
factorial n = product [1..n]
```
-- type Integer can have an indefinite number of digits!
-- (there is also a type Int that is limited to hardware integers)

######POLYMORPHIC TYPES (also note use of pattern matching in function def)

This function returns the length of the string

```
my_length  :: [a] -> Integer
my_length []     = 0
my_length (x:xs) = 1 + my_length xs

my_length "string"
6
```

######STYLE RECOMMENDATION: watch for opportunities to use pattern matching in
-- function definitions.  This often leads to cleaner definitions than
-- using if expressions or guards (discussed later).


####MORE RECURSION EXAMPLES 
reviewThis
-- sum the elements in a list (there is also a built-in function 'sum')
```
rec_sum []     = 0
rec_sum (x:xs) = x + rec_sum xs
```
```
rec_sum [3, 5]
8```

-- append two lists (note that this is built-in as the operator ++)
```
append [] ys     = ys
append (x:xs) ys = x : append xs ys
```
#### CASE EXPRESSIONS
```
choose_creature x =
    case x of
      0 -> "squid"
      1 -> "octopus"
      2 -> "anemone"
      _ -> "unknown"
```

-- pattern matching for function definitions is equivalent to using case
-- expressions ... for example:
```
choose_another_creature 0 = "squid"
choose_another_creature 1 = "octopus"
choose_another_creature 2 = "anemone"
choose_another_creature _ = "unknown"
```

-- and conversely:

```
case_append xs ys =
    case xs of
      [] -> ys
      (z:zs) -> z : append zs ys
      ```
```
case_append [3,4] [8, 9]
[3,4,8,9]
```

####CURRYING!
```
plus :: Integer -> Integer -> Integer
plus x y = x+y
```
note that the type of plus is 
```
Integer -> Integer -> Integer,
NOT (Integer , Integer) -> Integer
```

we can apply plus to just one argument (check what the type is of incr)
```
incr = plus 1
```

this last definition is also an example of Pointfree programming ....
we don't mention the argument.  This is considered a cleaner definition than

```
incr a = plus 1 a
```
this last definition is also an example of Pointfree programming 
we don't mention the argument.  This is considered a cleaner definition than
```incr a = plus 1 a```

####HIGHER-ORDER FUNCTIONS
The Haskell library includes a map function.  This applies the function to each element of a list and returns a list of the results.  Try evaluating

```
map incr [2,8,9,3]
map (+7) [2,8,9,3]
```

we can also easily define map ourselves, this is to define in a file
```
my_map :: (a -> b) -> [a] -> [b]
my_map f [] = []
my_map f (a:x) = f a : my_map f x
```

try applying my_map to double, factorial, not, etc.
the types of the argument list and result list can be different

```
on_off :: Bool -> Integer
on_off False = 0
on_off True  = 1
```
```
my_map on_off [True,True,False]
output: [1,1,0]
```

####NONYMOUS FUNCTIONS (Lamda Functions)
```
doubletrouble :: Integer -> Integer
doubletrouble = \x -> 2*x
```
```
my_map (\x -> x+5) [1,2,3]
output: [6,7,8]
```

####FILTER
Another useful higher-order function is filter:
```
not sure how to do this
filter :: (a -> Bool) -> [a] -> [a]
filter even [1..20]
```

In the following expression we are using the isUpper function from the
Data.Char module.
```
filter Data.Char.isUpper "Oliver Twist"
```
Suppose we want function to filter out the elements in a list that aren't
divisible by 3

We could write it as:
```
threes s = filter (\x -> mod x 3 ==0) s
   ```
But a more elegant definition is as follows. 
```
threes = filter (\x -> mod x 3 ==0)
input: threes [9, 3, 99, 1]
output: [9,3,99]
```

####Function Composition
Another useful higher-order function is for doing function composition.  This is defined in the Prelude as the infix operator and is often used for pointfree programming.

we defined two functions incr and double. Now try evaluating :
```
 (double . incr) 10
 output: 22
```

You could define the compose operator yourself:
```compose f g x = f (g x)```

What is the type of, Try it and see what Haskell says for
  ```
  input: 
  :t compose
  :t (.)
  output:
  compose :: (t1 -> t) -> (t2 -> t1) -> t2 -> t
  (.) :: (b -> c) -> (a -> b) -> a -> c

```
OK, the type of (.) is
```(.) :: (b -> c) -> (a -> b) -> a -> c```

<hr>

ReviewThis
Notice that the two functions don't need to have  the same type rather, the argument type of the first has to be the return type of the second.
```(const True) . incr```

has type Integer -> Bool
first import Data.Char
so that the chr and ord functions are defined then try
```
:t (chr . (+1) . ord)
(chr . (+1) . ord) 'a'
```

<hr>

####Static Scoping
```
hyp x y =
    let xsq = x*x
        ysq = y*y
        sum = xsq + ysq
    in sqrt sum
```
```
hyp2 x y =
    let sum = xsq + ysq
        xsq = x*x
        ysq = y*y
    in sqrt sum
```

-- let can be nested
```
hyp3 x y =
    let xsq = x*x
        ysq = y*y
    in let sum = xsq + ysq
       in sqrt sum
```

-- where is another way to produce a local scope
```
hyp4 x y =
    sqrt sum
    where sum = x*x + y*y
```
-- nested declarations shadow outer ones
```
shadow x =
    let x = 100
    in 2*x
 ```

Note that 'shadow' always returns 200, since the x in the let expression
   shadows the parameter.  This works just the same as in Scheme/Racket.

####LIST COMPREHENSIONS
the list of squares of numbers between 0 and 10

```
squares100 = [x^2 | x <- [0..10]]
```

the infinite list of squares 
```
squares = [x^2 | x <- [0..]]
```
######quicksort
```
qsort [] = []
qsort (a:x) = qsort [ b | b <- x, b<=a ] ++ [a] ++ qsort [ b | b <- x, b>a ]
```

######all permutations of a list
```
perms [] = [[]]
perms x  = [ a:y | a <- x, y <- perms (remove a x) ]
```
```
remove a [] = []
remove a (x:y) | a==x = remove a y
               | otherwise  = x : remove a y
```
####MORE HIGHER-ORDER FUNCTIONS
In many cases you can avoid writing a recursive function using higher-order functions such as map or foldr 
```
my_member :: Eq a => a -> [a] -> Bool
my_member a x = or (map (==a) x)
```

-- This version of length uses the built-in const function, which is defined as:
```
const k x = k
clever_length x = sum (map (const 1) x)
```
or even more clever (Pointfree again).  Haskell fans would probably consider this as the best style.
```
very_clever_length = sum . (map (const 1))
```

The foldr function ("fold right") takes three arguments: a
function, an initial value and a list.  For example,
```foldr (+) 0 [1,8,5]```
is equivalent to
```1+(8+(5+0))```
which is 14.

Using foldr we can elegantly define functions such as sum and product:
```
my_sum = foldr (+) 0
my_product = foldr (*) 1
my_or = foldr (||) False
my_and = foldr (&&) True
```
{- Some details: all of the functions used above are commutative and
associative (the easier case to think about).  So in the example we
didn't really need the parentheses in

    1+(8+(5+0))

The parentheses do matter for non-associative functions.  For example:

    foldr (-) 0 [1,8,5]

is equivalent to

    1-(8-(5-0))

and not 1-8-5-0

There is another function foldl ("fold left") that does the opposite
bracketing.

    foldl (-) 0 [1,8,5]

is equivalent to

    ((0-1)-8)-5

foldr can work on infinite lists, while foldl cannot; but for finite
lists foldl will usually be more efficient.  (Since we generally won't
be concerned with relatively minor efficiencies in 341, and since the
instructor does have a strange fondness for infinite data structures,
we'll just use foldr.)  See the tutorial for more information.
-}


