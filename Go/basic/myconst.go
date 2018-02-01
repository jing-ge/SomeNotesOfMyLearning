package main

import "fmt"
import "strconv"

//一般常量都是大写字母
//但为了避免被外部调用
//1 在最开始加一个下划线
//2 在最开始加一个小写c表示常量

const (
	a       int = 1
	b           = 'A'
	d, e, f     = 1, 2, 3
)

var sss = "fbj"

const c = b
const m = a + 3
const (
	g = 1
	h //如果没定义初始值，自动沿用上一个的初值,要用这种规则，必须形式一样
	i
	n = "sss"
	k = len(n)
	//k = len(sss)//报错，常量的值必须是常量或者常量表达式
)

//常量组与枚举
const (
	a1 = "A"
	b1
	c1 = iota
	d1
)

func main() {
	fmt.Println(g)
	fmt.Println(h)
	fmt.Println(i)
	fmt.Println(k)

	fmt.Println("a1:" + a1)
	fmt.Println("b1:" + b1)
	fmt.Println("c1:" + strconv.Itoa(c1))
	fmt.Println("d1:" + strconv.Itoa(d1))
}
