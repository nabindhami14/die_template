import { useEffect, useState } from "react";
import axios from "axios";

import { Buffer } from "node:buffer"
import { cbs } from "proto/ok";

const proto = cbs.merchant_service.GetMerchantResponse;

const MerchantForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        authType: '',
    });

    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        setMessage("")

        try {
            await axios.post(
                'http://localhost:3019/api/v1/admin/merchants',
                formData,
                {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoiS2F0dGVsYmlwbG92NUBnbWFpbC5jb20iLCJpYXQiOjE3MTM5NDQ5MTAsImV4cCI6MTcxNDAzMTMxMH0.oIf-64R9YDXYj5DHcQjuKXTVtTvG1PPszTUHRQpmayc`
                    }
                }
            );
            setMessage("Successfully Created")
        } catch (error) {
            const e = proto.decode(Buffer.from(error.response.data));
            console.error('Error sending form data:');
            setError(e.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Merchant Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="authType">Auth Type:</label>
                <select
                    id="authType"
                    name="authType"
                    value={formData.authType}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Auth Type</option>
                    {authTypes.map((authType) => (
                        <option key={authType.id} value={authType.name}>
                            {authType.name}
                        </option>
                    ))}
                </select>
            </div>
            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default MerchantForm;
