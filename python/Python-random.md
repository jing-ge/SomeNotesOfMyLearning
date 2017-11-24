random模块

随机数
import random
random.random()
random.randint(1,2)
random.randrange(1,10)
生成随机验证码
import random
checkcode = ''
for i in range(4):
    current = random.randrange(0,4)
    if current != i:
        temp = chr(random.randint(65,90))
    else:
        temp = random.randint(0,9)
    checkcode += str(temp)
print checkcode