const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})






// const me = new User({
//     name: '  Matt Hughes   ',
//     email: 'mattHughes@CNn.com  ',
//     age: 45,
//     password: '7fdHpasswo77  '
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)

// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }

// })

// const t = new Task({
//     description: 'Mind your busiNess ',
//     completed: true
// })

// t.save().then(() => {
//     console.log(t)
// }).catch((error) => {
//     console.log('error: ', error);

// })