function selectMinimumDistinctStrings(sets) {
    const combinedSet = new Set(); // Combine all strings
    sets.forEach((set) => set.forEach((s) => combinedSet.add(s)));

    const frequencyMap = {}; // Store string frequencies
    for (const string of combinedSet) {
        frequencyMap[string] = (frequencyMap[string] || 0) + 1;
    }

    const selection = [];
    let remainingSets = 100; // Number of sets remaining to select from

    const sortedFrequencies = Object.entries(frequencyMap).sort(
        (a, b) => b[1] - a[1]
    ); // Sort by frequency (descending)

    for (const [string, frequency] of sortedFrequencies) {
        if (frequency >= remainingSets) {
            selection.push(string);
            remainingSets -= frequency;
        }
    }

    return selection;
}

// Example usage
const sets = [
    new Set(["a", "b", "c"]),
    new Set(["b", "c", "d"]),
    new Set(["c", "d", "e"]),
    new Set(["a", "d"]),
    new Set(["b", "d"]),
];

const selectedStrings = selectMinimumDistinctStrings(sets);
console.log(selectedStrings); // Output: Minimum number of distinct strings selected
