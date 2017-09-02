str :: [Char]
str = "hello"

foo :: Int -> Int
foo x = 2 * x + 1

add3Int :: Int -> Int -> Int -> Int
add3Int x y z = x + y + z

length_ints :: [Int] -> Int
length_ints [] = 0
length_ints (x:xs) = length_ints xs + 1

length_chars :: [Char] -> Int
length_chars [] = 0
length_chars (x:xs) = length_chars xs + 1

length' :: [a] -> Int
length' [] = 0
length' (x:xs) = length' xs + 1

empty_list :: [a]
empty_list = []

head' :: [a] -> a
head' (x : xs) = x

sum' :: Num a => [a] -> a
sum' [] = 0
sum' (x : xs) = x + sum' xs

showSum :: (Num a, Show a) => [a] -> [Char]
showSum xs = show (sum xs)