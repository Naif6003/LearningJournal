# Array Pair Sum
# Problem
#
# Given an integer array, output all the unique pairs that sum up to a specific value k.
#
# So the input:
#
# pair_sum([1,3,2,2],4)
#
# would return 2 pairs:
#
#  (1,3)
#  (2,2)
#
# NOTE: FOR TESTING PURPOSES CHANGE YOUR FUNCTION SO IT OUTPUTS THE NUMBER OF PAIRS
# Solution
#
# Fill out your solution below:



def pair_sum(arr, k):
    if len(arr) < 2:
        return

    # Sets for tracking
    seen = set()
    output = set()

    # For every number in array
    for num in arr:

        # Set target difference
        target = k - num

        # Add it to set if target hasn't been seen
        if target not in seen:
            seen.add(num)

        else:
            # Add a tuple with the corresponding pair
            output.add((min(num, target), max(num, target)))
            # FOR TESTING

    # Nice one-liner for printing output
    print '\n'.join(map(str, list(output)))
    return len(output)


pair_sum([1,3,2,2,4,0],4)

"""
RUN THIS CELL TO TEST YOUR SOLUTION
"""

print '\n\n'
from nose.tools import assert_equal

class TestPair(object):

    def test(self,sol):
        assert_equal(sol([1,9,2,8,3,7,4,6,5,5,13,14,11,13,-1],10),6)
        assert_equal(sol([1,2,3,1],3),1)
        assert_equal(sol([1,3,2,2],4),2)
        print 'ALL TEST CASES PASSED'

#Run tests
t = TestPair()
t.test(pair_sum)
