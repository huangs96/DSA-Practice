matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 3

class Solution:
  def search(self, matrix, target):
    l = 0
    r = len(matrix) - 1
    # First search, we need to find the list that may contain target
    while l <= r:
      row = (l + r) // 2
      if target < matrix[row][0]:
        r = row - 1
      elif target > matrix[row][-1]:
        l = row + 1
      else: break
    
    if l > r:
      print('row:', row)
      return False

    # We should have our row here
    l = 0
    r = len(matrix[row]) - 1
    while l <= r:
      mid = (l + r) // 2
      if target == matrix[row][mid]:
        return target
      elif target < matrix[row][mid]:
        r = mid - 1
      elif target > matrix[row][mid]:
        l = mid + 1
    
    return False

searchF = Solution()
print(searchF.search(matrix, target))

