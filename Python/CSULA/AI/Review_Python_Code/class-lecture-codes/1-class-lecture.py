class Student(object):
    static_type = 'student'
    def __init__(self, name):
        self.name=name
    def getName(self):
        return self.name


joe =  Student("joe")
print joe.getName()
print Student.static_type