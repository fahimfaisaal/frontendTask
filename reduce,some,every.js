console.clear()

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//* implement of forEach Function
function myForEach(arr, cb) {

    for (let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr);
    }
}

myForEach(arr, (item, index, arr) => {
    // console.log('value =',item,'index =', index,'array =', arr);
})


//* Implement of forEachRight function
function forEachRight(arr, cb) {
    let invertedArray = []
    for (let i = arr.length - 1; i >= 0; i--) invertedArray.push(arr[i])

    for (let i = 0; i < invertedArray.length; i++) cb(invertedArray[i], i, invertedArray)
}

forEachRight(arr, (item, index, arr) => {
    // console.log(item, index, arr)
})

//* implement of reduce function
function myReduce(arr, cb, initial) {
    let accumulator, i

    if (!initial) {
        accumulator = arr[0]
        i = 1
    } else {
        accumulator = initial
        i = 0
    }
    
    for (; i < arr.length; i++) accumulator = cb(accumulator, arr[i], i, arr)

    return accumulator
}

let sumReduce = myReduce(arr, (acc, item) => acc + item)
// console.log('reduce function result =', sumReduce)

//* implement of reduceRight function
function myReduceRight(arr, cb, initial) {
    let accumulator, i

    if (!initial) {
        accumulator = arr[arr.length - 1]
        i = arr.length - 2
    } else {
        accumulator = initial
        i = arr.length - 1
    }
    
    for (; i >= 0; i--) accumulator = cb(accumulator, arr[i], i, arr)

    return accumulator
}

let rightReduce = myReduceRight(arr, (acc, item) => {
    acc.push(item ** 2)
    return acc
}, [])
// console.log(rightReduce)

//* implement of some function
function mySome(arr, cb) {
    let result = false

    for (let i = 0; i < arr.length; i++) if (cb(arr[i], i)) result = true

    return result    
}

let some = mySome(arr, item => item > 0)
// console.log('some function result =', some)

//* implement of every function
function myEvery(arr, cb) {
    let result = true

    for (let i = 0; i < 10; i++) if (cb(arr[i], i)) result = false

    return result
}

let every = myEvery(arr, item => item % 2 === 0)
// console.log('every function result =', every)

//* Calculator
function calculate(cb) {
    return cb()
}

const sum = calculate(_ => 1 + 2 + 3)
// console.log('Total sum =', sum)

const sub = calculate(_ => 100 - 50)
// console.log('Total sub =', sub)

const mul = calculate(_ => 1 * 2 * 3)
// console.log('Total mul =', mul)

const div = calculate(_ => 100 / 2)
// console.log('div =', div)