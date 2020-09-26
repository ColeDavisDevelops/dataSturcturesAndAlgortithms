def reverse_str(str):
    helper(s, l, r)

def helper(s, l, r):
    if l >= r:
        return

    helper(s, l+1, r-1)


# comment pandas