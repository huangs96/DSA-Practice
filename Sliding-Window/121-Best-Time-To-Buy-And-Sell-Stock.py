prices = [7,1,5,3,6,4]

class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        # initiate buy price as first element of list
        buy = prices[0]
        # initiate max_profit as 0
        max_profit = 0

        # loop through length of prices
        for i in range(1, len(prices)):
          # if buy price is more than current element
          if buy > prices[i]:
            # buy is now current element, this way, we are always getting the lowest element in the list
            buy = prices[i]
          # else if buy is smaller than current element, we want to see if current element - buy is more than current max profit
          elif (prices[i] - buy > max_profit):
            # if current element - buy is more than max_profit, max_profit is now current element - buy
            max_profit = prices[i] - buy
        
        return max_profit
        

buyAndSell = Solution()
print(buyAndSell.maxProfit(prices))