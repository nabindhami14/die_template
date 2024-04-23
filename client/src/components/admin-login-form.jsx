import { useState } from 'react';
import axios from 'axios';

import { Buffer } from "node:buffer"
import { cbs } from "proto/ok";

const AdminLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const proto = cbs.admin_service.LoginResponse;

        try {
            const res = await axios.post('http://localhost:3019/api/v1/admin/auth/login', {
                email,
                password
            });

            // console.log(res.data);

            console.log(Buffer.from(res.data));
            console.log(proto.decode(Buffer.from(res.data)));
            // const data = proto.decode(Buffer.from.da(resta));
            // console.log(data)

        } catch (error) {
            // const e = proto.decode(Buffer.from(error.response.data));
            console.log(error);
            // console.error('Error logging in:', e.message);
            // Handle error, show a message to the user, etc.

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AdminLoginForm;
