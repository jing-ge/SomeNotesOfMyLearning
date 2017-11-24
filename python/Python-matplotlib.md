##Python之matplotlib模块
###1.基本使用
	import matplotlib.pyplot as plt
	import numpy as np
	x = np.linspace(-1,1,50)
	y = 2*x+1
	z = x**2
	plt.plot(x,z)
	plt.show()
###2.figure的使用
	import matplotlib.pyplot as plt
	import numpy as np
	x = np.linspace(-3,3,50)
	y1 = 2*x+1
	y2 = x**2

	plt.figure(num=1)
	plt.plot(x,y1)
	#若不指定num自动递增
	#figsize可以指定宽高
	plt.figure(num=2,figsize=(8,5))
	plt.plot(x,y2)
	#同一个figure画两条线（多条线）
	plt.figure()
	plt.plot(x,y1)
	plt.plot(x,y2,color='red',linewidth=1.0)

	plt.show()
###3.坐标轴的设置
	import matplotlib.pyplot as plt
	import numpy as np
	x = np.linspace(-3,3,50)
	y1 = 2*x + 1
	y2 = x**2

	plt.figure()
	plt.plot(x,y2)
	plt.plot(x,y1,color='red',linewidth=1,linestyle='--')

	#设置坐标轴
	plt.xlim((-1,2))
	plt.ylim((3,-2))
	plt.xlabel('i am x')
	plt.ylabel('i am y')
	#更换坐标角标
	new_xticks = np.linspace(-1,2,5)
	plt.xticks(new_xticks)
	plt.yticks([-2,-1.8,-1,1.22,3],
	              [r'$really\ bad$',r'$bad\ \alpha$',r'$normal$',r'$good$',r'$really\ good$'])
	#gca = 'get current axis'
	ax = plt.gca()
	#4个脊梁
	ax.spines['right'].set_color('none')
	ax.spines['top'].set_color('none')
	ax.xaxis.set_ticks_position('bottom')
	ax.yaxis.set_ticks_position('left')
	ax.spines['bottom'].set_position(('data',-1))
	ax.spines['left'].set_position(('data',-0))

	plt.show()
###4.图例
	import matplotlib.pyplot as plt
	import numpy as np
	x = np.linspace(-3,3,50)
	y1 = 2*x + 1
	y2 = x**2

	plt.figure()

	#设置坐标轴
	plt.xlim((-1,2))
	plt.ylim((3,-2))
	plt.xlabel('i am x')
	plt.ylabel('i am y')
	#更换坐标角标
	new_xticks = np.linspace(-1,2,5)
	plt.xticks(new_xticks)
	plt.yticks([-2,-1.8,-1,1.22,3],
	              [r'$really\ bad$',r'$bad\ \alpha$',r'$normal$',r'$good$',r'$really\ good$'])
	#要传handle加逗号
	l1, = plt.plot(x,y2,label='up')
	l2, = plt.plot(x,y1,color='red',linewidth=1,linestyle='--',label='down')
	#显示图例
	plt.legend(handles=[l1,l2],labels=['aaa','bbb'],loc='best')

	plt.show()
###5.matplotlib-annotation
	import matplotlib.pyplot as plt
	import numpy as np

	x = np.linspace(-3,3,50)
	y = 2*x +1

	plt.figure(num=1,figsize=(8,5))
	plt.plot(x,y)

	ax = plt.gca()
	ax.spines['right'].set_color('none')
	ax.spines['top'].set_color('none')
	ax.xaxis.set_ticks_position('bottom')
	ax.spines['bottom'].set_position(('data',0))
	ax.yaxis.set_ticks_position('left')
	ax.spines['left'].set_position(('data',0))

	x0 = 1
	y0 = 2*x0 +1
	plt.scatter(x0,y0,s=50,color='r')#画一个点
	plt.plot([x0,x0],[0,y0],'k--',lw=2.5)#画一个虚线
	#添加标注1
	plt.annotate(r'$2x+1=3$',xy=(x0,y0),xycoords='data',xytext=(+30,-30),textcoords='offset points',fontsize=16,arrowprops=dict(arrowstyle='->',connectionstyle='arc3,rad=.2'))
	#添加标注2
	plt.text(-3.7,3,r'$This\ is\ the\ some\ text.\ \mu\ \sigma_i\ \alpha_t$',
	         fontdict={'size':16,'color':'r'},)

	plt.show()
###6.axis tick坐标轴刻度
	import matplotlib.pyplot as plt
	import numpy as np

	x = np.linspace(-3,3,50)
	y = 0.1*x

	plt.figure()
	plt.plot(x,y,linewidth=10)
	plt.ylim(-2,2)
	ax = plt.gca()
	ax.spines['right'].set_color('none')
	ax.spines['top'].set_color('none')
	ax.xaxis.set_ticks_position('bottom')
	ax.spines['bottom'].set_position(('data',0))
	ax.yaxis.set_ticks_position('left')
	ax.spines['left'].set_position(('data',0))

	plt.figure(num=3)
	plt.plot(x,y,linewidth=10)
	plt.ylim(-2,2)
	ax = plt.gca()
	ax.spines['right'].set_color('none')
	ax.spines['top'].set_color('none')
	ax.xaxis.set_ticks_position('bottom')
	ax.spines['bottom'].set_position(('data',0))
	ax.yaxis.set_ticks_position('left')
	ax.spines['left'].set_position(('data',0))
	for label in ax.get_xticklabels()+ax.get_yticklabels():
	    label.set_fontsize(12)
	    label.set_bbox(dict(facecolor='white',edgecolor='None',alpha=0.7))
	plt.show()
###7.散点图scatter
	import matplotlib.pyplot as plt
	import numpy as np

	n = 1024
	X = np.random.normal(0,1,n)
	Y = np.random.normal(0,1,n)
	T = np.arctan2(Y,X)#color

	plt.figure()
	plt.scatter(X,Y,s=75,c=T,alpha=0.5)
	plt.ylim((-1.5,1.5))
	plt.xlim((-1.5,1.5))
	plt.xticks()
	plt.yticks()
	plt.show()
###8.柱状图bar
	import matplotlib.pyplot as plt
	import numpy as np

	n = 12
	X = np.arange(n)
	Y1 = (1-X/float(n))*np.random.uniform(0.5,1.0,n)
	Y2 = (1-X/float(n))*np.random.uniform(0.5,1.0,n)

	plt.figure()
	plt.bar(X,+Y1,facecolor='#9999ff',edgecolor='white')
	plt.bar(X,-Y2,facecolor='#ff9999',edgecolor='white')

	for x,y in zip(X,Y1):
	    plt.text(x,y+0.05,'%.2f' % y,ha='center',va='bottom')
	for x,y in zip(X,Y2):
	    plt.text(x,-y-0.05,'-%.2f' % y,ha='center',va='top')
	plt.xlim((-1,n))
	plt.ylim((-1.25,1.25))
	plt.xticks()
	plt.yticks()
	plt.show() 
###9.等高线图contour
	import matplotlib.pyplot as plt
	import numpy as np
	def f(x,y):
	    return (1-x/2+x**5+y**3)*np.exp(-x**2-y**2)

	n = 256
	x = np.linspace(-3,3,n)
	y = np.linspace(-3,3,n)
	X,Y = np.meshgrid(x,y)
	#画图
	plt.contourf(X,Y,f(X,Y),10,alpha=0.75,cmap=plt.cm.hot)
	#画等高线
	C =plt.contour(X,Y,f(X,Y),10,colors='black',linewidth=.5)
	#数字描述
	plt.clabel(C,inline=True,fontsize=10)
	plt.xticks()
	plt.yticks()
	plt.show()

###10.image
	import matplotlib.pyplot as plt
	import numpy as np
	a = np.random.random(9).reshape((3,3))
	#origin={'lower','upper'}
	#interpolation matplotlib.org
	plt.imshow(a,interpolation='nearest',cmap='bone',origin='lower')
	#shrink 压缩
	plt.colorbar(shrink=0.9)
	plt.xticks(())
	plt.yticks(())
	plt.show()
###11.3Dplot
	import matplotlib.pyplot as plt
	import numpy as np
	from mpl_toolkits.mplot3d import  Axes3D

	fig = plt.figure()
	ax = Axes3D(fig)
	X = np.arange(-4,4,0.25)
	Y = np.arange(-4,4,0.25)
	X,Y = np.meshgrid(X,Y)
	R = np.sqrt(X**2+Y**2)
	Z = np.sin(R)
	ax.plot_surface(X,Y,Z,rstride=1,cstride=1,cmap=plt.get_cmap('rainbow'))
	ax.contourf(X,Y,Z,zdir='z',offset=-2,cmap='rainbow')
	plt.show()
###12.subplot1
	import matplotlib.pyplot as plt
	import numpy as np
	from mpl_toolkits.mplot3d import  Axes3D
	plt.figure()
	plt.subplot(2,2,1)
	plt.plot([0,1],[0,1])
	plt.subplot(2,2,2)
	plt.plot([0,1],[0,1])
	plt.subplot(2,2,3)
	plt.plot([0,1],[0,1])
	#可以识别224这种格式
	plt.subplot(224)
	plt.plot([0,1],[0,1])


	plt.figure()
	plt.subplot(2,2,1)
	plt.plot([0,1],[0,1])
	plt.subplot(2,3,4)
	plt.plot([0,1],[0,1])
	plt.subplot(2,3,5)
	plt.plot([0,1],[0,1])
	#可以识别224这种格式
	plt.subplot(236)
	plt.plot([0,1],[0,1])
	plt.show()
###13.subplot2
	import matplotlib.pyplot as plt
	import numpy as np
	import matplotlib.gridspec as gridspec
	#1.subplot2grid
	plt.figure()
	ax1=plt.subplot2grid((3,3),(0,0),colspan=3,rowspan=1)
	ax1.plot([1,2],[1,2])
	ax1.set_title('first')
	ax2 = plt.subplot2grid((3,3),(1,0),colspan=2,rowspan=1)
	ax2.plot([1,2],[1,2])
	ax3 = plt.subplot2grid((3,3),(1,2),colspan=2,rowspan=1)
	ax3.plot([1,2],[1,2])
	ax4 = plt.subplot2grid((3,3),(2,0),colspan=1,rowspan=1)
	ax5 = plt.subplot2grid((3,3),(2,1),colspan=2,rowspan=1)
	#2.gridspec
	plt.figure()
	gs =gridspec.GridSpec(3,3)
	ax1 = plt.subplot(gs[0,:])
	ax2 = plt.subplot(gs[1,:2])
	ax3 = plt.subplot(gs[1,2])
	ax4 = plt.subplot(gs[-1,2])
	ax5 = plt.subplot(gs[-1,1])
	ax6 = plt.subplot(gs[-1,0])
	#3.easy to define structure
	plt.figure()
	f,((ax11,ax12),(ax21,ax22))= plt.subplots(2,2,sharex=True,sharey=True)
	ax11.plot([0,1],[0,1])
	plt.tight_layout()
	plt.show()
###14.plot in plot
	import matplotlib.pyplot as plt

	fig = plt.figure()
	x = [1,2,3,4,5,6,7]
	y = [1,3,4,2,5,8,3]

	left,bottom,width,height = 0.1,0.1,0.8,0.8
	ax1 = fig.add_axes([left,bottom,width,height])
	ax1.plot(x,y,'r')
	ax1.set_xlabel('x')
	ax1.set_ylabel('y')
	ax1.set_title('title')

	left,bottom,width,height = 0.2,0.6,0.25,0.25
	ax2 = fig.add_axes([left,bottom,width,height])
	ax2.plot(x,y,'b')
	ax2.set_xlabel('x')
	ax2.set_ylabel('y')
	ax2.set_title('inside 1 title')

	plt.axes([0.6,0.2,0.25,0.25])
	plt.plot(y[::-1],x,'g')
	plt.xlabel('x')
	plt.ylabel('y')
	plt.title('inside 2 title')
	plt.show()
###15.secondary axis次坐标
	import matplotlib.pyplot as plt
	import numpy as np

	x = np.arange(0,10,0.1)
	y1 = 0.05*x**2
	y2 = -1*y1

	fig,ax1 = plt.subplots()
	#重点
	ax2 = ax1.twinx()
	ax1.plot(x,y1,'g-')
	ax2.plot(x,y2,'b--')
	ax1.set_xlabel('X data')
	ax1.set_ylabel('Y1 data',color='g')
	ax2.set_ylabel('Y2 data',color='b')
	plt.show()
###16.animation动画(辣鸡不能用！！！！)
	import matplotlib.pyplot as plt
	import numpy as np
	from matplotlib import animation
	fig,ax = plt.subplots()

	x = np.linspace(0,2*np.pi,0.01)
	line, = ax.plot(x,np.sin(x))
	#动画
	def animate(i):
	    line.set_ydata(np.sin(x+i/100))
	    return line,
	def init():
	    line.set_ydata(np.sin(x))
	    return line,
	ani = animation.FuncAnimation(fig=fig,func=animate,frames=100,init_func=init,interval=20)
	plt.show()