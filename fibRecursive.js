function fibsRec(num) {
    if (num <= 0) return []
    if (num === 1) return [0]
    if (num === 2) return [0, 1]

    const seq = fibsRec(num - 1)
    const nextNum = seq[seq.length - 1] + seq[seq.length - 2]
    
    seq.push(nextNum)
    return seq
}

console.log(fibsRec(8))