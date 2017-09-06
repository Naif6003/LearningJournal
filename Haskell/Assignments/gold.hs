import Debug.Trace

oddsFrom3 = [3, 5 .. 6000]

-- primes = 2 : [n | n <- oddsFrom3, null (primeDivisors n)]
primeDivisors n = [d | d <- takeWhile (\x -> x^2 <= n) primes, n `mod` d == 0]


primes = 2 : [trace (show p ++ " is prime.")  p | p <- oddsFrom3, trace (show p) (null  (primeDivisors p))]
