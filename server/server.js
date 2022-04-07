const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())

const port = process.env.PORT || 5050

app.listen(port, function () {
    console.log(`Server rocking out on port ${port}`)
})