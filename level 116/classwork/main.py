def series_sum(n):
    if n == 0:
        return "0.00"
    result = 0
    for i in range(n):
        result += 1 / (1 + 3 * i)
    return "%.2f" % result