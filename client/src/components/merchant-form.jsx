import { useState } from "react";
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

    const authPayload = ["BASIC", "OAUTH2", "JWT"];
    const authPayloadMap = { "BASIC": 0, "OAUTH2": 1, "JWT": 2 };

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
                { name: formData.name, authType: authPayloadMap[formData.authType] },
                {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsImVtYWlsIjoiSGVsbG8iLCJpYXQiOjE3MTM3NjQ5MDMsImV4cCI6MTcxMzg1MTMwM30.Sr-OqHIUvIBh7O_qIBTZUYNXlYCjikxusAqnd5UtRjg`
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
                    {authPayload.map((authType) => (
                        <option key={authType} value={authType}>
                            {authType}
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
