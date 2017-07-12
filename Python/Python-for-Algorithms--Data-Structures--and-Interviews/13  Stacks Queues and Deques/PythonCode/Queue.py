class Queue:
    def __init__(self):
        self.items=[]

    def isEmpty(self):
        return self.items ==[]

    def enqueue(self, item):
        self.items.insert(0,item)

    def dequeue(self):
        return self.items.pop()

    def size(self):
        return len(self.items)



q = Queue()
q.size()
q.isEmpty()

q.enqueue(1)
q.enqueue(2)
q.dequeue()

# Queue() creates a new queue that is empty. It needs no parameters and returns an empty queue

#enqueue(item) adds a new item to the rear of the queue.  It needs the item and returns nothing

# deque() removes the front item from the queue.  It needs no parameters and returns the item.  The queue is modified
#
# isEmpty() tests to see wheter the queue is empty.  It needs no parameters and returns a boolean value

#size() returns the number of items in the queue.  it needs no paramter and returns an integer