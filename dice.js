let rollMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);
let maxOccur = 0;
while (maxOccur < 10) {
    let roll = Math.floor(Math.random() * 10) % 6 + 1;
    rollMap.set(roll, rollMap.get(roll) + 1);
    maxOccur = Math.max(...rollMap.values());
}
let minOccur = Math.min(...rollMap.values());
console.log(rollMap);
rollMap.forEach((value, key) => {
    if (value == maxOccur) {
        console.log("Maximum times roll : " + key + " occurring : " + value + " times");
    }
    if (value == minOccur) {
        console.log("Minimum times roll : " + key + " occurring : " + value + " times");
    }
})
