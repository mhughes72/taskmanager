
const add = (a, b) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a<0 || b<0) {
                return reject('wrong numbers')
            }
            resolve(a + b)
        }, 2000)

    })
}

const add2 = (a, b) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a<0 || b<0) {
                return reject('wrong numbers')
            }
            resolve(a * b)
        }, 2000)

    })
}

const doWork = async () => {
    const sum = await add(1, 2)
    console.log('sum: ', sum);
    const sum2 = await add2(sum, 50)
    console.log('sum2: ', sum2);
    const sum3 = await add(sum2, 34)
    console.log('sum3: ', sum3);
    return sum3
}


doWork().then((result) => {
    console.log('Matt' + result) 
}).catch((e) => {

    console.log('ERROR', e)
})


// doWork().then((result) => {

//     return 'Matt' + result
// }).then((newName) => {

//     console.log(newName)
// }).catch((e) => {

//     console.log('ERROR', e)
// })
