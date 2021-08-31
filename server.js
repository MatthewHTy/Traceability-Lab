const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar ({
    accesToken: '50e4a655b9f64093934060fb75eaa349',
    captureUncaught: true,
    captureUnhandledRejections: true
})
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file server successfully.')
})


const port = process.env.PORT || 4545

// app.listen(4545, () => console.log('Welcome to 4545.'))
app.listen(port, () => console.log(`Welcome to ${port}`))