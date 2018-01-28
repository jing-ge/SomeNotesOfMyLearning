/**
 * @author JGG
 /

/**
  *命名空间 JGG
  */
var JGG = {}
//interface Class
/**
*接口类需要的参数
*参数1：接口的名字
*参数2：方法s(只有一个)接受方法名称的数组
*/
JGG.Interface = function (name ,methods) {
	// 判断接口的参数个数
	if (arguments.length !== 2) {
		throw new Error('this instence intercface constructor must have two parameters')
	}
	this.name = name ;
	this.methods = []; //定义一个空数组，等待接受元素
	for (var i =0, len = methods.length; i < len; i++){
		if (typeof methods[i] !== 'string') {
			throw new Error('intercface methods name must be string');
		}
		this.methods.push(methods[i]);
	}
}

//interfaceStatic function
// 三、 检验接口里的方法
//检验通过，不做任何操作，不通过，抛出一个异常
JGG.Interface.ensureImplements = function (object) {
	// 判断传入参数的个数
	if (arguments.length < 2) {
		throw new Error("The number of parameters is error,it must be more then two");
	}
	// 获得接口实例对象，获得接口实例的方法
	for (var i = 1, len=arguments.length; i < len; i++) {
		var instenceInterface = arguments[i];
		// 判断参数是否是接口类的实例
		if (instenceInterface.constructor !== JGG.Interface) {
			throw new Error("the arguments constructor not be Interface Class");
		}
		// 循环接口实例对象里面的每一个方法
		for (var j = 0; j < instenceInterface.methods.length; j++) {
			// 用一个临时变量接受每一个方法的名字（注意是字符串，并不是函数）
			var methodName = instenceInterface.methods[j]; 
			if (!object[methodName] || typeof object[methodName] !== 'function') {
				throw new Error("the method '" +methodName+"' is not found");
			}
		}
	}
}

//继承
//extend方法 1.继承一次父类的模板，2，继承一次父类的原型对象
JGG.extend = function(sub, sup) {
	//目的：实现只继承父类的原型对象
	var F = new Function();//1 创建一个空函数  目的：用一个空函数中转
	F.prototype = sup.prototype;//2 实现空函数的原型对象和超类的原型对象的转换
	sub.prototype = new F();//3 原型继承（屏蔽了模板 ）

	//善后处理
	sub.prototype.constructor = sub;//4 还原子类的构造器
	//保存一下父类的原型对象，方便解耦，方便获得父类的原型对象
	sub.superClass = sup.prototype;//自定义一个静态属性，接受父类的原型对象
	//判断父类原型构造器加保险
	if (sup.prototype.constructor == Object.prototype.constructor) {
		sup.prototype.constructor = sup;//手动还原父类原型函数构造器
	}
}

//单体模式
//实现一个跨浏览器的时间处理程序
JGG.EventUtil = {
	//addHandler(el, type, fn)
	addHandler:function(element, type, handler){
		if (element.addEventListener) {//FF
			element.addEventListener(type,handler,false)//false 冒泡事件，不采用捕获事件
		} else if (element.attachEvent) {//IE
			element.attachEvent('on'+type,handler)
		}
	},
	removeHandler:function(element, type, handler){
		if (element.removeEventListener) {//FF
			element.removeEventListener(type,handler,false)//false 冒泡事件，不采用捕获事件
		} else if (element.detachEvent) {//IE
			element.detachEvent('on'+type,handler)
		}
	}
}
