import axios from 'axios'
import { useEffect } from 'react';

// const { cbs } = require('proto/bundle') 
// import { cbs }  from 'proto/bundle'

import './App.css'

function App() {
  const fetchData = async () => {
    // const res = await axios.get("http://localhost:3018/api/v1/customers/health-check", { id: 10, name: "Hello World!!" })
    const res = await axios.post("http://localhost:3018/api/v1/customers/health-check", { id: 10, name: "Hello World!!" });
    // console.log(cbs.customer_auth_service.LoginResponse.decode(res.data));
    console.log(res);
  }


  useEffect(() => { fetchData() }, [])
  return (
    <>
      <h1>Hello World!!</h1>
    </>
  )
}

export default App
