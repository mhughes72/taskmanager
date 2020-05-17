require('../src/db/mongoose')

const User = require('../src/models/user')
const Task = require('../src/models/task')




const deleteAgeAndCount = async (id, age) => {
    const task = await User.findByIdAndDelete(id, { age })
    console.log('task: ', task);
    const count = await User.countDocuments({ age })
    return count;
}


deleteAgeAndCount('5ebc12ff7dae051734069053', 1).then((count) => {
    console.log('count: ', count);
}).catch((e) => {

    console.log('ERROR', e)
})


