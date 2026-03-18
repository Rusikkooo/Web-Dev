n = int(input())
arr = list(map(int, input().split()))

# Выводим элементы с ЧЕТНЫМИ ИНДЕКСАМИ (0, 2, 4...)
for i in range(len(arr)):
    if i % 2 == 0:
        print(arr[i], end=" ")