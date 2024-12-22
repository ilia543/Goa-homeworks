def nums(a, b):

    numb = a * b

    a_b_numbs = sorted(str(a) + str(b))
    numb_numbers = sorted(str(numb))

    return a_b_numbs == numb_numbers



print(nums(6, 21))  # True
print(nums(21, 6))
print(nums(10, 11))  # False
print(nums(12, 11))
print(nums(103, 41))
print(nums(10, 231))