import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers; // Lấy token từ headers

    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized Login Again" });
    }

    try {
        // Giải mã token để lấy userId
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id; // Thêm userId vào req.body
        next(); // Chuyển sang controller tiếp theo
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Invalid token" });
    }
};


export default authMiddleware;