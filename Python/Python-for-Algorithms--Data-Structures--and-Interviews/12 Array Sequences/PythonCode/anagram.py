def anagram(s1, s2):
    s1 = s1.replace(" ", "")
    s2 = s2.replace(" ", "")
    return sorted(s1) == sorted(s2)


# print anagram("god", "dog")
# print anagram("clint eastwood", "old west action")


def anagram2(s1, s2):
    s1 = s1.replace(" " , "")
    s2 = s2.replace(" " , "")

    if len(s1) != len(s2):
        return False

    count = {}

    for letter in s1:
        if letter in count:
            count[letter] += 1
        else:
            count[letter] = 1

    for letter in s2:
        if letter in count:
            count[letter] -= 1
        

anagram2("gdog", "godg")
"""
RUN THIS CELL TO TEST YOUR SOLUTION
"""
from nose.tools import assert_equal


class AnagramTest(object):
    def test(self, sol):
        assert_equal(sol('go go go', 'gggooo'), True)
        assert_equal(sol('abc', 'cba'), True)
        assert_equal(sol('hi man', 'hi     man'), True)
        assert_equal(sol('aabbcc', 'aabbc'), False)
        assert_equal(sol('123', '1 2'), False)
        print "ALL TEST CASES PASSED"


# Run Tests
t = AnagramTest()
t.test(anagram)