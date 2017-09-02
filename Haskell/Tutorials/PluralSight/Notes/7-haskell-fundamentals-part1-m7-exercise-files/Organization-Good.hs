encrypt :: Char -> Char
encrypt c
  | 'A' <= c && c < 'Z' = 
      toEnum (fromEnum 'A' + 1)
  | c == 'Z' = 'A'
  | otherwise = c

main :: IO ()
main = interact (map encrypt)