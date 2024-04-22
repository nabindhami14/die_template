import axios from "axios";
import { useEffect } from "react";

import { Buffer } from "node:buffer"
import { cbs } from "proto/ok";

const Merchants = () => {
    const fetchMerchants = async () => {

        const proto = cbs.merchant_service.GetMerchantsResponse;
        try {
            const res = await axios.get("http:///localhost:3018/api/v1/customers/merchants", {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsImVtYWlsIjoiSGVsbG8iLCJpYXQiOjE3MTM3NjQ5MDMsImV4cCI6MTcxMzg1MTMwM30.Sr-OqHIUvIBh7O_qIBTZUYNXlYCjikxusAqnd5UtRjg`
                }
            })

            console.log(res);
            const data = proto.decode(Buffer.from(res.data));

            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchMerchants()
    }, [])

    return (
        <></>
    )
}

export default Merchants