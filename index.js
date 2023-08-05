import express from "express"
import cors from cors

const app = express()

// Using cors module
app.use(cors({
    origin:['http://localhost:5173','http://localhost:8000'], // * significaria que todos acceden
    // To restrict the methods use the methods property
}))

/* // If you don't want to use cors library use this code
app.use((req, res, next) => {
    // This defines from which origin or origins can request requests
    res.append('Access-Control-Allow-Origin', ['http://localhost:5173'])
    
    // This defines which method they can request
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    
    // This defines what can be requested
    res.append('Access-Control-Allow-Headers', 'Content-Type')
    next()
}) */


app.use('/ping', (req, res) => {
    res.send('You have connected with the API')
})

app.listen(3000)
console.log('Serve on port 3000')