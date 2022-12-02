import connectDB from "../../../connectDB"
import User from "../../../model/schema"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import absoluteUrl from "next-absolute-url"

connectDB()

export default async (req, res) => {
    try {
        if (req.method === "PUT") {
            const { token } = req.query

            if (token) {
                const decoded = await jwt.verify(token, process.env.JNEXTAUTH_SECRET)
                const user = await User.findById(decoded._id);

                if (user) {
                    user.validEmail = "yes"
                    user.emailToken = undefined
                    await user.save()

                    return res.status(200).json({ message: "success", status: "ok" })
                }
            }
            else {
                return res.status(200).json({ message: "no Token" })
            }

        }
    } catch (error) {
        console.log(error)
    }
}