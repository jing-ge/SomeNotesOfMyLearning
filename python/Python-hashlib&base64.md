hashlib模块　　

用于加密相关的操作，3.x里代替了md5模块和sha模块，主要提供 SHA1, SHA224, SHA256, SHA384, SHA512 ，MD5 算法

	import hashlib
	 
	m = hashlib.md5()
	m.update(b"Hello")
	m.update(b"It's me")
	print(m.digest())
	m.update(b"It's been a long time since last time we ...")
	 
	print(m.digest()) #2进制格式hash
	print(len(m.hexdigest())) #16进制格式hash
	'''
	def digest(self, *args, **kwargs): # real signature unknown
	    """ Return the digest value as a string of binary data. """
	    pass
	 
	def hexdigest(self, *args, **kwargs): # real signature unknown
	    """ Return the digest value as a string of hexadecimal digits. """
	    pass
	 
	'''
	import hashlib
	 
	# ######## md5 ########
	 
	hash = hashlib.md5()
	hash.update('admin')
	print(hash.hexdigest())
	 
	# ######## sha1 ########
	 
	hash = hashlib.sha1()
	hash.update('admin')
	print(hash.hexdigest())
	 
	# ######## sha256 ########
	 
	hash = hashlib.sha256()
	hash.update('admin')
	print(hash.hexdigest())
	 
	 
	# ######## sha384 ########
	 
	hash = hashlib.sha384()
	hash.update('admin')
	print(hash.hexdigest())
	 
	# ######## sha512 ########
	 
	hash = hashlib.sha512()
	hash.update('admin')
	print(hash.hexdigest())

还不够吊？python 还有一个 hmac 模块，它内部对我们创建 key 和 内容 再进行处理然后再加密
散列消息鉴别码，简称HMAC，是一种基于消息鉴别码MAC（Message Authentication Code）的鉴别机制。使用HMAC时,消息通讯的双方，通过验证消息中加入的鉴别密钥K来鉴别消息的真伪；

一般用于网络通信中消息加密，前提是双方先要约定好key,就像接头暗号一样，然后消息发送把用key把消息加密，接收方用key ＋ 消息明文再加密，拿加密后的值 跟 发送者的相对比是否相等，这样就能验证消息的真实性，及发送者的合法性了。

		import hmac
		h = hmac.new(b'天王盖地虎', b'宝塔镇河妖')
		print h.hexdigest()

###base64模块
* Base64编码是一种“防君子不防小人”的编码方式。广泛应用于MIME协议，作为电子邮件的传输编码，生成的编码可逆，后一两位可能有“=”，生成的编码都是ascii字符。
* 优点：速度快，ascii字符，肉眼不可理解
* 缺点：编码比较长，非常容易被破解，仅适用于加密非关键信息的场合
	Python中进行Base64编码和解码
	
		>>> import base64
		>>> s = '我是字符串'
		>>> a = base64.b64encode(s)
		>>> print a
		ztLKx9fWt/u0rg==
		>>> print base64.b64decode(a)
		我是字符串