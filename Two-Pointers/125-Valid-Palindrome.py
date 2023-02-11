def isPalindrome(s):
    left = 0
    right = len(s)-1
    while left < right:
        # Step 1
        while left < right and not s[left].isalnum():
            left += 1
        #Step 2
        while left < right and not s[right].isalnum():
            right -= 1
        # Steps 3 and 4
        if s[left].lower() != s[right].lower():
            return False
        else:
            left += 1
            right -= 1
    # Step 6
    return True

print(isPalindrome("A man, a plan, a canal: Panama"))