##shutil

####高级的 文件、文件夹、压缩包 处理模块

* shutil.copyfileobj(fsrc, fdst[, length])  将文件内容拷贝到另一个文件中，可以部分内容
* shutil.copyfile(src, dst)  拷贝文件
* shutil.copymode(src, dst)
 仅拷贝权限。内容、组、用户均不变
* shutil.copystat(src, dst)  拷贝状态的信息，包括：mode bits, atime, mtime, flags
* shutil.copy(src, dst)  拷贝文件和权限
* hutil.copy2(src, dst)  拷贝文件和状态信息
* shutil.copytree(src, dst, symlinks=False, ignore=None)  递归的去拷贝文件
	例如：copytree(source, destination, ignore=ignore_patterns('*.pyc', 'tmp*'))
* shutil.rmtree(path[, ignore_errors[, onerror]])  递归的去删除文件
* shutil.move(src, dst)  递归的去移动文件
* shutil.make_archive(base_name, format,...)
	创建压缩包并返回文件路径，例如：zip、tar
####参数介绍
* base_name： 压缩包的文件名，也可以是压缩包的路径。只是文件名时，则保存至当前目录，否则保存至指定路径，
	如：www                        =>保存至当前路径
	如：/Users/wupeiqi/www =>保存至/Users/wupeiqi/
* format：	压缩包种类，“zip”, “tar”, “bztar”，“gztar”
* root_dir：	要压缩的文件夹路径（默认当前目录）
* owner：	用户，默认当前用户
* group：	组，默认当前组
* logger：	用于记录日志，通常是logging.Logger对象


	#将 /Users/wupeiqi/Downloads/test 下的文件打包放置当前程序目录
	 
	import shutil
	ret = shutil.make_archive("wwwwwwwwww", 'gztar', root_dir='/Users/wupeiqi/Downloads/test')
	 
	 
	#将 /Users/wupeiqi/Downloads/test 下的文件打包放置 /Users/wupeiqi/目录
	import shutil
	ret = shutil.make_archive("/Users/wupeiqi/wwwwwwwwww", 'gztar', root_dir='/Users/wupeiqi/Downloads/test')