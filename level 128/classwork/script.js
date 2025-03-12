function smallestInteger(matrix) {
    const f = matrix.reduce((acc, row) => acc.concat(row), []);
    
    let missing = 0;
  
    while (f.includes(missing)) {
        missing++;
    }
    
    return missing;
  
  
}