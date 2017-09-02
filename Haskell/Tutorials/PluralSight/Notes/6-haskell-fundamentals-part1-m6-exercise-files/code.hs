-- Type Class Instances
elem' :: Eq a => a -> [a] -> Bool
elem' _ [] = False
elem' x (y : ys)
  | x == y    = True
  | otherwise = elem' x ys
  
data RGB = RGB Int Int Int

colors = [RGB 255 0 0, RGB 0 255 0, RGB 0 0 255]
green = RGB 0 255 0
greenInColors = elem' green colors

instance Eq RGB where
  (RGB r1 g1 b1) == (RGB r2 g2 b2) =
    (r1 == r2) && (g1 == g2) && (b1 == b2)
    
instance Show RGB where
  show (RGB r g b) =
    "RGB " ++ (show r) ++ " " ++ (show g) ++ " " ++ (show b)
    
-- Instances for Parametrized Types

data Maybe' a = Nothing' | Just' a

instance (Eq a) => Eq (Maybe' a) where
  Nothing' == Nothing' = True
  Nothing' == (Just' _) = False
  (Just' _) == Nothing' = False
  (Just' x) == (Just' y) = x == y
  
-- Deriving Type Class Instances
data Person = Person String Int Int
instance Eq Person where
  (Person name1 age1 height1) ==
    (Person name2 age2 height2) =
      (name1 == name2) && (age1 == age2) &&
      (height1 == height2)

-- Defining Type Classes

-- Eq class definition commented out to avoid conflict with standard Eq class
--class Eq a where
--  (==) :: a -> a -> Bool
--  (/=) :: a -> a -> Bool
--  
--  x /= y = not (x == y)
--  x == y = not (x /= y)
  
data Point2 = Point2 Double Double
  deriving Show
data Point3 = Point3 Double Double Double
  deriving Show

distance2 :: Point2 -> Point2 -> Double
distance2 (Point2 x1 y1) (Point2 x2 y2) =
  sqrt (dx * dx + dy * dy)
  where dx = x1 - x2
        dy = y1 - y2
        
distance3 :: Point3 -> Point3 -> Double
distance3 (Point3 x1 y1 z1) (Point3 x2 y2 z2) =
  sqrt (dx * dx + dy * dy + dz * dz)
  where dx = x1 - x2
        dy = y1 - y2
        dz = z1 - z2
        
pathLength2 :: [Point2] -> Double
pathLength2 [] = 0
pathLength2 (_ : []) = 0
pathLength2 (p0 : p1 : ps) =
  distance2 p0 p1 + pathLength2 (p1 : ps)
  
pathLength3 :: [Point3] -> Double
pathLength3 [] = 0
pathLength3 (_ : []) = 0
pathLength3 (p0 : p1 : ps) =
  distance3 p0 p1 + pathLength3 (p1 : ps)
  
class Measurable a where
  distance :: a -> a -> Double

instance Measurable Point2 where
  distance = distance2
  
instance Measurable Point3 where
  distance (Point3 x1 y1 z1) (Point3 x2 y2 z2) =
    sqrt (dx * dx + dy * dy + dz * dz)
    where dx = x1 - x2
          dy = y1 - y2
          dz = z1 - z2
        
instance Measurable Double where
  distance x y = abs (x - y)
  

pathLength :: Measurable a => [a] -> Double
pathLength [] = 0
pathLength (_ : []) = 0
pathLength (p0 : p1 : ps) =
  distance p0 p1 + pathLength (p1 : ps)
  
class (Measurable a, Show a) => Directions a where
  getDirections :: a -> a -> String
  getDirections p1 p2 =
    "Go from " ++ (show p1) ++
    " towards " ++ (show p2) ++
    " and stop after " ++ (show (distance p1 p2))
    
instance Directions Point3 where
  getDirections p1 p2 =
    "Fly from " ++ (show p1) ++
    " towards " ++ (show p2) ++
    " and stop after " ++ (show (distance p1 p2))
    
instance Directions Point2 where