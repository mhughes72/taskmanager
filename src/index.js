const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    
})


const jwt = require('jsonwebtoken');

const myFunction = async () => {

    const token = jwt.sign({ _id: '234543334456' }, 'asdfaefdgesdddgsedg', { expiresIn: '1 seconds' })
    console.log('token: ', token);

    const data = jwt.verify(token, 'asdfaefdgesdddgsedg')
    console.log('data: ', data);
}

myFunction()