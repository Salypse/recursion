function fibs(num) {
    const seq = [0,1]

    for (let i = 0; seq.length < num; i++) {
        seq.push(seq[i] + seq[i + 1])
    }
    return seq
}