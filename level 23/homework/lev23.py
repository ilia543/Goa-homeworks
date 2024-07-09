# def add(num1, num2):
#     return num1 + num2
# print(add(14, 25))





# def print_products(products):
#     count = 1
#     for product in products:
#         print(count, product)
#         count = count + 1

# def get_product(choice, products):
#     return products[choice]

# def check_products(choice, products):
#     choice = choice - 1
#     if choice >= 0 and choice < len(products):
#         return choice

# def vending_machine(products):
#     print_products(products)

#     choice = int(input("Please enter choice: "))

#     choice = check_products(choice, products)

#     result = get_product(choice, products)

#     return result


# print(vending_machine(["Cola 2.00", "Borjomi 5.00", "Snickers 3.00", "Pomidori"]))





# def calculate():
#     num1 = int(input("enter num1 : "))
#     num2 = int(input("enter num2 : "))
#     print("1 = +")
#     print("2 = -")
#     print("3 = /")
#     print("4 = *")
#     chose = int(input("enter chois : "))
#     if chose == 1 :
#         print(num1 + num2)
#     elif chose == 2 :
#         print(num1 - num2)
#     elif chose == 3 :
#         print(num1 / num2)
#     elif chose == 4 :
#         print(num1 * num2)
#     else:
#         print("chose only 1,2,3,4")
# calculate()





# def strg():
#     str1 = input("enter 1 str = ")
#     str2 = input("enter 2 str = ")
#     str3 = input("enter 3 str = ")
#     strlist = [str1, str2, str3]
#     print(strlist)
# strg()