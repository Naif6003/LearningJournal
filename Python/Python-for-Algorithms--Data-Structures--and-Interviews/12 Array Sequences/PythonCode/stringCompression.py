# String Compression
# Problem
# Given a string in the form 'AAAABBBBCCCCCDDEEEE' compress it to become 'A4B4C5D2E4'.
# For this problem, you can falsely "compress" strings of single or double letters.
# For instance, it is okay for 'AAB' to return 'A2B1' even though this technically takes more space.
# The function should also be case sensitive, so that a string 'AAAaaa' returns 'A3a3'.

#order (n) complexity.  linear
#it's called the run length compression algorithm.  running without checking
#######################################################################################################################
# def compress(s):
#     """
#     This solution compresses without checking. Known as the RunLength Compression algorithm.
#     """
#     # Begin Run as empty string
#     r = ""
#     l = len(s)
#
#     # Check for length 0
#     if l == 0:
#         return ""
#
#     # Intialize Values
#     # last = s[0]
#     cnt = 1
#     i = 1
#
#     while i < l:
#
#         if l == 1:
#             return s + "1"
#
#         # Check to see if it is the same letter
#         if s[i] == s[i - 1]:
#             # Add a count if same as previous
#             cnt += 1
#         else:
#             # Otherwise store the previous data
#             r = r + s[i - 1] + str(cnt)
#             cnt = 1
#
#         # Add to index count to terminate while loop
#         i += 1
#
#     # Put everything back into run
#     r = r + s[i - 1] + str(cnt)
#     return r
# print compress('AAAAABBBBCCCC')

#######################################################################################################################
def compress(string):

    length = len(string)
    stringLine = ""
    i = 1
    count = 1

    if length is 0:
        return ""

    while i < length:
        if length is 1:
            return string[0]+"1"

        if string[i] is string[i-1]:
            count += 1
        else:
            # [i-1] because loop started at 1 so we need to subtract 1
            stringLine = stringLine + string[i-1] + str(count)
            # print stringLine
            count = 1
        i += 1
    stringLine = stringLine + string[i - 1] + str(count )

    return stringLine

print compress("AAAAABBBBBCCCCCaaaattttZZZZBBB")

"""
RUN THIS CELL TO TEST YOUR SOLUTION
"""
from nose.tools import assert_equal

class TestCompress(object):

    def test(self, sol):
        assert_equal(sol(''), '')
        assert_equal(sol('AABBCC'), 'A2B2C2')
        assert_equal(sol('AAABCCDDDDD'), 'A3B1C2D5')
        print 'ALL TEST CASES PASSED'

# Run Tests
t = TestCompress()
t.test(compress)