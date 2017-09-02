-- Basic Functions
square x = x * x

multMax a b x = (max a b) * x

posOrNeg x =
  if x >= 0
  then "Positive"
  else "Negative"

-- Recursion

pow2 n =
  if n == 0
  then 1
  else 2 * (pow2 (n-1))

repeatString str n =
  if n == 0
  then ""
  else
  str ++ (repeatString str (n-1))

pow2'1 n = pow2loop n 1 0
pow2loop n x i =
  if i < n
  then pow2loop n (x*2) (i+1)
  else x

-- List Functions

double nums =
  if null nums
  then []
  else (2 * (head nums)) : (double (tail nums))

removeOdd nums =
  if null nums
  then []
  else
    if (mod (head nums) 2) == 0 -- even?
    then (head nums) : (removeOdd (tail nums))
    else removeOdd (tail nums)

-- Tuples
headAndLength list = (head list, length list)

-- Pattern Matching
fst' (a,b) = a

snd' (a,b) = b

null' [] = True
null' (x : xs) = False

head' (x : xs) = x
head' [] = error "head of empty list"

double'1 [] = []
double'1 (x : xs) = (2 * x) : (double xs)

-- Guards
pow2'2 n
  | n == 0    = 1
  | otherwise = 2 * (pow2 (n-1))

removeOdd' [] = []
removeOdd' (x : xs)
  | mod x 2 == 0 = x : (removeOdd xs)
  | otherwise    = removeOdd xs

-- Case
double'2 nums = case nums of
  []       -> []
  (x : xs) -> (2 * x) : (double xs)

anyEven nums = case (removeOdd nums) of
  []       -> False
  (x : xs) -> True

-- Let and Where
fancySeven =
  let a = 3
  in 2 * a + 1

fancyNine =
  let x = 4
      y = 5
  in x + y

numEven nums =
  let evenNums = removeOdd nums
  in length evenNums

fancySeven' = 2 * a + 1
  where a = 3

fancyNine' = x + y
  where x = 4
        y = 5

fancyTen = 2 * (let a = 4 in a + 1)

-- Whitespace
pairMax p = max (fst p)
              (snd p)

-- Lazy
intsFrom n = n : (intsFrom (n+1))
ints = intsFrom 1

