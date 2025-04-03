const jwt = require('jsonwebtoken');
const { connection } = require("../utils/database"); 

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
        if (!decoded.Id) {
            return res.status(401).json({ message: "Invalid token: Missing user ID" });
        }

        if (!connection) {
            return res.status(500).json({ message: "Database connection is not available" });
        }

        connection.query(
            `SELECT passwordUpdatedAt FROM Users WHERE Id = ?`,
            [decoded.Id],
            (dbErr, resDB) => {
                
                if (dbErr) {
                    return res.status(500).json({ message: "Database error" });
                }
                console.log("Query Result:", resDB);
                if (resDB.length === 0) {
                    return res.status(401).json({ message: "User not found" });
                }

                const dbPasswordUpdatedAt = new Date(resDB[0].passwordUpdatedAt);
                const tokenPasswordUpdatedAt = new Date(decoded.passwordUpdatedAt);

                // If the password was changed after the token was issued, deny access
                if (dbPasswordUpdatedAt != null && tokenPasswordUpdatedAt < dbPasswordUpdatedAt) {
                    return res.status(401).json({ message: "Token expired. Please log in again." });
                }

                req.user = decoded;
                next();
            }
        );
    });
}

function authorizeAdmin(req, res, next) {
    if (!req.user || !req.user.Role) {
      return res.status(403).json({ message: "Unauthorized: Admins only" });
    }
    next();
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
    requireRoles,
    authorizeAdmin
};
