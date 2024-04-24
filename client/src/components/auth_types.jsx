import axios from "axios";
import { useEffect, useState } from "react";

import { Buffer } from "node:buffer"
import { cbs } from "proto/ok";

const AuthTypes = () => {
    const [authTypes, setAuthTypes] = useState([])

    const fetchauthTypes = async () => {
        const proto = cbs.merchant_service.GetAuthTypesResponse
        try {
            const res = await axios.get("http:///localhost:3018/api/v1/customers/auth-types", {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoiS2F0dGVsYmlwbG92NUBnbWFpbC5jb20iLCJpYXQiOjE3MTM5NDQ5MTAsImV4cCI6MTcxNDAzMTMxMH0.oIf-64R9YDXYj5DHcQjuKXTVtTvG1PPszTUHRQpmayc`
                }
            })

            const data = proto.decode(Buffer.from(res.data));
            setAuthTypes(data.authTypes)
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        fetchauthTypes()
    }, [])


    return (
        <>
            {authTypes.length > 0 && authTypes.map(m => (
                <div key={m.id}>
                    {m.name}
                </div>
            ))}
        </>
    )
}

export default AuthTypes


