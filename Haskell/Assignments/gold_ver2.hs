-- import Debug.Trace
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
-- isPrime n = null [x | x <- primes,  n `mod` x == 0  ]
isPrime k = null [ x | x <- [2..iSqrt k], k `mod`x  == 0]

-- Every odd composite number can be expressed as the sum of a prime and twice a square. E.g., 35 = 17 + 2*(3^2); 99 = 67 + 2*(4^2)
-- takes a list of oddsForm3 and uses the goldbachs equation using k = p such that (g - p)/2

-- null (isPrime is to take away the pool of prime numbers)
gold :: Integer -> [Integer]
gold g = [ n | n <-takeWhile (\x->x<g) primes,  isASquare ((g-n) `div` 2) ]

-- checkOddComp coc = takeWhile odd [n | n <- primes, n < n+1 ]

-- Every odd composite number can be expressed as the sum of a prime and twice a square.
-- looks at the list of oddsForms of non prime numbers which is a composite number and sees if the goldbachs
-- conjecture fails by seeing if the list is null

checkGold :: [Integer]
checkGold = take 2 [oddNum |oddNum <- oddsFrom3, null (gold oddNum),  not (isPrime oddNum) ]

-- Every odd composite number can be expressed as the sum of a prime and twice a square. E.g., 35 = 17 + 2*(3^2); 99 = 67 + 2*(4^2)

-- chkgold = take 2 [(oddNum, primeNum) | oddNum <- oddsFrom3, primeNum <- primes, null(isSquare((oddNum - primeNum) `div` 2)) ]




-- E.g., 35 = 17 + 2*(3^2); 99 = 67 + 2*(4^2).
-- The assignment is to write a program that finds the two smallest numbers for which Goldbach’s other
-- conjecture does not hold and then stops.



-- every even integer can be expresed with two odd numbers

-- Every even integer > 4 can be written as the sume of two primes
-- List all the pairs of prime numbers whose sum is 36
