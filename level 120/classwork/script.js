function unionSets(setsArray) {

    return setsArray.reduce((acc, set) => {

        set.forEach(value => acc.add(value));
        return acc;

    }, new Set());

}

