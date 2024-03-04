const User = require("../Module/User.js")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const newUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log(username, email, password)
        const existUser = await User.getEmail(email);
        if (existUser.rows.length > 0) {
            return res
                .status(400)
                .json({ message: "User with the same email already exists" });
        }
        const hashedpassword = await bcrypt.hash(password, 10)
        const newUser = await User.register(username, email, hashedpassword);
        return res.status(200).json(newUser.rows);
    } catch (error) {
        console.log(error);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const existUser = await User.getEmail(email);
        if (existUser.rows.length > 0) {
            const user = existUser.rows[0]
            console.log(user)
            const hashedpassword = await bcrypt.compare(password, user.password)


            if (!hashedpassword) {
                return res.status(400).json({ message: "Invalid password" });
            }
            const Token = jwt.sign({
                user_id: user.user_id
            }, process.env.KEY)
            return res.status(200).json
                ({ username: user.username, email: user.email, Token: Token });

        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


module.exports = {
    newUser,
    login
}