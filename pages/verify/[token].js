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
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            }

            const res = await fetch(`/api/verify/${token}`, {
                "method": "PUT",
                "headers" : headers
            });
            console.log(res);

            setStatus("Successfully Verified")
        } catch (error) {
            setStatus("error" + error)
        }
    }

    return (
        <div className="text-7xl text-blue-500 font-extrabold">
            {status}
        </div>)
}