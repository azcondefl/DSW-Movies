const jwt = require('jsonwebtoken');

exports.autenticateToken = (req,res,next) => {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({error: 'No se proporciono un token de acceso'});
    }

    jwt.verify(token, 'secreto', (error, decoded) => {
        if(error) {
            return res.status(401).json({error: 'Token invalido'});
        }
        req.userId = decoded.userId;
        next();
    });
};