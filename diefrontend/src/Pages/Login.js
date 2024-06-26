import React from "react";
import { Container, FormControl } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navbars from "../Components/Navbar";
import { useNavigate } from "react-router-dom";
const Login = () => {
    return (
        <>
            <Navbars />
            <div style={{
                background: 'linear-gradient(to right, rgba(1, 118, 154, 1) 0%, rgba(255, 203, 5, 0.8) 100%)',
                padding: '15px 0',
                color: '#fff',
                fontsize: '13px'
            }}>
                <Container>
                    <h3 style={{ marginTop: '30px', marginBottom: '60px', textAlign: 'center' }}>Login your account</h3>
                    <Form style={{ width: '460px', margin: '0 auto', padding: '20px' }}>
                        <Form.Group as={Col} controlId="formGridCity" style={{ marginBottom: '30px' }}>
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="number" name="mobileNumber" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity" style={{ marginBottom: '30px' }}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridCity" style={{marginBottom:'30px'}}>
                            <Form.Label>Branch</Form.Label>
                            <Form.Control type="text" name="branch" />
                        </Form.Group>
                        <Button type="submit" className="mt-3 mb-3" style={{ backgroundColor: '#e4b400', color: 'black', outline: 'none', width: '120px', border: 'none' }}>
                            Login
                        </Button>
                    </Form>

                </Container>
            </div>
            <div>
                <Container>
                    <h3 style={{ color: '#007ea4', paddingTop: '20px', paddingBottom: "10px" }}>Disclaimer</h3>
                    <p>अनलाइन एप्लिकेशन मार्फत खोलिएका खाताहरूमा कुनैपनि बेला रकम जम्मा गर्न मिल्छ। खातावाल स्वयं बैंकको शाखामा आफ्नो परिचय खुल्ने सक्कल कागजात लिएर गएपछि मात्र खाता सक्रिय हुनेछ। खाता सक्रिय भए पश्चात् मात्र खातामा भएको रकम निकाल्न मिल्नेछ।</p>
                    <p>An accountholder can make deposits anytime to his/her Bank account opened via online application. However, the amount in the account can be withdrawn only after the account is activated. Accounts opened through online application will be activated only after the accountholder visits the Bank for identity verification along with his/her valid ID documents.</p>
                </Container>
            </div>
        </>
    );
}
export default Login;