import axios from "axios";
import { useEffect, useState } from "react";

import { Buffer } from "node:buffer"
import { cbs } from "proto/ok";

const Merchant = () => {
    const [merchant, setMerchant] = useState()

    const authPayloadMap = {
        0: "BASIC",
        1: "OAUTH2",
        2: "JWT"
    }

    const fetchMerchants = async () => {
        const proto = cbs.merchant_service.GetMerchantResponse;
        try {
            const res = await axios.get("http:///localhost:3018/api/v1/customers/merchants/1", {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsImVtYWlsIjoiSGVsbG8iLCJpYXQiOjE3MTM3NjQ5MDMsImV4cCI6MTcxMzg1MTMwM30.Sr-OqHIUvIBh7O_qIBTZUYNXlYCjikxusAqnd5UtRjg`
                }
            })

            const data = proto.decode(Buffer.from(res.data));
            setMerchant(data.merchant)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchMerchants()
    }, [])

    if (!merchant) return <h2>Loading...</h2>

    return (
        <>
            {merchant.name} || {authPayloadMap[merchant.authType]}
        </>
    )
}

export default Merchant
