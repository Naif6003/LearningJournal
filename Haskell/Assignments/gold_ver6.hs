import Debug.Trace
-- primes = 2 : [trace (show p ++ " is prime. ")  p | p <- oddsFrom3, trace (show p) (null  (primeDivisors p))]

-- creates a list of odd integers
oddsFrom3 :: [Integer]
oddsFrom3 = [3,5..]

--this function looks within the prime list and sees if it's divisible by n input and if it is, it's not a prime number
primeDivisors :: Integer -> [Integer]
primeDivisors n = [d | d <- takeWhile (\x -> x^2 <= n) primes, n `mod` d == 0]


-- the primes function puts a list of prime numbers using the primeDivisors function which checks if n is a perfect
primes :: [Integer]
primes = 2 : [n | n <- oddsFrom3, null  (primeDivisors n)]

--   sqrt can only be applied to Floating-point numbers, using fromIntegral to explicitly convert floating-point numbers
iSqrt :: (Integral b, Integral a) => a -> b
iSqrt n = floor (sqrt (fromIntegral n))

-- calculates the the square root by it's input and checks if it's an integer
isASquare :: Integral a => a -> Bool
isASquare n = (iSqrt n) ^ 2 == n

-- isPrime looks at every number before g, and if it is divisible by any of those prime to check if it's a prime
isPrime :: Integer -> Bool
isPrime k = null [ x | x <- takeWhile(\x-> x < k) primes, k `mod` x == 0   ]

-- isASquare ((g-n) `div` 2) is what we are looking for integer k. If it's an integer within the list of primes.
-- -- g = p + 2(k)^2
listOfGoldNumbers :: Integer -> [Integer]
listOfGoldNumbers g = [ p | p <-takeWhile (\x->x<g) primes,  isASquare ((g-p) `div` 2) ]


-- not isPrime g will return false if it's a prime, and therefore not false returns true.
-- we are looking for an empty list which checks if it fails the goldbachs conjecture.
checkGold :: [Integer]
checkGold = take 2 [ g |g <- oddsFrom3,  not (isPrime g), null (listOfGoldNumbers g)  ]
