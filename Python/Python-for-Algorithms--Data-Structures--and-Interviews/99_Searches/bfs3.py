GRAPH = {1: [2, 3], 2: [4, 5], 3: [6], 4: None, 5: [7, 8], 6: None, 7: None, 8: None}


def BFS(start, target, GRAPH):
    'Use a QUEUE to search.'
    # print "Source:", source, "Target:", target
    queue = [start]
    visited = []

    while len(queue) > 0:
        x = queue.pop(0)

        if x == target:
            visited.append(x)
            return visited
        elif x not in visited:
            visited = visited + [x]
            if GRAPH[x] is not None:
                'add nodes at the END of the queue'
                queue = queue + GRAPH[x]

    return visited


def DFS(start, target, GRAPH):
    'Use a STACK to search.'
    # print "Source:", source, "Target:", target
    stack = [start]
    visited = []

    while len(stack) > 0:
        x = stack.pop(0)

        if x == target:
            visited.append(x)
            return visited
        elif x not in visited:
            visited = visited + [x]
            if GRAPH[x] is not None:
                'add nodes at the top of the stack'
                stack = GRAPH[x] + stack

    return visited


print ("BFS Path", BFS(1, 7, GRAPH))
print ("DFS Path", DFS(1, 7, GRAPH))
print ("=" * 80)
print ("BFS Path", BFS(1, 3, GRAPH))
print ("DFS Path", DFS(1, 3, GRAPH))

graph1 = {
    'A' : ['B','S'],
    'B' : ['A'],
    'C' : ['D','E','F','S'],
    'D' : ['C'],
    'E' : ['C','H'],
    'F' : ['C','G'],
    'G' : ['F','S'],
    'H' : ['E','G'],
    'S' : ['A','C','G']
}

def dfs(graph, node, visited):
    if node not in visited:
        visited.append(node)
        for n in graph[node]:
            dfs(graph,n, visited)
    return visited

visited = dfs(graph1,'A', [])
print(visited)

# class DFSGraph(Graph):
#     def __init__(self):
#         super().__init__()
#         self.time = 0
#
#     def dfs(self):
#         for aVertex in self:
#             aVertex.setColor('white')
#             aVertex.setPred(-1)
#         for aVertex in self:
#             if aVertex.getColor() == 'white':
#                 self.dfsvisit(aVertex)
#
#     def dfsvisit(self,startVertex):
#         startVertex.setColor('gray')
#         self.time += 1
#         startVertex.setDiscovery(self.time)
#         for nextVertex in startVertex.getConnections():
#             if nextVertex.getColor() == 'white':
#                 nextVertex.setPred(startVertex)
#                 self.dfsvisit(nextVertex)
#         startVertex.setColor('black')
#         self.time += 1
#         startVertex.setFinish(self.time)