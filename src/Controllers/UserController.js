const User = require('../Models/User')

module.exports = {
    async createUser(req, res) {
        const { username, password, name, description, site} = req.body

        try {
            const createdUser = await User.create({
                username,
                password,
                name,
                description,
                site
            })

            return res.status(200).send({
                message: 'User created successfully',
                data: createdUser
            })

        } catch(err) {
            return res.status(400).send(err)
        }
    }
}