function bubble(arr) {
    for (let i = 0; i <= arr.length - 1; i++) {
        for (let e = i + 1; e <= arr.length; e++) {
            if (arr[i] > arr[e]) {
                let temp = arr[i]
                arr[i] = arr[e]
                arr[e] = temp
            }
        }
    }
}

let a = [2, 3, 5, 4, 1, -2, 0]

bubble(a)
console.log(a)