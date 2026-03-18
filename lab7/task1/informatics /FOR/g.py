n = int(input())
cnt = 2
for i in range(2, n+1):
    if(n%i==0):
        print(i, end=" ")
        cnt+=1
        break
    else:
        cnt+=1
        