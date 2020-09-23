class Solution:
    def convert(self, s: str, numRows: int) -> str:

        matrix = []
        for i in range(numRows):
            matrix.append([""])
            
        row = 0
        idx = 0
        down = True
        for char in s:
            if down == True and row < numRows:
                while idx >= len(matrix[row]):
                    matrix[row].append("")
                matrix[row][idx] = char
                row += 1
                
            if down != True and row > 0:
                while idx >= len(matrix[row]):
                    matrix[row].append("")
                matrix[row][idx] = char

                row -= 1
                idx += 1
                
            if len(matrix) == 1:
                row -= 1
                idx += 1
            
            if row == numRows and down == True and len(matrix) != 1:
                down = False
                idx += 1
                row -= 2
            
            if row == 0 and down != True and len(matrix) != 1: 
                down = True
            
        decrypt = ""
        for r in matrix:
            for char in r:
                if char != "":
                    decrypt += char
        return decrypt