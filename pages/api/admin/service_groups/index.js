import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"
import ServiceGroup from '../../../../utils/models/ServiceGroup'
import connectDB from "../../../../lib/connectDB"

connectDB();

export default async (req, res) => {



    const session = await unstable_getServerSession(req, res, authOptions)
    if (session?.user && session.user?.role == 'admin' && session.user?.permissions.includes('services')) {
        if (req.method == 'POST') {

            const { title, description } = req.body;
            const user = await ServiceGroup.findOne({ title: title })
            if (user) {
                return res.status(422).json({ error: "ServiceGroup already exists" });

            }
            const newServiceGroup = new ServiceGroup({
                title: title,
                description: description
            });
            const dbstatus = await newServiceGroup.save();

            res.status(200);
            res.send(dbstatus);
            res.end()
        }

        else if (req.method == 'GET') {
            console.log('Queried')
            const allServiceGroups = await ServiceGroup.find({});
            res.send(allServiceGroups)
            res.end();

        }
    } else {
        // Not Signed in
        res.status(401);

    }




}