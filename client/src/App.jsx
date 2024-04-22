import axios from 'axios'
import { useEffect } from 'react';

import { Buffer } from "node:buffer"

// const { cbs } = require('proto/bundle') 
import { cbs } from 'proto/ok'
// import { cbs } from './ok.js'


import './App.css'
import Merchants from './components/merchants';

function App() {
  // const fetchData = async () => {
  //   try {
  //     const dProto = cbs.customer_auth_service.HealthCheckResponse;
  //     // const proto = cbs.customer_auth_service.HealthCheckRequest
  //     const payload = { id: 10, name: "Hello World!!" }
  //     // const p = proto.create(payload);
  //     // const s = proto.encode(p).finish();


  //     const res = await axios.post("http://localhost:3018/api/v1/customers/health-check", payload);
  //     const rrr = dProto.decode(Buffer.from(res.data,));
  //     console.log(rrr);

  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }



  // useEffect(() => { fetchData() }, [])
  return (
    <>
      <Merchants />
    </>
  )
}

export default App
