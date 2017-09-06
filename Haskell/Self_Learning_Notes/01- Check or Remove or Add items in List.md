01- Check or Remove or Add items in List
========================
```
removeNonUppercase xs = [x | x <- xs, x `elem` ['A'..'Z']]
```
```
ghci> removeNonUppercase "Hahaha! Ahahaha!"  
"HA"  
ghci> removeNonUppercase "IdontLIKEFROGS"  
"ILIKEFROGS"   
```


elem :: Eq a => a -> [a] -> Bool
base Prelude, base Data.List
elem is the list membership predicate, usually written in infix form, e.g., x `elem` xs. For the result to be False, the list must be finite; True, however, results from an element equal to x found at a finite index of a finite or infinite list. 

###these are both similar
```
ghci> let xxs = [[1,3,5,2,3,1,2,4,5],[1,2,3,4,5,6,7,8,9],[1,2,4,2,1,6,3,1,3,2,3,6]]  
ghci> [ [ x | x <- xs, even x ] | xs <- xxs]  
```

```
Prelude> let checkEvens list = [ [ x | x <- xs, even x ] | xs <- list]  
Prelude> checkEvens  [[1,3,5,2,3,1,2,4,5],[1,2,3,4,5,6,7,8,9],[1,2,4,2,1,6,3,1,3,2,3,6]]  
```
output:
```
[2,2,4],[2,4,6,8],[2,4,2,6,2,6]]
```

<hr>

### 
If the standard elem function didn't exist, you could have been on the right track with find.

```
myElem :: (Eq a) => a -> [a] -> Bool
myElem x = maybe False (const True) . find (== x)
There's lots of other ways to implement it too, like

myElem x = any (== x)
myElem x = or . map (== x)
myElem x = not . null . filter (== x)
myElem x = foldr (\y b -> y == x || b) False
```

```
l=[1,2,3,4,5]


checkIfElem :: Int -> [Int] ->Bool
checkIfElem x l 
         |x`elem` l =True
         |otherwise=False


```

