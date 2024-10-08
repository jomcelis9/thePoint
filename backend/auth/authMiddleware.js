import { verify } from 'jsonwebtoken';

const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if(!token) return res.status(401).json({ message: 'Unauthorized'});

    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

export default protect;