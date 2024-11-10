import fetch from "./src/fetch.js"

import express from 'express'

const app = express()
const port = process.env.PORT

app.get('/api/v1/news', async (req, res) => {
    const count = req?.query?.count ? req?.query?.count : 5
    const VKResponse = await fetch(count)
    res.json(VKResponse)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})