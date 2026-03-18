
n = int(input())
arr = []
cnt = 0
for i in range(n):
    arr.append(input())
for i in range(n):
    if arr[i] == "0":
        cnt += 1
print(cnt)
