def char_concat(s):
    result = ""
    n = len(s) // 2

    for i in range(n):
        result += s[i] + s[len(s) - 1 - i] + str(i + 1)

    return result