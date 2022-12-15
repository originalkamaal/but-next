import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"
import ServiceGroup from '../../../../utils/models/ServiceGroup'
import connectDB from "../../../../lib/connectDB"

connectDB();

export default async (req, res) => {



    const session = await unstable_getServerSession(req, res, authOptions)
    if (session?.user && session.user?.role == 'admin' && session.user?.permissions.includes('services')) {
        if (req.method == 'POST') {

        }

        else if (req.method == 'GET') {


        }
    } else {
        // Not Signed in
        res.status(401);

    }




}