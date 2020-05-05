var totalNum = 0

for (let i = 2; i < process.argv.length; i++) {
    totalNum = totalNum + +process.argv[i]
}
console.log(totalNum)