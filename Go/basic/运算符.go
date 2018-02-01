package main

import "fmt"

func main() {
	fmt.Println(^3)
	fmt.Println(1 ^ 3)
	//左移和右移
	fmt.Println(1 << 10)
	fmt.Println(1 >> 10)
	fmt.Println(1 << 3 << 3)
}
