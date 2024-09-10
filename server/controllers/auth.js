import AutSchema from "../models/auth.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

const registerController = async (req, res) => {
    try {
        const { name, surname, phone, email, password, birthday } = req.body
        const user = await AutSchema.findOne({email})

        if (!isEmail(email)) {
            return res.status(400).json({ message: "Geçerli bir e-posta adresi girin." })
        }
        
        if (password.length < 6) {
            return res.status(400).json({ message: "Şifreniz en az 6 karakter olmalıdır." })
        }

        if (user) {
            return res.status(409).json({ message: "Bu e-posta adresi zaten kayıtlı." })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await AutSchema.create({
            name,
            surname,
            phone,
            email,
            password: hashedPassword,
            birthday
        })

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.status(201).json({ status: "OK", newUser, token })


    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await AutSchema.findOne({ email })
        const passwordCompare = await bcrypt.compare(password, user.password)

        if(!user || !passwordCompare) {
            return res.status(401).json({ message: "E-posta adresi veya şifre yanlış." })
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.status(200).json({ status: "OK", user, token })

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

function isEmail(emailAdress) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailAdress.match(regex))
        return true;

    else
        return false;
}

export { registerController, loginController }