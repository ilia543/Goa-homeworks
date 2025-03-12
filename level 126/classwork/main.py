def digit_degree(n):
    result = 0
    while len(str(n)) > 1:
        result +=1
        n1 = 0
        for i in str(n):
            n1 += int(i)
        n = n1
    return result