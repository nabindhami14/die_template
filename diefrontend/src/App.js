import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Registration from './Pages/Registration';
import Sidebar from './Components/Sidebar';
import CustomUploadDemo from './Pages/BulkUpload';
import Login from './Pages/Login';
import MerchantSetup from './Pages/MerchantSetup';
import Merchant from './Pages/Merchant';
import Customer from './Pages/Customer';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Registration />} />
        <Route path='/bulk-registration' element={<CustomUploadDemo />} />
        <Route path="/login" element={<Login />} />
        <Route path='/merchant' element={<Merchant />} />
        <Route path='/merchant-setup' element={<MerchantSetup />} />
        <Route path='/customer' element={<Customer />} />
      </Routes>
    </>
  );
}

export default App;
