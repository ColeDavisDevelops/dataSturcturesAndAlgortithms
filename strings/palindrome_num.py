class Solution:
    def isPalindrome(self, x: int) -> bool:
        
        
        l = len(str(x))
        s = str(x)
        
        if l == 0 or l == 1:
            return True
        
        left = 0
        right = 0
        
        if l % 2 == 0:
            left = int(l / 2 - 1)
            right = int(l / 2)
        else: 
            left = floor(l / 2)-1
            right = ceil(l /2)
        
        while True:   
            if s[left] != s[right]:
                return False
            
            
            if left == 0 or right == len(s)-1:
                break
        
            if s[left] == s[right]:
                right += 1
                left -= 1
            else: 
                return False
        return True