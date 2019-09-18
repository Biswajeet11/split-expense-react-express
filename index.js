const express = require('express')
const app = express()
const mongoose = require('./config/db')
const { userRouter } = require('./app/controller/userController')
const { expenseRouter } = require('./app/controller/expenseController')
const PORT = 3020

app.use(express.json())
app.use('/user', userRouter)
app.use('/user', expenseRouter)

app.listen(PORT, () => console.log(`Listening at port${PORT}`))