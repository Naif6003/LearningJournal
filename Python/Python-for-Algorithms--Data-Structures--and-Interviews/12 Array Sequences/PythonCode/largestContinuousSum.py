# #######################################
def large_cont_sum(arr):
    max_sum = current_sum = arr[0]

    i = start = finish = 0

    for j in range(1, len(arr)):
        if

    pass

print large_cont_sum([1,2,-1,3,4,10,10,-10,-1])
print large_cont_sum([-2, -3, 4, -1, -2, 1, 5, -3])

# ############################### ORIGINAL #1    ###################
# def large_cont_sum(arr):
#     # Check to see if array is length 0
#     if len(arr) == 0:
#         return 0
#
#     # Start the max and current sum at the first element
#     max_sum = current_sum = arr[0]
#
#     # For every element in array
#     for num in arr[1:]:
#         # Set current sum as the higher of the two
#         current_sum = max(current_sum + num, num)
#
#         # Set max as the higher between the currentSum and the current max
#         max_sum = max(current_sum, max_sum)
#
#     return max_sum
# print large_cont_sum([1,2,-1,3,4,10,10,-10,-1])
# print large_cont_sum([-2, -3, 4, -1, -2, 1, 5, -3])


#################################   CORRECT     ################################
# def large_cont_sum(arr):
#     current_sum = max_sum = arr[0]
#     start = finish = 0
#     for num in arr[1:]:
#         if num > current_sum + num:
#             current_sum = num
#         else:
#             current_sum += num
#
#         if current_sum > max_sum:
#             max_sum = current_sum
#
#     return max_sum
# print large_cont_sum([1,2,-1,3,4,10,10,-10,-1])
# print large_cont_sum([-2, -3, 4, -1, -2, 1, 5, -3])


################################### CORRECT ################################
# def large_cont_sum(arr):
#     current_sum = max_sum = arr[0]
#     i = start = finish= 0
#     for j in range(1, len(arr)):
#         if arr[j] > (current_sum + arr[j]):
#             current_sum = arr[j]
#             i = j
#         else:
#             current_sum += arr[j]
#
#         if current_sum > max_sum:
#             max_sum = current_sum
#             start = i
#             finish = j
#     print "start => ", start
#     print "finish => ", finish
#     print "MAX SUM -> ", max_sum
# print large_cont_sum([1,2,-1,3,4,10,10,-10,-1])
# print large_cont_sum([-2, -3, 4, -1, -2, 1, 5, -3])

######################################## ORIGINAL #2 ################################3
# def maxSubArray(ls):
#     if len(ls) == 0:
#         raise Exception("Array empty")  # should be non-empty
#
#     runSum = maxSum = ls[0]
#     i = start = finish = 0
#
#     for j in range(1, len(ls)):
#         if ls[j] > (runSum + ls[j]):
#             runSum = ls[j]
#             i = j
#         else:
#             runSum += ls[j]
#
#         if runSum > maxSum:
#             maxSum = runSum
#             start = i
#             finish = j
#
#     print "maxSum =>", maxSum
#     print "start =>", start, "; finish =>", finish
# # maxSubArray([-2, 11, -4, 13, -5, 2])
# # maxSubArray([-15, 29, -36, 3, -22, 11, 19, -5])
# maxSubArray([1,2,-1,3,4,10,10,-10,-1])
# maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3])
######################################## TESTER ################################3


# from nose.tools import assert_equal
# class LargeContTest(object):
#     def test(self, sol):
#         assert_equal(sol([1, 2, -1, 3, 4, -1]), 9)
#         assert_equal(sol([1, 2, -1, 3, 4, 10, 10, -10, -1]), 29)
#         assert_equal(sol([-1, 1]), 1)
#         print 'ALL TEST CASES PASSED'
#
#
# # Run Test
# t = LargeContTest()
# t.test(large_cont_sum)