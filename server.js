const express = require('express')
const app = express()
const htmlroutes = require('./routes/html')
const apiRoutes = require('./routes/api')
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('public'))

app.use("/api", apiRoutes)
app.use("/", htmlroutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

