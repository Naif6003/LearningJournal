

from sklearn import datasets
iris = datasets.load_iris()
from sklearn.naive_bayes import GaussianNB
gnb = GaussianNB()

y_pred = gnb.fit(iris.data, iris.target).predict(iris.data)
print("Number of mislabeled points out of a total %d points : %d"  % (iris.data.shape[0],(iris.target != y_pred).sum()))


import numpy as np
X = np.array([[-1,-1], [-2,-1], [-3, -2], [1,1], [2, 1], [3, 2]])
Y = np.array([1, 1, 1, 2, 2, 2])


gnb.fit(X,Y)

GaussianNB()
print(gnb.predict([[-0.8, -1]]))

