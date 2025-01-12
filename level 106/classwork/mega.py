def match(usefulness, months):
    u = sum(usefulness)
    w = 100 * 0.85 ** months
    if u >= w:
        return "Match!"
    else:
        return "No match!"
