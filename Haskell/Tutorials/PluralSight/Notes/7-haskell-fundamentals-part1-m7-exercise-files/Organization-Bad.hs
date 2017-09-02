-- this program has way too much IO!
-- See Organization-Good.hs for a better version

encrypt :: Char -> Char
encrypt c
  | 'A' <= c && c < 'Z' = 
      toEnum (fromEnum 'A' + 1)
  | c == 'Z' = 'A'
  | otherwise = c

handleChar :: IO ()
handleChar = do
  c <- getChar
  let u = encrypt c
  putChar c

inputLoop :: IO ()
inputLoop = do
  handleChar
  inputLoop

main :: IO ()
main = inputLoop