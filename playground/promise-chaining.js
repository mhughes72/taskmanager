require('../src/db/mongoose')

const User = require('../src/models/user')

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count;
}


updateAgeAndCount('5ebc1118310e6744a833340a', 23).then((count) => {
    console.log('count: ', count);
}).catch((e) => {

    console.log('ERROR', e)
})


// User.findByIdAndUpdate('5ebc42527bcd843808f6b503', { age: 1 }).then((user) => {

//     console.log(user)
//     return User.countDocuments({ age: 1 })

// }).then((result) => {
//     console.log('result: ', result);

// }).catch((e) => {
//     console.log('e: ', e);

// })


// const add = (a, b) => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (a < 0 || b < 0) {
//                 return reject('wrong numbers')
//             }
//             resolve(a + b)
//         }, 2000)

//     })
// }

