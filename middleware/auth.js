const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        const token = req.header("Autorizacion")
        if(!token) return res.status(400).json({msg: " Autentificacion invalida"})

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, user) => {
            if(err) return res.status(400).json({msg: "Autentificacion valida"})

            req.user = user
            next()
        })
    } catch (error) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = auth