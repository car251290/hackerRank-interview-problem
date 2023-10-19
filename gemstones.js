function gemstones(arr) {
    let combined = arr.join("");
    let unique =[...Set(combined)];
    let result = unique.filter(ch => arr.every(str.includes(ch)));

    return result.length;
}