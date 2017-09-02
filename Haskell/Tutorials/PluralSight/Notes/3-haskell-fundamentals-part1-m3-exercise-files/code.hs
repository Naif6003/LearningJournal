-- Don't worry about this line. For a very technical reason, it is needed for stringLength to work.
{-# LANGUAGE NoMonomorphismRestriction #-}



-- Functions as Values

pass3 f = f 3

add1 x = x + 1

compose f g x = f (g x)

mult2 x = 2 * x

always7 x = 7

always7' = const 7


-- Partial Application

foo x y z = x + y + z

foo_1_2 = foo 1 2

pass x f = f x

pass3' = pass 3


-- Operators

pass_3_4 f = f 3 4

(a,b) .+ (c,d) = (a + c, b + d)

plus1 = (+) 1

plus1' = (1+)
plus1'' = (+1)


-- Map

double = map (2*)


-- Filter

notNull xs = not (null xs)

isEven x = x `mod` 2 == 0

removeOdd = filter isEven


-- Fold

showPlus s x = "(" ++ s ++ "+" ++ (show x) ++ ")"

showPlus' x s = "(" ++ (show x) ++ "+" ++ s ++ ")"


-- Zip

plus3 x y z = x + y + z


-- Function Operators

stringLength = length . show

stringLength' x = length (show x)

notNull' = not . null
