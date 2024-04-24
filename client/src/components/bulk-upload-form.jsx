import { useState } from 'react';
import axios from 'axios';

const BulkUploadForm = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            alert('Please select a file.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            // Make an HTTP POST request to send the CSV file to the backend
            const response = await axios.post('http://localhost:3019/api/v1/admin/customers/bulk-upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEzOTQ2OTM2LCJleHAiOjE3MTQwMzMzMzZ9.V52LgGo4d3Vh9ecDepGaRmhZtnhSdAfiBYCj9jVeTUk`
                }

            });

            console.log('File uploaded successfully:', response.data);
            // Optionally, you can handle the response from the backend here
        } catch (error) {
            console.error('Error uploading file:', error);
            // Handle errors here
        }
    };

    return (
        <div>
            <h2>Upload CSV File</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} accept=".csv" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BulkUploadForm;
