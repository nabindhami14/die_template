import axios from "axios";
import { useEffect, useState } from "react";

import { Buffer } from "node:buffer"
import { cbs } from "proto/ok";

const Merchants = () => {
    const [merchants, setMerchants] = useState([])

    const fetchMerchants = async () => {
        const proto = cbs.merchant_service.GetMerchantsResponse;
        try {
            const res = await axios.get("http:///localhost:3018/api/v1/customers/merchants", {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoiS2F0dGVsYmlwbG92NUBnbWFpbC5jb20iLCJpYXQiOjE3MTM5NDQ5MTAsImV4cCI6MTcxNDAzMTMxMH0.oIf-64R9YDXYj5DHcQjuKXTVtTvG1PPszTUHRQpmayc`
                }
            })

            const data = proto.decode(Buffer.from(res.data));
            setMerchants(data.merchants)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchMerchants()
    }, [])


    return (
        <>
            {merchants.length > 0 && merchants.map(m => (
                <div key={m.id}>
                    {m.name} || {m.authType}
                </div>
            ))}
        </>
    )
}

export default Merchants

