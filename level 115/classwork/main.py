def func(list, target):
    if list == []:
        return 0
    else:
        index1 = 0
        for i in list:
            if i != target:
                index1 += 1
            elif i == target:
                return index1
            else:
                return str(target) + "is not in list"
print(func([1,2,3,4,5,6], 4))