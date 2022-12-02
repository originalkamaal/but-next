import Link from "next/link";
import { useRouter } from "next/router"
import { useState, useEffect } from "react";

export default function EmailConfirm() {
    const [status, setStatus] = useState(null);
    const router = useRouter()

    const { token } = router.query

    console.log(token)

    useEffect(() => {
        sendToken(token)
    }, [token])

    const sendToken = async (token) => {
        try {

            const res = await fetch(`/api/verify/${token}`, {
                "method": "PUT",
                "headers": {
                    "Content-Type": "application/json",
                }
            });

            setStatus("Successfully Verified")
        } catch (error) {
            setStatus("error" + error)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <div className=" text-7xl text-blue-500 font-extrabold">

            {status}
            </div>
            <div className="text-2xl font-extrabold pt-2">
                <Link href='/'>Go to Home</Link>
            </div>
        </div>)
}