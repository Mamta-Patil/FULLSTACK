function longestConsecutive(arr) {
    arr.sort((a, b) => a - b);

    let res = 1, cnt = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1])
            continue;
        if (arr[i] === arr[i - 1] + 1) {
            cnt++;
        } 
        else {
            cnt = 1;
        }
        res = Math.max(res, cnt);
    }
    return res;
}

const arr = [2, 6, 1, 9, 4, 5, 3];
console.log(longestConsecutive(arr));
b