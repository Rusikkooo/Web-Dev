n = int(input())

while n > 1 and n % 2 == 0:
    n = n // 2

if n == 1:
    print("YES")
else:
    print("NO")