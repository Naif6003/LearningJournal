import Debug.Trace
-- primes = 2 : [trace (show p ++ " is prime. ")  p | p <- oddsFrom3, trace (show p) (null  (primeDivisors p))]


oddsFrom3 :: [Integer]
oddsFrom3 = [3,5..]

-- this is taking an input Integer and outputs a list of all possible primes
primeDivisors :: Integer -> [Integer]
primeDivisors n = [d | d <- takeWhile (\x -> x^2 <= n) primes, n `mod` d == 0]

-- the primes function takes a list of odd integers and a list of primes
primes :: [Integer]
primes = 2 : [n | n <- oddsFrom3, null  (primeDivisors n)]

iSqrt :: (Integral b, Integral a) => a -> b
iSqrt n = floor (sqrt (fromIntegral n))


isASquare :: Integral a => a -> Bool
isASquare n = (iSqrt n) ^ 2 == n


isPrime :: Integer -> Bool
isPrime k = null [ x | x <- takeWhile(\x-> x < k) primes, k `mod` x == 0   ]


gold :: Integer -> [Integer]
gold g = [ n | n <-takeWhile (\x->x<g) primes,  isASquare ((g-n) `div` 2) ]


checkGold :: [Integer]
checkGold = take 2 [g |g <- oddsFrom3, null (gold g),  not (isPrime g) ]

-- For each odd non-prime g determine if there is a p and k such that
-- g = p + 2 * k^2. If there is no p and k, g is one of the numbers you are looking for.
-- 3.  	Caution: If you use brute force to try all combinations of p and k, your program will
-- run for a very long time. Instead, look for a prime p such that (g - p)/2 is a square.

-- Goldbach’s other conjecture (disproved): Every odd composite number can be expressed as the sum of a prime and twice a square. E.g., 35 = 17 + 2*(3^2); 99 = 67 + 2*(4^2).
-- The assignment is to write a program that finds the two smallest numbers for which Goldbach’s other conjecture does not hold and then stops.
-- In other words, write a program that finds the first two non-prime odd numbers so that for each there is no prime p and integer k > 0 such that the number is equal to p + 2 * k^2.
-- As a head start, we will develop some code that generates the prime numbers.
