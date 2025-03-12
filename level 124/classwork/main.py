def set_alarm(e, v):
    if e == True and v == False:
        return True
    elif e == False and v == True:
        return False
    else:
        return False



def comp(a, b):
    if a is None or b is None:
        return False

    return sorted([x ** 2 for x in a]) == sorted(b)



def update_light(current):
    if current == "green":
        return "yellow"
    elif current == "yellow":
        return "red"
    elif current == "red":
        return "green"