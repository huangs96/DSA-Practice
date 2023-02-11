def containsDuplicate(nums):
    nums.sort()
    for i in range(1,len(nums)):
        if nums[i] == nums[i-1]:
            return True
    return False

print(containsDuplicate([1,2,3,1]))
print(containsDuplicate([1,2,3,4]))
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))