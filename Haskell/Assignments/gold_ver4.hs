import Debug.Trace
-- primes = 2 : [trace (show p ++ " is prime. ")  p | p <- oddsFrom3, trace (show p) (null  (primeDivisors p))]

-- creating a list of odd numbers
oddsFrom3 :: [Integer]
oddsFrom3 = [3, 5 .. ]

-- this is taking an input Integer and outputs a list of all possible primes
primeDivisors :: Integer -> [Integer]
primeDivisors n = [d | d <- takeWhile (\x -> x^2 <= n) primes, n `mod` d == 0]
--  test if a list is empty
-- primes = 2 : [n | n <- oddsFrom3, null (primeDivisors n)]

-- the primes function takes a list of odd integers and a list of primes
primes :: [Integer]
primes = 2 : [n | n <- oddsFrom3, null  (primeDivisors n)]


-- From Integral is making sure it's an integer and floor makes float into an integer
iSqrt :: (Integral b, Integral a) => a -> b
iSqrt n = floor (sqrt (fromIntegral n))

-- uses the sqrt into and boolean checks if it's a perfect square
isASquare :: Integral a => a -> Bool
isASquare n = (iSqrt n) ^ 2 == n


-- isPrime checks every element in the primes list
isPrime :: Integer -> Bool
-- isPrime n = n `elem` primes
-- isPrime n = null [x | x <- takeWhile (\x-> x <= n) primes,  n == x   ]
-- isPrime k = null [ x | x <- [2..iSqrt k], k `mod`x  == 0]


-- primechecker n = null [ x | x <- takeWhile(\x -> x < iSqrt  n) primes, x `mod` n == 0 ]



-- primes = 2 : [trace (show p ++ " is prime. ")  p | p <- oddsFrom3, trace (show p) (null  (primeDivisors p))]




primechecker k = null [ x | x <- takeWhile(\x-> x < k) primes, k `mod` x == 0   ]

gold :: Integer -> [Integer]
gold g = [ n | n <-takeWhile (\x->x<g) primes,  isASquare ((g-n) `div` 2) ]


checkGold :: [Integer]
checkGold = take 2 [oddNum |oddNum <- oddsFrom3, null (gold oddNum),  not (primechecker oddNum) ]

-- isPrimeChecker = null

-- Suppose A is given number.
-- Step 1: Find a whole number nearly greater than the square root of A. K ¿ square root(A)
-- Step 2: Test whether A is divisible by any prime number less than K. If yes A is not a prime number. If not, A is prime number.
-- Find out whether 337 is a prime number or not?
-- Step 1: 19 ¿ square root (337) Prime numbers less than 19 are 2, 3, 5, 7, 11, 13, 17 Step 2: 337 is not divisible by any of them
-- Therefore 337 is a prime number
