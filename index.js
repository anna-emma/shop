    const express = require('express')
    const index = express()
    const port = 3000

    index.get('/', (req, res) => {
      res.send('Welcome to Anna-Emma Metaverse shop!')
    })

    index.get('/about', (req, res) => {
      res.send('About')
    })

    index.get('/home', (req, res) => {
      res.send('Home')
    })

    index.get('/contact-us', (req, res) => {
      res.send('Contact')
    })


    index.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
