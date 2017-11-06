class Character(object):

    def __init__(self, x, y, size = None):
        self.x = x
        self.y = y
        self.size = size
        self.alive = True

    def poof(self):
        self.alive = False
        print('Poof!')

class Maryo(Character):

    def say_hi(self):
        if self.alive:
            print( "It's me! Maryo!")
        else:
            print( "This Maryo disappeared")

class Tree(Character):

    def grow(self):
        if self.alive:
            self.size += 1
            print( 'Grew to be %s meters tall!' % self.size)
        else:
            print( 'This tree disappeared')

class Monster(Character):

    def eat(self):
        if self.alive:
            self.size += 5
            print( 'Yum!')
        else:
            print( 'This monster disappeared')

m, t, o = Maryo(50, 0), Tree(60, 0, 3), Monster(85, 10, 5)
print(t.size)
t.grow()
print(o.size)
m.say_hi()