const { Router } = require('express')
const UserController = require('../Controllers/UserController')

const router = Router()

// Criar usuário
router.post('/users', UserController.createUser)
// Fazer login
// Ver feed
// Dar like em uma foto
// Postar foto
// Deletar foto
// Editar foto
// Visualizar perfil de um usuário
// Fazer logout

router.get('/', (req, res) => { return res.send("Hello World!")})

module.exports = router
