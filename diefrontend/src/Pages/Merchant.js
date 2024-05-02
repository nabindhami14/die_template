import React, { useState, useEffect } from "react";
import '../Styles/PagesStyles/Merchant.css'
import Sidebar from "../Components/Sidebar";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//import { ProductService } from './service/ProductService';
const Merchant = () => {
    const [products, setProducts] = useState([]);
    const columns = [
        { field: 'name', header: 'Name' },
        { field: 'authType', header: 'Auth Type' },
    ];

    // useEffect(() => {
    //     ProductService.getProductsMini().then(data => setProducts(data));
    // }, []);

    return (
        <>
            <div className="merchantList-part">
                <div className="merchantList-left">
                    <Sidebar />
                </div>
                <div className="merchantList-right">
                    <h1 style={{ textAlign: 'center', paddingBottom: '30px' }}>Merchant List</h1>
                    <div className="card">
                        <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
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

export default Merchant;