const jwt = require('jsonwebtoken');

function validateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1]; 

    jwt.verify(token, '123456asdfghjkljasjdhgasdyt6rt2376tuasgd', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        req.user = decoded; 
        next(); 
    });
}
function requireRoles(roles) {
    return (req, res, next) => {
        const userRole = req.body.role;
        if (roles.includes(userRole)) {
            next();
        } else {
            res.status(403).json({ message: 'Permission denied' });
        }
    };
}


module.exports = { 
    validateToken, 
    requireRoles 
};


