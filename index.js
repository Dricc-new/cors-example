import express from "express"

const app = express()

app.use('/ping', (req, res) =>{
    res.send('You have connected with the API')
})

app.listen(3000)
console.log('Serve on port 3000')