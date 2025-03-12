def remove_smallest(numbers):
    if not numbers:
        return []

    smallest = min(numbers)
    found = False
    result = []
    for num in numbers:
        if num == smallest and not found:
            found = True
            continue
        result.append(num)

    return result