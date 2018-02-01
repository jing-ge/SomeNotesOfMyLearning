package main

import (
	"fmt"
	"strconv"
)

type (
	byte   int8
	rune   int32
	wenben string
)

func main() {
	var b wenben = "冯博靖"
	var a int = 1
	c := 3
	var e, f, _, h int = 1, 2, 3, 4
	// var e, f, g, h = 1, 2, 3, 4
	// e, f, g, h := 1, 2, 3, 4
	fmt.Println(b)
	fmt.Println(a)
	fmt.Println(c)
	fmt.Println(e)
	fmt.Println(f)
	fmt.Println(h)
	var f2 float32 = 3.14
	fmt.Println(f2)
	f1 := int(f)
	fmt.Println(f1)

	var m int = 65
	n := string(m)
	fmt.Println(n)

	var j int = 65
	k := strconv.Itoa(j)
	fmt.Println(k)
}
