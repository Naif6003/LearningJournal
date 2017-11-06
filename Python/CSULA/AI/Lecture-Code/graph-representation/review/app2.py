class Node(object):
    """Node represents basic unit of graph"""
    def __init__(self, data):
        self.data = data

    def __str__(self):
        return 'Node({})'.format(self.data)
    def __repr__(self):
        return 'Node({})'.format(self.data)

    def __eq__(self, other_node):
        return self.data == other_node.data
    def __ne__(self, other):
        return not self.__eq__(other)

    def __hash__(self):
        return hash(self.data)

class Edge(object):
    """Edge represents basic unit of graph connecting between two edges"""
    def __init__(self, from_node, to_node, weight):
        self.from_node = from_node
        self.to_node = to_node
        self.weight = weight
    def __str__(self):
        return 'Edge(from {}, to {}, weight {})'.format(self.from_node, self.to_node, self.weight)
    def __repr__(self):
        return 'Edge(from {}, to {}, weight {})'.format(self.from_node, self.to_node, self.weight)

    def __eq__(self, other_node):
        return self.from_node == other_node.from_node and self.to_node == other_node.to_node and self.weight == other_node.weight
    def __ne__(self, other):
        return not self.__eq__(other)

    def __hash__(self):
        return hash((self.from_node, self.to_node, self.weight))

        return hash((self.from_node, self.to_node, self.weight))


"""
graph module defines the knowledge representations files

A Graph has following methods:

* adjacent(node_1, node_2)
    - returns true if node_1 and node_2 are directly connected or false otherwise
* neighbors(node)
    - returns all nodes that is adjacency from node
* add_node(node)
    - adds a new node to its internal data structure.
    - returns true if the node is added and false if the node already exists
* remove_node
    - remove a node from its internal data structure
    - returns true if the node is removed and false if the node does not exist
* add_edge
    - adds a new edge to its internal data structure
    - returns true if the edge is added and false if the edge already existed
* remove_edge
    - remove an edge from its internal data structure
    - returns true if the edge is removed and false if the edge does not exist
"""

class AdjacencyMatrix(object):
    def __init__(self):
        # adjacency_matrix should be a two dimensions array of numbers that
        # represents how one node connects to another
        self.adjacency_matrix = []
        # in additional to the matrix, you will also need to store a list of Nodes
        # as separate list of nodes
        self.nodes = []

    def adjacent(self, node_1, node_2):
        pass

    def neighbors(self, node):
        pass

    def add_node(self, node):
        pass

    def remove_node(self, node):
        pass

    def add_edge(self, edge):
        pass

    def remove_edge(self, edge):
        pass

    def __get_node_index(self, node):
        """helper method to find node index"""
        pass


"""
graph module defines the knowledge representations files

A Graph has following methods:

* adjacent(node_1, node_2)
    - returns true if node_1 and node_2 are directly connected or false otherwise
* neighbors(node)
    - returns all nodes that is adjacency from node
* add_node(node)
    - adds a new node to its internal data structure.
    - returns true if the node is added and false if the node already exists
* remove_node
    - remove a node from its internal data structure
    - returns true if the node is removed and false if the node does not exist
* add_edge
    - adds a new edge to its internal data structure
    - returns true if the edge is added and false if the edge already existed
* remove_edge
    - remove an edge from its internal data structure
    - returns true if the edge is removed and false if the edge does not exist
"""






class AdjacencyMatrix(object):
    def __init__(self):
        # adjacency_matrix should be a two dimensions array of numbers that
        # represents how one node connects to another
        self.adjacency_matrix = []
        # in additional to the matrix, you will also need to store a list of Nodes
        # as separate list of nodes
        self.nodes = {}

    def adjacent(self, node_1, node_2):
        if node_1 not in self.nodes or node_2 not in self.nodes:
            return False
        index_node_1 = self.__get_node_index(node_1)
        index_node_2 = self.__get_node_index(node_2)
        return True if self.adjacency_matrix[index_node_1][index_node_2] != 0 else False

    def neighbors(self, node):
        listOfNeighbors = []
        for k, v in self.nodes.items():
            if self.adjacency_matrix[ self.nodes[node]][v] != 0:
                listOfNeighbors.append(k)
        return listOfNeighbors


    # def add_node(self, node):
    #     if node in self.nodes:
    #         return False
    #     self.nodes[node] = len(self.nodes)
    #     for weight in self.adjacency_matrix:
    #         weight.append(0)
    #     self.adjacency_matrix.append([0] * len(self.nodes))
    #     return True



    def add_node(self, node):
        if node in self.nodes:
            return False
        self.nodes[node] = len(self.nodes)
        for nodes in self.adjacency_matrix:
            nodes.append(0)
            # self.adjacency_matrix.append([0] * len(self.nodes))
        self.adjacency_matrix.append([0] * len(self.nodes))
        return True





    #comeback
    def remove_node(self, node):
        if node not in self.nodes:
            return False
        index_node = self.nodes.pop(node)
        #update matrix
        for existing_weights in self.adjacency_matrix:
            del existing_weights[index_node]
        del self.adjacency_matrix[index_node]
        #update dictionary
        for existing_node, index in self.nodes.items():
            if index > index_node:
                self.nodes[existing_node] = index - 1
        return True

    def remove_node(self, node):
        if node not in self.nodes:
            return False
        self.nodes.pop(node)
        self.__get_node_index(node)

        for current_node in self.adjacency_matrix:
            del current_node[self.__get_node_index(node)]
        del self.adjacency_matrix[self.__get_node_index(node)]

        return True




        # def remove_node(self, node):
    #     if node not in self.nodes:
    #         return False
    #     index_node = self.nodes.pop(node)
    #     #update matrix
    #     for existing_weights in self.adjacency_matrix:
    #         del existing_weights[index_node]
    #     del self.adjacency_matrix[index_node]
    #     #update dictionary
    #     for existing_node, index in self.nodes.items():
    #         if index > index_node:
    #             self.nodes[existing_node] = index - 1
    #     return True



    def add_edge(self, edge):
        if edge.from_node or edge.to_node not in self.nodes:
            return False
        if self.adjacency_matrix[self.nodes[edge.from_node]][self.nodes[edge.to_node]] != 0:
            return False
        self.adjacency_matrix[self.nodes[edge.from_node]][self.nodes[edge.to_node]] = edge.weight
        return True


    def remove_edge(self, edge):
        if edge.from_node and edge.to_node not in self.nodes:
            return False
        if self.adjacency_matrix[self.nodes[edge.from_node]][self.nodes[edge.to_node]] == 0:
            return False
        self.adjacency_matrix[self.nodes[edge.from_node]][self.nodes[edge.to_node]] = 0
        return True

    def __get_node_index(self, node):
        """helper method to find node index"""
        return self.nodes[node]



class AdjacencyList(object):
    """
    AdjacencyList is one of the graph representation which uses adjacency list to
    store nodes and edges
    """
    def __init__(self):
        # adjacencyList should be a dictonary of node to edges
        self.adjacency_list = {}

    def neighbors(self, node):
        list = []
        items = self.adjacency_list[node]
        neighborhood = []
        for i in items:
            neighborhood.append(i.to_node)
        return neighborhood

    def adjacent(self, node_1, node_2):
        nodeOneNeighbors = self.neighbors(node_1)
        for node  in nodeOneNeighbors:
            if node == node_2:
                return True
        return False

    # adding a new node "f"
    # g = {
    #      "e": ["c"],
    #      "f": []
    #      }

    def add_node(self, node):
        if node in self.adjacency_list:
            return False
        else:
            self.adjacency_list[node] = []
            return True

    def remove_node(self, node):
        if node in self.adjacency_list:
            del self.adjacency_list[node]
            for edges in self.adjacency_list.values():
                for edge in edges:
                    if edge.to_node == node:
                        self.remove_edge(edge)
            return True
        else:
            return False

    def add_edge(self, edge):
        if edge in self.adjacency_list[edge.from_node]:
            return False
        else:
            self.adjacency_list[edge.from_node].append(edge)
            return True

    def remove_edge(self, edge):
        if edge not in self.adjacency_list[edge.from_node]:
            return False
        else:
            self.adjacency_list[edge.from_node].remove(edge)
            return True



# class ObjectOriented(object):
#     """ObjectOriented defines the edges and nodes as both list"""
#     def __init__(self):
#         # implement your own list of edges and nodes
#         self.edges = []
#         self.nodes = []
#
#     # yes
#     def adjacent(self, node_1, node_2):
#         for edge in self.edges:
#             if edge.from_node == node_1:
#                 if edge.to_node == node_2:
#                     return True
#                 else:
#                     False
#         return False
#
#
#
#     def neighbors(self, node):
#         listOfNeighbors = []
#         for edge in self.edges:
#             if edge.from_node == node:
#                 listOfNeighbors.append(edge.to_node)
#         return listOfNeighbors
#
#     # yes
#     def add_node(self, node):
#         for node_element in self.nodes:
#             if node == node_element:
#                 return False
#         self.nodes.append(node)
#         return True
#
#     # yes
#     def remove_node(self, node):
#         if node not in self.nodes:
#             return False
#         else:
#             self.nodes.remove(node)
#             for edge in self.edges:
#                 if self.adjacent(edge.from_node, node):
#                     self.remove_edge(edge)
#                 if self.adjacent(edge.to_node, node):
#                     self.remove_edge(edge)
#             return True
#
#
#     # yes
#     # * add_edge
#     # - adds a new edge to its internal data structure
#     # - returns true if the edge is added and false if the edge already existed
#     def add_edge(self, edge):
#         if edge in self.edges:
#             return False
#         if edge not in self.edges:
#             self.edges.append(edge)
#             return True
#
# # yes
# # return false if not found, remove if found
#     def remove_edge(self, edge):
#         if edge in self.edges:
#             self.edges.remove(edge)
#             return True
#         if edge not in self.edges:
#             return False
#
#



def construct_graph_from_file(graph):
    nodeEdgeWeight = []
    f = open("graphy-2.txt", 'r')
    content = f.readlines()

    size = content[:1][0].split('\n')[0]
    size = int(size)

    i = 0
    while i < size:
        graph.add_node(Node(i))
        i += 1

    for line in content[1:]:
        nodeEdgeWeight.append(line.split('\n'))
        for i in nodeEdgeWeight:
            arr =  i[0].split(':')

        from_node = int(arr[0])
        to_node = int(arr[1])
        weight = int(arr[2])
        edge = Edge(Node(from_node), Node(to_node), weight)

        # if isinstance(graph, ObjectOriented):
        # if type(graph) is ObjectOriented:
        #     graph.edges.append(edge)

        # if isinstance(graph, AdjacencyList):
        if type(graph) is AdjacencyList:
            graph.adjacency_list[Node(from_node)].append(edge)

        if type(graph) is AdjacencyMatrix:
            graph.adjacency_matrix[from_node][to_node] = weight
    return graph

# OO_graph = ObjectOriented()
# construct_graph_from_file(OO_graph)
# print OO_graph.edges

# AL_graph = AdjacencyList()
# construct_graph_from_file(AL_graph)
# print AL_graph.adjacency_list

graph = AdjacencyMatrix()
construct_graph_from_file(graph)
print graph.adjacency_matrix
#
# print(graph.neighbors(Node(1)))
# print(graph.neighbors(Node(20)))
# print(graph.adjacent(Node(1), Node(2)))#true
# print(graph.adjacent(Node(20), Node(2)))#not exist
# print(graph.adjacent(Node(1), Node(5)))#false
# print(graph.add_node(Node(1)))#False
# print(graph.add_node(Node(20)))#True
# print(graph.remove_node(Node(2)))#True
# print(graph.add_edge(Edge(Node(0), Node(3), 9)))
print(graph.remove_edge(Edge(Node(0), Node(10), 9)))
# print(graph.adjacency_matrix)

# print graph.neighbors()