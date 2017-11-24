###Python之图像处理操作 PIL
####PIL说明：
PIL(Python Imaging Library Python,图像处理类库)提供了通用的图像处理功能,以及大量有用的基本图像操作,比如图像缩放、裁剪、旋转、颜色转换等。
####使用方法
#####基本使用：
		# -*- coding: utf-8 -*-
		from PIL import Image
		import os
		#打开图像得到一个PIL图像对象
		img = Image.open("./source/test.jpg")
		#将其转为一张灰度图
		img = img.convert('L')
		#存储该张图片
		try:
		  img.save("test.png")
		except IOError:
		  print "cannot convert"
#####PIL生成缩略图：
		from PIL import Image
		import os
		#打开图像得到一个PIL图像对象
		img = Image.open("./source/test.jpg")
		#创建最长边为128的缩略图
		img.thumbnail((128,128))
		#存储该张图片
		try:
		  img.save("test.png")
		except IOError:
		  print "cannot convert"
#####PIL调整尺寸和旋转：
		# -*- coding: utf-8 -*-
		from PIL import Image
		import os
		#打开图像得到一个PIL图像对象
		img = Image.open("./source/test.jpg")
		#修改图片大小，参数为一元组
		img = img.resize((100,200))
		#使图片逆时针选择45度
		img = img.rotate(45)
		#存储该张图片
		try:
		  img.save("test.png")
		except IOError:
		  print "cannot convert"
#####PIL复制粘贴图像区域：
		from PIL import Image
		import os
		#打开图像得到一个PIL图像对象
		img = Image.open("./source/test.jpg")
		#从img中裁剪指定区域
		region = img.crop((300,300,500,500))
		#使裁剪部分逆时针选择145度
		region = region.rotate(145)
		#将该区域粘贴至指定区域
		img.paste(region,(100,100,300,300));
		#存储该张图片
		try:
		  img.save("test.png")
		except IOError:
		  print "cannot convert"
	
