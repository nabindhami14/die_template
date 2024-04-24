import axios from 'axios';
import { useState } from 'react';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    merchantName: '',
    parameters: {
      senderId: '',
      receiverId: '',
      amount: '',
      remark: '',
      token: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      parameters: {
        ...prevState.parameters,
        [name]: value
      }
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);

    const res = await axios.post(
        'http:///localhost:3018/api/v1/customers/payments',
        formData,
        {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImVtYWlsIjoiS2F0dGVsYmlwbG92NUBnbWFpbC5jb20iLCJpYXQiOjE3MTM5NDQ5MTAsImV4cCI6MTcxNDAzMTMxMH0.oIf-64R9YDXYj5DHcQjuKXTVtTvG1PPszTUHRQpmayc`
            }
        }
    );

    console.log(res);
    // Reset form after submission
    setFormData({
      merchantName: '',
      parameters: {
        senderId: '',
        receiverId: '',
        amount: '',
        remark: '',
        token: ''
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column"}}>
      <label>
        Merchant Name:
        <input
          type="text"
          name="merchantName"
          value={formData.merchantName}
          onChange={(e) => setFormData({ ...formData, merchantName: e.target.value })}
          required
        />
      </label>
      <label>
        Sender ID:
        <input
          name="senderId"
          value={formData.parameters.senderId}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Receiver ID:
        <input
          name="receiverId"
          value={formData.parameters.receiverId}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Amount:
        <input
          name="amount"
          value={formData.parameters.amount}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Remark:
        <input
          type="text"
          name="remark"
          value={formData.parameters.remark}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Token:
        <input
          type="text"
          name="token"
          value={formData.parameters.token}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;
