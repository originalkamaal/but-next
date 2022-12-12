import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]"
import ServiceGroup from '../../../../backend/models/ServiceGroup'
import connectDB from "../../../../frontend/lib/connectDB"

connectDB();

export default async (req, res) => {



    const session = await unstable_getServerSession(req, res, authOptions)
    if (session?.user && session.user?.role == 'admin' && session.user?.permissions.includes('services')) {
        if (req.method == 'GET') {
            console.log(req.query.sgid);
            ServiceGroup.findById(req.query.sgid, (err, docs) => {
                if (err) {
                    res.status(200).send({ error: 'Service group with ' + req.query.sgid + ' does not exists' });
                } else {
                    res.status(200).send(docs);
                    res.end();
                }
            });
        } else if (req.method == 'POST') {
            const { id, title, description, status } = req.body;
            ServiceGroup.findByIdAndUpdate(id, { title, description, status }, (err, docs) => {
                if (err) {
                    res.status(200).send({ error: 'Service group with ' + id + ' does not exists' });
                } else {
                    res.status(200).send({ success: true, message: 'Service group updated' });
                }
                res.end();

            })


        }
    } else {
        // Not Signed in
        res.status(401)
    }




}