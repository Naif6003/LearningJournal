double :: Integer -> Integer
double x = 2*x


-- rec_factorial n =
--     if n>0
--       then n * rec_factorial (n-1)
--       else 1

rec_factorial n =
    if n>0
      then n * rec_factorial (n-1)
      else if n==0
        then 1
        else error "factorial called with n<0"

factorial n = product [1..n]


my_length  :: [a] -> Integer
my_length []     = 0
my_length (x:xs) = 1 + my_length xs


rec_sum []     = 0
rec_sum (x:xs) = x + rec_sum xs

append [] ys     = ys
append (x:xs) ys = x : append xs ys

choose_creature x =
    case x of
      0 -> "squid"
      1 -> "octopus"
      2 -> "anemone"
      _ -> "unknown"

case_append xs ys =
    case xs of
      [] -> ys
      (z:zs) -> z : append zs ys


plus :: Integer -> Integer -> Integer
plus x y = x+y

incr = plus 1


my_map :: (a -> b) -> [a] -> [b]
my_map f [] = [] --pattern matching and ends on this
my_map f (x:xs) = f x : my_map f xs --recursion 
--pattern matching until 
--apply fucntion to the first element, : is the cons, call the recursion to the rest of the list

on_off :: Bool -> Integer
on_off False = 0
on_off True  = 1


doubletrouble :: Integer -> Integer
doubletrouble = \x -> 2*x

-- how to make filter 
-- filter_even :: (a -> Bool) -> [a] -> [a]
-- filter_even evenNum [] = []
-- filter_even evenNum (a:x) = evenNum a : filter_even evenNum x


compose f g x = f (g x)


hyp x y =
    let xsq = x*x
        ysq = y*y
        sum = xsq + ysq
    in sqrt sum


hyp2 x y =
    let sum = xsq + ysq
        xsq = x*x
        ysq = y*y
    in sqrt sum


-- let can be nested
hyp3 x y =
    let xsq = x*x
        ysq = y*y
    in let sum = xsq + ysq
       in sqrt sum


-- where is another way to produce a local scope
hyp4 x y =
    sqrt sum
    where sum = x*x + y*y

-- nested declarations shadow outer ones
shadow x =
    let x = 100
    in 2*x


my_member :: Eq a => a -> [a] -> Bool
my_member a x = or (map (==a) x)

-- const k x = k
-- clever_length x = sum (map (const 1) x)

my_rev :: [a] -> [a]
my_rev [] = []
my_rev (x:xs) = my_rev xs ++ [x]


oddsFrom3 = [3, 5 .. ]

primes = 2 : [n | n <- oddsFrom3, null (primeDivisors n)]
primeDivisors n = [d | d <- takeWhile (\x -> x^2 <= n) primes, n `mod` d == 0]


