##Python模块之numpy
	import numpy as np
###1.基本属性
	arr = np.array([[1,2,3],
	                [2,3,4]])
	print(arr)
	print("number of dim:",arr.ndim)
	print("shape:",arr.shape)
	print("size:",arr.size)
###2.numpy之创建array
	import numpy as np
	a = np.array([2,334,45,45,65,6])
	print(a)
	#定义arrzy的形式主要的是int和float
	b = np.array([1,2,3,4,5],dtype=np.float)
	print(b.dtype)
	#定义二维矩阵
	c = np.array([
	    [1,2,3],
	    [4,5,6]
	])
	print(c)
	#0矩阵
	zero = np.zeros((3,4))
	print(zero)
	#1矩阵
	one = np.ones((3,4))
	print(one)
	#空矩阵
	empty = np.empty((2,3))
	print("空矩阵:",empty)
	#有序矩阵
	renge = np.arange(10,20,2)
	print(renge)
	#重新定义shape
	a = np.arange(40).reshape((5,8))
	print(a)
	#自动步长(起始，终点，一共多少数字)
	lin = np.linspace(1,20,40).reshape(5,8)
	print(lin)
###3.numpy基础运算1
	import numpy as np
	a = np.array([10,20,30,40])
	b = np.arange(4)

	#加减法
	print(a+b,";",a-b)
	#乘方
	print(a**3)
	#三角函数sin cos tan 反三角以及π
	res = 10*np.sin(b)
	print(res)
	#比较大小
	print(b<2)
	print(b==2)
	#矩阵计算
	a = np.array([
	    [1,2],
	    [3,4]
	])
	b = np.arange(4).reshape((2,2))
	print(a)
	print(b)
	#矩阵乘法；逐个相乘，矩阵乘法
	c1 = a*b
	c2 = np.dot(a,b)
	c3 = a.dot(b)
	print(c1)
	print(c2)
	print(c3)
	#随机矩阵
	ran = np.random.random((2,4))
	print(ran)
	#求和，最大最小
	print(np.sum(ran))
	print(np.sum(ran,axis=0))
	print(np.max(ran))
	print(np.min(ran))
###4.numpy基础运算2
	import numpy as np
	A = np.arange(2,14).reshape((3,4))
	print(A)
	#最大最小索引
	print(np.argmax(A))
	print(np.argmin(A))
	#平均值
	print(np.mean(A))
	print(A.mean())
	#中位数
	print(np.median(A))
	#累加
	print(np.cumsum(A))
	#累差
	print(np.diff(A))
	#非零的数
	print(np.nonzero(A))
	#排序
	print(np.sort(A))
	#矩阵转置
	print(np.transpose(A))
	print(A.T)
	print(A.T.dot(A))
	#clip功能(Arr,Amin，Amax)
	print(np.clip(A,5,9))
	#所有的都有axis参数axis=0，对于列
	print(np.mean(A,axis=0))
	print(np.mean(A,axis=1))
###5.numpy索引
	import numpy as np
	A = np.arange(3,15).reshape((3,4))
	print(A)
	print(A[2][3])
	print(A[2,3])
	print(A[2,:])
	print(A[:,2])
	print(A[2,1:3])
	#迭代行
	for row in A:
	    print(row)
	#迭代列
	for col in A.T:
	    print(col)
	#迭代元素
	for item in A.flat:
	    print(item)
	print(A.flatten())
###6.numpy array合并
	import numpy as np
	A = np.array([1,1,1])
	B = np.array([2,2,2])
	#按行合并
	print(np.vstack((A,B)))
	#按列合并（左右合并）
	print(np.hstack((A,B)))
	#行向量变列向量
	print(A[np.newaxis,:])
	print(A[:,np.newaxis])
	#合并
	print(np.concatenate((A,B,A,A)))
###7.numpy array分割
	import numpy as np
	A = np.arange(12).reshape(3,4)
	print(A)
	#均等分割
	print(np.split(A,2,axis=1))
	print(np.split(A,3,axis=0))
	#不均等分割
	print(np.array_split(A,3,axis=1))
	#横向纵向分割
	print(np.vsplit(A,3))
	print(np.hsplit(A,2)) 
###8.numpy的赋值
* numpy中的赋值是给数据贴标签！！！
* 要两个变量不关联用b = a.copy()