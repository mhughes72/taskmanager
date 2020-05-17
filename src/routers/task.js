
const express = require('express')
const User = require('../models/task')
const router = new express.Router()


router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.staus(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }

})




router.get('/tasks', async (req, res) => {

    try {
        const task = await Task.find({})
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }

})


router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }


})

router.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => {
        return (allowedUpdates.includes(update))
    })

    if (!isValidOperation) {
        return res.status(400).send("error")
    }

    try {
        console.log('ONE: ', req.params.id)
        const task = await Task.findById(req.params.id)
        console.log('ONE 1: ', updates)

        updates.forEach((update) => task[update] = req.body[update] )
        await task.save()
        console.log('ONE 2: ', task)

        if (!task) {
            return res.status(404).send(e)
        }
        res.send(task)
    } catch (e) {
        console.log('ONE 3: ')
        res.status(400).send(e)
    }

})

router.delete('/tasks/:id', async (req, res) => {

    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            console.log('1')
            return res.status(404).send()
        }
        console.log('2')

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router