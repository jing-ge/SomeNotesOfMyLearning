		
		// 模拟jquery底层链式编程

		// 快级作用域
		(function (window ,undefined) {
			// 特点1： 程序启动的时候，里面的代码自动执行
			// 特点2： 内部成员变量，外部无法访问（除了不加var的变量）

			// $ 最常用的对象，返回给外界  大型程序开发一般使用'_'开头作为私用的对象（认为规范）
			function _$(arguments) {
				//实现代码。。。
				// 正则表达式匹配id选择器
				var idselector = /#\w+/ ;
				this.dom; //此属性接受所得到的元素
				if (idselector.test(arguments[0])) {
					//如果匹配成功就接受dom元素
					this.dom = document.getElementById(arguments[0].substring(1))
				}else{
					throw new Error('arguments id error!');
				}
			}
			
			// 在function上扩展一个可以实现链式编程的方法
			Function.prototype.method = function (methodName ,fn) {
				this.prototype[methodName] = fn;
				return this//链式编程的关键
			}

			// 在_$的原型对象上加一些公共的方法
			_$.prototype = {
				consturctor : _$,
				addEvent: function (type, fn) {
					
					if (window.addEventListener) {
						// FF
						this.dom.addEventListener(type ,fn);
					} else if (window.attachEvent) {
						// IE
						this.dom.attachEvent('on'+type, fn);
					}
					
					return this
				},
				setStyle: function (prop,val) {
					this.dom.style[prop]=val
					return this
				}
			}

			// window 上注册一个全局变量
			window.$ = _$

			// 写一个准备的方法
			_$.onReady = function (fn) {
				// 1 实例化出来_$对象，真正注册到window上
				window.$ = function () {
					return new _$(arguments)
				};
				// 2 执行传入进来的代码
				fn();
				// 3 实现链式编程
				_$.method('addEvent',function () {
					
				}).method('setStyle',function () {
					
				})
			}


		})(window);//程序的入口 把window传入作用域中

