###logging模块　　

很多程序都有记录日志的需求，并且日志中包含的信息即有正常的程序访问日志，还可能有错误、警告等信息输出，python的logging模块提供了标准的日志接口，你可以通过它存储各种格式的日志，logging的日志可以分为 debug(), info(), warning(), error() and critical() 5个级别，下面我们看一下怎么用。

* 最简单用法

	import logging
	 
	logging.warning("user [alex] attempted wrong password more than 3 times")
	logging.critical("server is down")
 
	#输出

	WARNING:root:user [alex] attempted wrong password more than 3 times
	CRITICAL:root:server is down

看一下这几个日志级别分别代表什么意思

	Level	When it’s used
	DEBUG	Detailed information, typically of interest only when diagnosing problems.
	INFO	Confirmation that things are working as expected.
	WARNING	An indication that something unexpected happened, or indicative of some problem in the near future (e.g. ‘disk space low’). The software is still working as expected.
	ERROR	Due to a more serious problem, the software has not been able to perform some function.
	CRITICAL	A serious error, indicating that the program itself may be unable to continue running.


* 如果想把日志写到文件里，也很简单

	import logging
	 
	logging.basicConfig(filename='example.log',level=logging.INFO)
	logging.debug('This message should go to the log file')
	logging.info('So should this')
	logging.warning('And this, too')
* 其中下面这句中的level=loggin.INFO意思是，把日志纪录级别设置为INFO，也就是说，只有比日志是INFO或比INFO级别更高的日志才会被纪录到文件里，在这个例子， 第一条日志是不会被纪录的，如果希望纪录debug的日志，那把日志级别改成DEBUG就行了。

	logging.basicConfig(filename='example.log',level=logging.INFO)

* 感觉上面的日志格式忘记加上时间啦，日志不知道时间怎么行呢，下面就来加上!
	
	import logging
	logging.basicConfig(format='%(asctime)s %(message)s', datefmt='%m/%d/%Y %I:%M:%S %p')
	logging.warning('is when this event was logged.')
 
	#输出
	12/12/2010 11:46:36 AM is when this event was logged.

###日志格式

* %(name)s

	Logger的名字

* %(levelno)s

	数字形式的日志级别

* %(levelname)s

	文本形式的日志级别

* %(pathname)s

	调用日志输出函数的模块的完整路径名，可能没有

* %(filename)s

	调用日志输出函数的模块的文件名

* %(module)s

	调用日志输出函数的模块名

* %(funcName)s

	调用日志输出函数的函数名

* %(lineno)d

	调用日志输出函数的语句所在的代码行

* %(created)f

	当前时间，用UNIX标准的表示时间的浮 点数表示

* %(relativeCreated)d

	输出日志信息时的，自Logger创建以 来的毫秒数

* %(asctime)s

	字符串形式的当前时间。默认格式是 “2003-07-08 16:49:45,896”。逗号后面的是毫秒

* %(thread)d

	线程ID。可能没有

* %(threadName)s

	线程名。可能没有

* %(process)d

	进程ID。可能没有

* %(message)s

	用户输出的消息