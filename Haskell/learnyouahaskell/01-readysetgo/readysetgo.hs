-- doubleMe x = x + x
--
-- doubleUs x y = x*2 + y*2
--
-- doubleUs2 x y = doubleMe x + doubleMe y
--
-- doubleSmallNumber x = if x > 100
--                         then x
--                         else x*2
--
-- conanO'Brien = "It's a-me, Conan O'Brien!"
--
-- -- list comprehension
-- -- [x*2 | x <- [1..10]]
-- -- [x*2 | x <- [1..10], x*2 >= 12]
-- -- [2,4,6,8,10,12,14,16,18,20]
--
-- boomBangs xs = [ if x < 10 then "BOOM!" else "BANG!" | x <- xs, odd x]
-- -- boomBangs [7..13]
-- ["BOOM!","BOOM!","BANG!","BANG!"]

-- let lostNumbers = [4,8,15,16,23,42]

oddsFrom3 = [3, 5 .. ]

primes = 2 : [n | n <- oddsFrom3, null (primeDivisors n)]
primeDivisors n = [d | d <- takeWhile (\x -> x^2 <= n) primes, n `mod` d == 0]
