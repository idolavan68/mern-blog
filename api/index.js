import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
const app = express()
const port = 3000



mongoose.connect(process.env.MONGO_URL)
    .then(console.log("connecting to Mongo DB")
    ).catch((err) => console.log(err))




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`server listening on port ${port}!`)
})