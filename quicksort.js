let quicksort = (arr) => {
    let pivote = arr[-1];
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] <= pivote && arr[i] > arr[i + 1]) {
            let cambio = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = cambio;
        }
    }
}
let arr = [10, 5, 8, 4, 99, 56, 23, 1, 2]
quicksort(arr)
console.log(arr)