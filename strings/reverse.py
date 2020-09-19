def reverse_str(str):
    for i in range(len(str)-1, -1, -1):
        yield str[i] 

for char in reverse_str("hello"):
    print(char)

