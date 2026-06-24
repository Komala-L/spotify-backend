const jwt = require('jsonwebtoken');

const authArtist = async (req, res, next) => {
    const token = req.cookies.token;
    
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if (decoded.role !== 'artist') {
            return res.status(403).json({
                message: "You are not authorized to perform this action"
            })
        }

        req.user = decoded;
    }
    catch (error) {
        console.error("Auth Artist Error:", error);
        return res.status(401).json({
            message: "Unauthorized",
            error: error.message
        })
    }

    next();
}

module.exports = { authArtist };