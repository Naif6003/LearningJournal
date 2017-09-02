oddsFrom3 = [3, 5 .. ]

primes = 2 : [n | n <- oddsFrom3, null (primeDivisors n)]
primeDivisors n = [d | d <- takeWhile (\x -> x^2 <= n) primes, n `mod` d == 0]
