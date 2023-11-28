prices = [7,1,5,3,6,4]
prices2 = [1,2,3,4,5]


class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        # initialize profit as 0
        profit = 0
        # loop through prices 
        for i in range(0, len(prices) - 1):
          # if element next to current element is greater than current element
          # because in stocks, we can only sell after we buy, we are checking if stock price increased the next day. Only if the stock increases the next day can we add it to te profit.
          if prices[i + 1] > prices[i]:
            # new profit value is now (current elemenet + 1) - current element
            profit = profit + prices[i + 1] - prices[i]
            # loop continues to continue summing profits
        
        return profit

solution = Solution()
print(solution.maxProfit(prices2))


        