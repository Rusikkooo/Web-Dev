a = int(input())
i = 1
cnt = 0
while True:
    i = pow(2, cnt)
    if i > a:
        break
    print(i)
    cnt += 1