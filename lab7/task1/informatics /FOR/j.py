import sys

data = sys.stdin.read().strip().split()

nums = data[:100]
result = sum(int(x) for x in nums) if nums else 0

print(result)
