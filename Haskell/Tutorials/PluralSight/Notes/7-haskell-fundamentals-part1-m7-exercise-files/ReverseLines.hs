reverseLines :: String -> String
reverseLines input =
  unlines (map reverse (lines input))

main :: IO ()
main = interact reverseLines