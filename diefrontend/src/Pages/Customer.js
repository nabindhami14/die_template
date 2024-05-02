import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import '../Styles/PagesStyles/Customer.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
const Customer = () => {
    const [customers, setCustomers] = useState([]);
    const columns = [
        { field: 'fullName', header: 'Full Name' },
        { field: 'authType', header: 'Email' },
        { field: 'phoneNumber', header: 'Phone Number' },
        { field: 'address', header: 'Address' },
    ];
    return (
        <>
            <div className="customer-part">
                <div className="customer-left">
                    <Sidebar />
                </div>
                <div className="customer-right">
                    <h1 style={{ textAlign: 'center' }}>Customer List</h1>
                    <div className="card">
                        <DataTable value={customers} tableStyle={{ minWidth: '50rem' }}>
                            {columns.map((col, i) => (
                                <Column key={col.field} field={col.field} header={col.header} />
                            ))}
                        </DataTable>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Customer;