######################################### USING PYTHON FUNCTIONS ###########################
def rev_word1(s):
    return " ".join(reversed(s.split()))

######################################### USING PYTHON FUNCTIONS ###########################
def rev_word2(s):
    return " ".join(s.split()[::-1])

def rev_word(s):
    words = []  # create an empty list of your words
    chars = []  # create an empty list of characters

    if len(s) < 0:
        return

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



print rev_word('Hi John,   are you ready to go?')
print rev_word('    space before')

print rev_word(('    space before'))
print rev_word(('space after     '))
print rev_word(('   Hello John    how are you   '))
print rev_word(('1'))





"""
RUN THIS CELL TO TEST YOUR SOLUTION
"""

# from nose.tools import assert_equal
#
#
# class ReversalTest(object):
#     def test(self, sol):
#         assert_equal(sol('    space before'), 'before space')
#         assert_equal(sol('space after     '), 'after space')
#         assert_equal(sol('   Hello John    how are you   '), 'you are how John Hello')
#         assert_equal(sol('1'), '1')
#         print "ALL TEST CASES PASSED"
#
#
# # Run and test
# t = ReversalTest()
# t.test(rev_word)
