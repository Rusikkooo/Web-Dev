v = int(input())
t = int(input())
s=v*t
if(v>0):
    print(s%109)
else:    
    print((s%109+109)%109)