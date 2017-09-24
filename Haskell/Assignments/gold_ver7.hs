-- we us this for list of odd composite integers and to create primes for Goldbach's Conjecture
oddsFrom3 :: [Integer]
oddsFrom3 = [3,5..]
-- the input is the list of odds, function is a list of infinite primes, outputs a list of primes
primes :: [Integer]
primes = 2 : [n | n <- oddsFrom3, null  (primeDivisors n)]

-- the input is the current list of primes, the function looks at primes if it's divisible by itself or nth input of primes list,
-- and outputs a list
--primeDivisors n = [d | d <- [2..n-1], n `mod` d == 0]
primeDivisors :: Integer -> [Integer]
primeDivisors n = [d | d <- takeWhile (\x -> x^2 <= n) primes, n `mod` d == 0]

-- The input is an integer and the function, the function floors the inputs sqaure and outputs an integer
iSqrt :: (Integral b, Integral a) => a -> b
iSqrt n = floor (sqrt (fromIntegral n))
--   sqrt can only be applied to Floating-point numbers, using fromIntegral to explicitly convert floating-point numbers

--  The input is an integer and the function checks the integer is ractional or irrational, it outputs a Boolean or T/F
isASquare :: Integral a => a -> Bool
isASquare n = (iSqrt n) ^ 2 == n

-- the input is an Integer and the function looks at the list of primes, and outputs a boolean if its in or not in the primes list
isPrime :: Integer -> Bool
isPrime k = null [ x | x <- takeWhile(\x-> x < k) primes, k `mod` x == 0   ]

-- Takes one parameter g and returns a list of (p,k) pairs where p is prime and g = p + 2*k^2.


goldbachPrimes :: Integer -> [Integer]

--(g - p)/2 = k ** 2tOfGoldNumbers g = [ p | p <-takeWhile (\x->x<g) primes,  isASquare ((g-p) `div` 2) ]
--g = p + 2 * k ** 2
--g - p = 2 * k ** 2
--k = sqrt ((g-p)/2)
-- k^2 = (g-p)/2
-- goldbachPairs g = [(p, k) | k <- takeWhile (\n -> 2*n^2 < g) [1 .. ], let p = g - 2*k^2, isPrime p]
-- goldbachPairs g = [(p, k) | p <- takeWhile (\n -> n < g) [ 1 ..], isPrime p, let k = floor (sqrt (fromIntegral((g-p)`div` 2))), g == p + 2*k^2]
-- goldbachPairs g = [(p, k) | p <- takeWhile (\n -> n < g) [ 1 ..], isPrime p, k <- takeWhile (\n -> n < g) [ 1 ..], g == p + 2*k^2]

-- Takes on parameter g and returns a list of prime numbers such that (g-p)/2 is a perfect square
goldbachPrimes g = [ p | p <-takeWhile (\x->x<g) primes,  isASquare ((g-p) `div` 2) ]

--  2 numbers that fails the goldback concept which g not prime and empty list from goldbackPairs
checkGold :: [Integer]
checkGold = take 2 [ g |g <- oddsFrom3,  not (isPrime g), null (goldbachPrimes g)  ]


-- Goldbach Conjecture says for every odd composite number, there is a prime that and two time integer sqaured
-- for every odd composite number g, there is a prime and an integer K
