def splitStrings(s):

    words = []  # create an empty list of your words
    chars = []  # create an empty list of characters

    for char in s:

        if char is " " and chars:  # if the character is a space and we've stored some chars
            words.append("".join(chars))  # combine the stored chars into a word and add it to
            # the word lise

            chars = []  # clear out the stored chars

        elif char is not " ":
            chars.append(char)  # otherwise, store the char if it's not a space

    if chars:
        words.append("".join(chars))  # add the last word found to the word list

    words = reverse(words)
    return words



def reverse(s):
    sentence = ""
    length = len(s) - 1
    while length >= 0:
        sentence += "".join(s[length]) + " "
        length-=1
    return sentence



print splitStrings('Hi John,   are you ready to go?')
# print rev_word('Hi John,   are you ready to go?')
# print rev_word('    space before')






