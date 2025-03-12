def bouncing_ball(h, b, w):
    if h <= 0 or not (0 < b < 1) or w >= h:
        return -1
    
    count = 0
    while h > w:
        h *= b
        count += 2

    return count - 1
