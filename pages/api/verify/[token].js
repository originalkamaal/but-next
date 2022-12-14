import connectDB from "../../../lib/connectDB"
import User from "../../../models/User"
import jwt from "jsonwebtoken"

connectDB()

export default async (req, res) => {
    try {
        if (req.method === "PUT") {
            const { token } = req.query

            if (token) {
                const decoded = await jwt.verify(token, process.env.NEXTAUTH_SECRET);
                const user = await User.findById(decoded._id);

                if (user) {
                    user.validEmail = true
                    user.emailToken = undefined
                    await user.save()

                    return res.status(200).send({ message: "success", status: "ok" })
                }
            }
            else {
                return res.status(200).send({ message: "no Token" })
            }

        }
    } catch (error) {
    }
}