/////////// task 1
function isPrime(n) {
    for (let i = 2; i < n; j++) {
        if (n % i == 0) {
            return false
        }
        else {
            return true
        }
    }
    return n > 1
}
console.log('solution of task 1: ' + isPrime(0))
console.log('solution of task 1: ' + isPrime(1))
console.log('solution of task 1: ' + isPrime(17))
console.log('solution of task 1: ' + isPrime(10000000000000))
/////////// task 1




/////////// task 2
function factorial(n) {
    let result = 1
    for (i = n; i != 0; i--) {
        result *= i
    }
    return result
}
console.log('solution of task 2: ' + factorial(0))
console.log('solution of task 2: ' + factorial(1))
console.log('solution of task 2: ' + factorial(6))
/////////// task 2




/////////// task 3
function fib(n) {
    let fibonacci = [0, 1]
    for (i = 2; i <= n; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
    }
    return fibonacci[n]
}
console.log('solution of task 3: ' + fib(0))
console.log('solution of task 3: ' + fib(1))
console.log('solution of task 3: ' + fib(10))
console.log('solution of task 3: ' + fib(20))
/////////// task 3




///////////////////// task 4
function isSorted(array) {
    let newArray = {}
    newArray = array

    function foo(newArray) {
        newArray.sort(function (a, b) {
            return a - b
        })
        return newArray.join('')
    }

    if (newArray.join('') == foo(newArray)) {
        return true
    }
    else {
        return false
    }
}
console.log('solution of task 4: ' + isSorted([0]))
console.log('solution of task 4: ' + isSorted([-Infinity, -5, 0, 3, 9]))
console.log('solution of task 4: ' + isSorted([3, 9, -3, 10]))
/////////////////////




///////////////////// task 5
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log('solution of task 5: ' + reverseString(''))
console.log('solution of task 5: ' + reverseString('abcdef'))
/////////////////////




///////////////////// taks 6
function indexOfArray(arrayIndex) {
    let array = [1, 2, 3]
    return array.indexOf(arrayIndex)
}
console.log('solution of task 6: ' + indexOfArray(1))
console.log('solution of task 6: ' + indexOfArray(4))
/////////////////////




///////////////////// task 7
function isPalidrom(str) {
    let word
    let newWord
    let palidrom

    word = str.toLowerCase()
    newWord = word.replace(/\s/g, '')
    palidrom = word.split('').reverse().join('').replace(/\s/g, '')

    if (newWord == palidrom) {
        return true
    } else {
        return false
    }
}
console.log('solution of task 7: ' + isPalidrom(''))
console.log('solution of task 7: ' + isPalidrom('abcdcba'))
console.log('solution of task 7: ' + isPalidrom('abcd'))
console.log('solution of task 7: ' + isPalidrom('A man a plan a canal Panama'))
/////////////////////



