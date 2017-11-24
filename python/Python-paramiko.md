##Python之paramiko
详细博客链接
http://www.cnblogs.com/wupeiqi/articles/5095821.html
###基于用户名密码连接：
	import paramiko
	  
	# 创建SSH对象
	ssh = paramiko.SSHClient()
	# 允许连接不在know_hosts文件中的主机
	ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
	# 连接服务器
	ssh.connect(hostname='c1.salt.com', port=22, username='wupeiqi', password='123')
	  
	# 执行命令
	stdin, stdout, stderr = ssh.exec_command('df')
	# 获取命令结果
	result = stdout.read()
	  
	# 关闭连接
	ssh.close()
###SFTPClient:
	import paramiko
	 
	transport = paramiko.Transport(('hostname',22))
	transport.connect(username='wupeiqi',password='123')
	 
	sftp = paramiko.SFTPClient.from_transport(transport)
	# 将location.py 上传至服务器 /tmp/test.py
	sftp.put('/tmp/location.py', '/tmp/test.py')
	# 将remove_path 下载到本地 local_path
	sftp.get('remove_path', 'local_path')
	 
	transport.close()