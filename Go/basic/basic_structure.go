//当前程序包名
package main //只有package为main的包才能包含main函数

//导入其他的包
import stdio "fmt" //给包取一个别名

// 省略调用
//不建议这么做
import . "fmt"

//会告诉你包导入却没有引用，报错
//import "os"
//import "time"
//import "strings"

// import (
// 	"fmt"
// 	"os"
// 	"time"
// 	"string"
// )

// 定义常量
const PI = 3.14

//常量组
const (
	const1 = 1
	const2 = 2
	const3 = 3
)

//全局变量的声明与赋值
var name = "gopher"

//全局变量组
var (
	name1 = "sdf"
	name2 = 3
	name3 = "fbj"
)

//一般类型声明
type newType int
type (
	a int
	b int8
	c  
)

//结构的声明
type gopher struct {
}

//接口的声明
type golong interface {
}

//由main函数作为程序的入口文件
func main() {
	stdio.Println("hello world 你好世界")
	Println("hello2") //身略调用
}

//可见性规则
/*

Go语言中，使用大小写来决定该（常量，变量，类型，接口，结构或函数）是否可以被外部包所调用
根据约定，函数名首字母小写为private
		  函数名首字母大写为public

*/
