
-- we us this for list of odd composite integers and to create primes for Goldbach's Conjecture
oddsFrom3 :: [Integer]
oddsFrom3 = [3,5..]


-- the input is the list of odds, function is a list of infinite primes, outputs a list of primes
primes :: [Integer]
primes = 2 : [n | n <- oddsFrom3, null  (primeDivisors n)]

-- the input is the current list of primes, the function looks at primes if it's divisible by itself or nth input of primes list,
-- and outputs a list
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


-- listOfGoldNumbers :: Integer -> [Integer]
-- listOfGoldNumbers g = [ p | p <-takeWhile (\x->x<g) primes,  isASquare ((g-p) `div` 2) ]

-- gets an Integer as an input, the function is statisfing goldbachs conjecture of odd numbers
-- where there is a prime is added to an integer k sqaured such that there is an odd composite number
-- it outputs a list of tuples that are odd composite numbers
goldbachPairs :: Integer -> [(Integer, Integer)]
goldbachPairs g = [(p, k) | k <- takeWhile (\n -> 2*n^2 < g) [1 .. ], let p = g - 2*k^2, isPrime p]


-- It takes a list of odds, the function is statisfing to disprove goldbachs conjecture of odd composite numbers
-- it outputs a list of Integers
checkGold :: [Integer]
checkGold = take 2 [ g |g <- oddsFrom3,  not (isPrime g), null (goldbachPairs g)  ]



-- Don't forget that Goldbach's conjecture says that for every odd composite number g there is a prime p and
-- an integer k such g = p + 2*k^2. You should be able to explain how this code finds numbers that fail
-- Goldbach's conjecture. The key term is "there is." Use that in your explanation.

-- not isPrime g will return false if it's a prime, and therefore not false returns true.
-- we are looking for an empty list which checks if it fails the goldbachs conjecture.


-- for every odd composite number g, there is a prime and an integer K
