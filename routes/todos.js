const {Router} = require('express')
const router = Router()

router.get('/', (req,res) => {
    res.render('index', {
        title: "Главная страница",
        isIndex: true
    })
})

router.get('/create', (req,res) => {
    res.render('create', {
        title: "Добавить дело",
        isCreate: true
    })
})
module.exports = router