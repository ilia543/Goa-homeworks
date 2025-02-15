def sum_digits(n):
    result = 0
    for i in str(n):
        result += int(i)

    return result

print(sum_digits(123))
print(sum_digits(405))



def sum_two_largest(lst):
    lst = sorted(lst)

    return lst[-1] + lst[-2]

print(sum_two_largest([3, 7, 2, 9, 5]))
print(sum_two_largest([10, 10, 5, 3]))