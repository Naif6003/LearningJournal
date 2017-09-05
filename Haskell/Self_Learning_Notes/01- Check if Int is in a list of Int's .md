01- Check if Int is in a list of Int's 
========================

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