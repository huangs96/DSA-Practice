class Solution:
    def isAnagram(s, t):
        a = {}
        b = {}
        for i in s:
            if i in a:
                a[i]+=1
            else:
                a[i]=1
        for i in t:
            if i in b:
                b[i]+=1
            else:
                b[i]=1
        if a == b:
            return True
        else:
            return False
s = 'rat'
t = 'tar'
solutionInstantiate = Solution()
print(solutionInstantiate.isAnagram(s, t))