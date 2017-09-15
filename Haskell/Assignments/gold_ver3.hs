import Debug.Trace

oddsFrom3 :: [Integer]
oddsFrom3 = [3, 5 .. ]

primeDivisors :: Integer -> [Integer]
primeDivisors n = [d | d <- takeWhile (\x -> x^2 <= n) primes, n `mod` d == 0]

primes :: [Integer]
primes = 2 : [n | n <- oddsFrom3, null  (primeDivisors n)]

iSqrt :: (Integral b, Integral a) => a -> b
iSqrt n = floor (sqrt (fromIntegral n))


isASquare :: Integral a => a -> Bool
isASquare n = (iSqrt n) ^ 2 == n


isPrime :: Integer -> Bool
isPrime n = n `elem` primes



oddComp oc =takeWhile odd [n | n<-oddsFrom3, not(isPrime n), isASquare((oc - n) `div` 2), n < n+1]


  --  isASquare ((g-n) `div` 2)
-- checkGold = take 2 [oddNum |oddNum <- oddsFrom3, null (gold oddNum)]



-- oc = 2 : [trace (show p ++ " is prime. ")  p | p <- oddsFrom3, trace (show p) (null  (primeDivisors p))]
