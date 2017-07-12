class Stack(object):
    def __init__(self):
        self.items=[]

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[len(self.items)-1]

    def size(self):
        return len(self.items)


s = Stack()
print s.isEmpty()
s.push(1)
s.push('two')
s.peek()
s.push(True)
s.size()


# Stack() creates a new stack that is empty.  It needs no parameters and returns an empty stak

#push(item) adds a new item to the top of the stack.  It needs the items and returns nothing

# pop() removes the top item from the stack.  It needs no parameters and returns the item.  The stack is modified

#peek() returns the top item from the stack but does not remove it.  It needs no parameters and the stack is not modified.

# isEmpty() tests to see wheter the stack is empty.  It needs no parameters and returns a boolean value

# size() returns the number of items on the stack.  It needs no parameters and returns an integer

