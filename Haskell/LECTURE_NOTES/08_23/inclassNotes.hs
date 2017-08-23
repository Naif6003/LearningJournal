
--THE LEFT SIDE IS THE CONDITION OF THE TYPE
-- THIS NOTATION IS A TYPE OF INTEGERS
Integral a => a-> [a]
-- we know collatz is a list of integers
-- THIS IS A LIST
collatz 1 = [1]
-- n is a new  statement return
-- this statement will call the callback function depending if its even or odd
collatz n = n: (if even n then collatz (n `div` 2) --here the colon is an operator that does it recursively
                          else colatz (n*3 + 1)
                  )
-- or this
-- the current value of n and calling the statement again, if statement is deciding which value of n i should use

-- AFTER THE RECURSIVE CALL, IT'LL CALL COLLATZ
-- THE N IS THE VALUE OF THE FUNCITON
collatz n = n:collatz (if even n then  n `div` 2 else n*3 + 1
                          )


-- IS THE ARUMENT EMPTY OR IS IT quicksort(---)

-- LET IS A KEYWORD IN HASKELL ITS TO USE FOR TEMPOARY VARIABLE
quicksort [] = []
-- THIS IS x AND conventionally its a bunch of x's
-- DIVIDE THE ELMENTS INTO TWO PEICES

quicksort (x:xs) = -- this is head and tail, it's concrete patters x:xs, the colon is a list

  -- THIS IS A LIST COMPREHENSION
  -- THIS MEANS TO RUN THROUGH THE XS, IF IT'S LESS OR EQUAL YOU KEEP IT
  --[a | a <- xs, a <=x] is similar to forEach
    let smallerSorted = quicksort [a | a <- xs, a <= x] --picks from xs but not x

    -- THIS IS THE SAME BUT ITS GREATER THAN X
        biggerSorted = quicksort [a | a <- xs, a > x]

        -- THEN WE STORE IT TEMPORALY smallersorted AND biggerSorted
        -- THEN YOU ++ FOR CONCATNATING
    in  smallerSorted ++ [x] ++ biggerSorted
