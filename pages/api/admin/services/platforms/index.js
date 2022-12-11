import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../../../auth/[...nextauth]"

export default async (req, res) => {

    const data = {
        platforms : [
            {
                name : 'Flipkart',
                status : 'Active',
                slug:'FKART'
            },{
                name : 'Meesho',
                status : 'Active',
                slug:'MESHO'
            },{
                name : 'Amazon',
                status : 'Active',
                slug:'AMZON'
            },{
                name : 'Paytm',
                status : 'Active',
                slug:'PAYTM'
            },{
                name : 'TATACliq',
                status : 'Active',
                slug:'TCLIQ'
            },{
                name : 'Flipkart',
                status : 'Active',
                slug:'FK'
            }
        ]
        }
    const session = await unstable_getServerSession(req, res, authOptions)
    if (session?.user && session.user?.role == 'admin' && session.user?.permissions.includes('services')) {
        res.send({sample:'data'});
    } else {
        // Not Signed in
        res.status(401)
    }
    res.end()
}