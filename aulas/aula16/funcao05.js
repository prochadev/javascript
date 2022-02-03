function fatoral(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

let res = fatorial(5)