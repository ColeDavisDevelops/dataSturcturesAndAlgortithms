class Solution:
    def myAtoi(self, str: str) -> int:
        negative = "-"
        pos = "+"
        valid = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
   
        found_num = False
        found_sign = False
        positive = True
        atoi = ""
        
        if len(str) == 0:
            return 0
        
        for char in str: 
            if found_num == True and char not in valid:
                break
            
            if found_sign == True and char not in valid:
                return 0
                
            if found_num == False and char not in valid and char != negative and char != " " and char != pos:
                return 0    

            if char == negative and found_num != True:
                found_sign = True
                positive = False
                
            if char == pos and found_num != True:
                found_sign = True
            
            if char in valid: 
                found_num = True
                atoi += char
              
            if len(atoi) > 1 and int(atoi) >= 2**31:
                if positive == True:
                    return 2**31 - 1
                return 2**31 * -1
            
        
        if len(atoi) == 0:
            return 0

        if positive == True:
            return int(atoi)
        return int(atoi) * -1

