import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import '../Styles/PagesStyles/MerchantSetup.css';
import { InputText } from "primereact/inputtext";
import { Dropdown } from 'primereact/dropdown';
const MerchantSetup = () => {
    const [selectedAuth, setSelectedAuth] = useState(null);
    const auth = [
        { name: 'Basic', code: '1' },
        { name: 'JWT', code: '2' },
        { name: 'Token', code: '3' },
    ];
    return (
        <>
            <div className="merchant-part">
                <div className="merchant-left">
                    <Sidebar />
                </div>
                <div className="merchant-right">
                    <h1 style={{textAlign:'center'}}>Merchant Setup</h1>
                    <form>
                        <div className="form-name">
                            <label>Merchant Name:</label>
                            <div className="form-name card flex justify-content-center">
                                <InputText id="merchant-name" />
                            </div>
                        </div>
                        <div className="form-auth">
                            <label>Auth Type:</label>
                            <div className="card flex justify-content-center">
                                <Dropdown value={selectedAuth} onChange={(e) => setSelectedAuth(e.value)} options={auth} optionLabel="name"
                                    placeholder="Select a Auth Type" className="w-full md:w-14rem" />
                            </div>
                        </div>
                        <div className="form-auth">
                            <label>Merchant Name:</label>
                            <div className="card flex justify-content-center">
                                <Dropdown value={selectedAuth} onChange={(e)=>setSelectedAuth(e.value)} options={auth} optionLabel="name" placeholder="Select Merchant Name" className="w-full md:w-14rem"/>
                            </div>
                        </div>
                        <div className="form-button">
                            <button>Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default MerchantSetup;