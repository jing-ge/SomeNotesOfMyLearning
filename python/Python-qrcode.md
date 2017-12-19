##Python二维码处理模块

###直接上例子
####简单使用
	import qrcode 
	img = qrcode.make('hello, qrcode')
	img.save('test.png')
####详细使用
	import qrcode 
	qr = qrcode.QRCode(     
	    version=1,     
	    error_correction=qrcode.constants.ERROR_CORRECT_L,     
	    box_size=10,     
	    border=4, 
	) 
	qr.add_data('hello, qrcode') #any string all is ok
	qr.make(fit=True)  
	img = qr.make_image()
	img.save('123.png')
###参数介绍
+ version：值为1~40的整数，控制二维码的大小（最小值是1，是个12×12的矩阵）。 如果想让程序自动确定，将值设置为 None 并使用 fit 参数即可。
+ error_correction：控制二维码的错误纠正功能。可取值下列4个常量。
　　ERROR_CORRECT_L 7%以下的错误会被纠正 
	ERROR_CORRECT_M (default) 15%以下的错误会被纠正 
	ERROR_CORRECT_Q 25 %以下的错误会被纠正 
	ERROR_CORRECT_H. 30%以下的错误会被纠正。

box_size：控制二维码中每个小格子包含的像素数。

border：控制边框（二维码与图片边界的距离）包含的格子数（默认为4，是相关标准规定的最小值）