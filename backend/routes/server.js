const {Router} = require('express')

const {getUserByDairy, postUserByDairy, putByUsers, deleteByUsers} =require('../controller/server')


const router = Router()


router.get('/api/my',getUserByDairy)
router.post('/api',postUserByDairy)
router.put('/put',putByUsers)
router.delete('/delete',deleteByUsers)

module.exports= router

