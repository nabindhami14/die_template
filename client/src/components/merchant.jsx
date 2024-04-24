import axios from "axios";
import { useEffect, useState } from "react";

import { Buffer } from "node:buffer"
import { cbs } from "proto/ok";

const Merchant = () => {
    const [merchant, setMerchant] = useState()


    const fetchMerchants = async () => {
        const proto = cbs.merchant_service.GetMerchantResponse;
        try {
            const res = await axios.get("http:///localhost:3018/api/v1/customers/merchants/2", {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoiS2F0dGVsYmlwbG92NUBnbWFpbC5jb20iLCJpYXQiOjE3MTM5NDQ5MTAsImV4cCI6MTcxNDAzMTMxMH0.oIf-64R9YDXYj5DHcQjuKXTVtTvG1PPszTUHRQpmayc`
                }
            })
            const data = proto.decode(Buffer.from(res.data));
            console.log(data)
            setMerchant(data.merchant)
        } catch (error) {
            const e = proto.decode(Buffer.from(error.response.data));
            console.error('ERROR GET MERCHANT:', e.message);
        }
    }


    useEffect(() => {
        fetchMerchants()
    }, [])

    if (!merchant) return <h2>Loading...</h2>

    return (
        <>
            <hr />
        </>
    )
}

export default Merchant
