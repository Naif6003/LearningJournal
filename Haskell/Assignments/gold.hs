-- import Debug.Trace
-- primes = 2 : [trace (show p ++ " is prime. ")  p | p <- oddsFrom3, trace (show p) (null  (primeDivisors p))]

-- creating a list of odd numbers
oddsFrom3 :: [Integer]
oddsFrom3 = [3, 5 .. 6000]

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
isPrime n = n `elem` primes

-- takes a list of oddsForm3 and uses the goldbachs equation using k = p such that (g - p)/2
gold :: Integer -> [Integer]
gold g = [ p | p <- oddsFrom3,  isASquare ((g-p) `div` 2) ,   isPrime p ]

-- Every odd composite number can be expressed as the sum of a prime and twice a square.
-- looks at the list of oddsForms of non prime numbers which is a composite number and sees if the goldbachs
-- conjecture fails by seeing if the list is null
checkGold :: [Integer]
checkGold = [n |n <- oddsFrom3, not (isPrime n), null (gold n)]
