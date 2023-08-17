import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send('Fetching all products')
})

router.post('/', (_req, res) => {
    res.send('Saving a product')
})

export default router