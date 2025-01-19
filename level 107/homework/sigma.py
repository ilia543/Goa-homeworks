def func(list1):
    list1 = sorted(list1)
    return list1[-1] + list1[-2]

print(func([1,2,3,4,5,6]))



def func1(arr):

    for i in range(len(arr) - 1, -1, -1):

        for j in range(i - 1, -1, -1):

            if arr[i] == arr[j]:

                return arr[i]
    return "მასივში არცერთი ელემენტი არ მეორდება"

print(func1([1, 3, 4, 1, 3, 12]))
print(func1([3, 1, 4, 1, 3, 12]))

