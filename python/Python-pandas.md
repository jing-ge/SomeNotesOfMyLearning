##Python模块之pandas
###1.panads选择数据
	import numpy as np
	import pandas as pd
	'''
	s = pd.Series([1,3,5,np.nan,44,1])
	print(s)
	dates = pd.date_range("20171010",periods=7)
	print(dates)
	df =  pd.DataFrame(np.random.rand(7,4),index=dates,columns=['a','b','c','d'])
	print(df)
	df1 =  pd.DataFrame(np.random.rand(7,4))
	print(df1)
	print(df.dtypes)
	print(df.index)
	'''
	dates = pd.date_range('20170101',periods=6)
	df = pd.DataFrame(np.arange(24).reshape((6,4)),index=dates,columns=['A','B','C','D'])
	print(df)
	#选择某一列
	print(df['A'])
	print(df.A)
	#select by lable:loc
	print(df.loc['20170103'])
	print(df.loc[:,['A','C']])
	print(df.loc[:,['A','C']])
	#select by lable:iloc
	print(df.iloc[3:5,1:3])
	print(df.iloc[[1,3,4],:])
	#mixed selection :ix
	print(df.ix[:3,['C','D']])
	#Boolen indexing
	print(df)
	print(df[df.A > 8])
	#series同理
###2.pandas更改数据
	import numpy as np
	import pandas as pd

	dates = pd.date_range('20170101',periods=6)
	df = pd.DataFrame(np.arange(24).reshape((6,4)),index=dates,columns=['A','B','C','D'])
	print(df)

	df.iloc[2,2] = 111
	df.loc['20170101',"A"] = 345
	df.B[df.B>5] = 0
	df.A[df.B<5] = 1
	df['F'] = np.nan
	df['G'] = pd.Series([1,2,3,4,5,6],index=dates)
	print(df)
###3.pandas处理丢失数据
	import numpy as np
	import pandas as pd

	dates = pd.date_range('20170101',periods=6)
	df = pd.DataFrame(np.arange(24).reshape((6,4)),index=dates,columns=['A','B','C','D'])
	df.iloc[0,1] = np.nan
	df.iloc[2,3] = np.nan
	print(df)
	#丢掉行
	print(df.dropna(axis=0,how='any'))#how = any ,all
	#丢掉列
	print(df.dropna(axis=1,how='any'))
	#填充nan
	print(df.fillna(value=0))
	#查看是否有丢失数据
	print(df.isnull())
	#检查方式
	print(np.any(df.isnull())==True)
###4.pandas导入导出数据
	import numpy as np
	import pandas as pd
	#读取read
	#保存to
	#文件类型 csv,excle,hdf,sql,json,msgpack,html,gbq,stata,clipboard,pickle

	data = pd.read_csv("1000-1100.csv")
	print(data)
	data.to_pickle('data.pickle')
###5.pandas合并-concat
	import numpy as np
	import pandas as pd

	#concatenating
	df1 = pd.DataFrame(np.ones((3,4))*1,columns=['a','b','c','d'])
	df2 = pd.DataFrame(np.ones((3,4))*2,columns=['a','b','c','d'])
	df3 = pd.DataFrame(np.ones((3,4))*3,columns=['a','b','c','d'])
	print(df1)
	print(df2)
	print(df3)
	#一般采用上下合并,ignore_index是否忽略原来索引
	res1 = pd.concat([df1,df2,df3],axis=0)
	res2 = pd.concat([df1,df2,df3],axis=0,ignore_index=True)
	print(res1)
	print(res2)
	#join,['inner','outer']
	df4 = pd.DataFrame(np.ones((3,4))*4,columns=['a','b','c','d'],index=[1,2,3])
	df5 = pd.DataFrame(np.ones((3,4))*5,columns=['b','c','d','e'],index=[2,3,4])
	print(df4)
	print(df5)
	#默认outter
	res3 = pd.concat([df4,df5],ignore_index=True)
	print(res3)
	#inner处理
	res4 = pd.concat([df4,df5],join='inner',ignore_index=True)
	print(res4)
	#join_axes
	res5 = pd.concat([df4,df5],axis=1)
	res6 = pd.concat([df4,df5],axis=1,join_axes=[df4.index])
	print(res5)
	print(res6)
	#增加数据
	res7 = df1.append([df2,df3],ignore_index=True)
	s1 = pd.Series([1,2,3,4],index=['a','b','c','d'])
	res8 = df1.append(s1,ignore_index=True)
	print(res7)
	print(res8)
###5.pandas合并-merging
	import numpy as np
	import pandas as pd

	left = pd.DataFrame({'key':['K0','K1','K2','K3'],
	                     'A':['A0','A1','A2','A3'],
	                     'B':['B0','B1','B2','B3']})
	right = pd.DataFrame({'key':['K0','K1','K2','K3'],
	                     'C':['C0','C1','C2','C3'],
	                     'D':['D0','D1','D2','D3']})
	left1 = pd.DataFrame({'key1':['K0','K1','K2','K3'],
	                     'A':['A0','A1','A2','A3'],
	                     'B':['B0','B1','B2','B3'],
	                      'key2': ['K0', 'K1', 'K2', 'K3']})
	right1 = pd.DataFrame({'key1':['K0','K1','K2','K3'],
	                     'C':['C0','C1','C2','C3'],
	                     'D':['D0','D1','D2','D3'],
	                       'key2': ['K0', 'K1', 'K2', 'K3']})
	print(left)
	print(right)
	#基于key合并
	res = pd.merge(left,right,on="key")
	print(res)
	#2个key
	print(left1)
	print(right1)
	res1 = pd.merge(left1,right1,on=['key1','key2'])
	#how = [left,right,outer,inner]
	res2 = pd.merge(left1,right1,on=['key1','key2'],how='outer')
	#indicator参数把具体形式显示出来新建一列
	#index更加index来合并left_index与right_index
	#suffixes用于合并列名重复时候重命名
	print(res1)
	print(res2)
###6.pandas的数据可视化
	import numpy as np
	import pandas as pd
	import matplotlib.pyplot as plt
	#series
	data = pd.Series(np.random.randn(1000),index = np.arange(1000))
	data = data.cumsum()
	print(data)

	#dataFtame
	data = pd.DataFrame(np.random.randn(1000,4),
	                    index=np.arange(1000),
	                    columns=list("ABCD"))
	data = data.cumsum()
	#plot methods
	#bar,hist,box,kde,area,scatter,hexbin,pie
	ax = data.plot.scatter(x='A',y='B',color='DarkBlue',label="class1")
	data.plot.scatter(x='A',y='C',color='DarkGreen',label="class2",ax=ax)
	plt.show()