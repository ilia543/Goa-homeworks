def calc(numb1, numb2, func):
    if func == "+":
        return numb1 + numb2
    elif func == "-":
        return numb1 - numb2
    elif func == "/":
        if type(numb1 / numb2) == float:
            return "EROR"
        else:
            return numb1 / numb2
    elif func == "*":
        return numb1 - numb2
    else:
        return "EROR"
    
print(calc(int(input("enter number = ")), int(input("enter number = ")), input("enter sumbol : ")))