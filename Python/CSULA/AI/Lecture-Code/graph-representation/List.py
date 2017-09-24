# class List(object):
#     def __init__(self):
#         self.memory = []
#         self.length = 0
#
#     def get(self):
#         self.memory[self]
#
#     def push(self):
#         self.memory[self.length] = self.value
#

# somelist = [0,3,5,2,6,2,4]
# for i, v in reversed(list(enumerate(somelist))):
# 	if v%2==0: somelist.pop(i)

somelist = [0,3,5,2,6,2,4]
# print reversed((len(somelist)))
for i in reversed(range(len(somelist))):
	if somelist[i]%2==0:somelist.pop(i)