import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../../auth/[...nextauth]"

export default async (req, res) => {

    console.log(req.body)
    if (req.method = 'PUT') {
        const platforms = [
            {
                title: 'title',
                desc: 'description',
                status: 'active',
                edit: 'edit',
                delete: 'delete',

            }
        ]

        const session = await unstable_getServerSession(req, res, authOptions)
        if (session?.user && session.user?.role == 'admin' && session.user?.permissions.includes('services')) {
            res.send(platforms);
        } else {
            // Not Signed in
            res.status(401)
        }
        res.end()
    }




}