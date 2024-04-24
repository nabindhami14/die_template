import axios from 'axios';
import { useState } from 'react';

const AuthTypeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        parameters: {
            token: {
                name: 'token',
                type: 'string'
            }
        }
    });

    const handleChange = (e, fieldName) => {
        const { value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };

    const handleParameterChange = (e, fieldName, subFieldName) => {
        const { value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            parameters: {
                ...prevData.parameters,
                [fieldName]: {
                    ...prevData.parameters[fieldName],
                    [subFieldName]: value
                }
            }
        }));
    };

    const handleAddField = () => {
        setFormData(prevData => ({
            ...prevData,
            parameters: {
                ...prevData.parameters,
                [`field_${Object.keys(prevData.parameters).length + 1}`]: {
                    name: '', // Initialize name field for new parameter
                    type: 'string'
                }
            }
        }));
    };

    const handleRemoveField = fieldName => {
        setFormData(prevData => {
            const updatedParameters = { ...prevData.parameters };
            delete updatedParameters[fieldName];
            return {
                ...prevData,
                parameters: updatedParameters
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            name: formData.name,
            parameters: Object.entries(formData.parameters).reduce((acc, [, fieldData]) => {
                acc[fieldData.name] = fieldData.type;
                return acc;
            }, {})
        };
        const response = await axios.post('http://localhost:3019/api/v1/admin/auth-type', data, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzEzOTQ2OTM2LCJleHAiOjE3MTQwMzMzMzZ9.V52LgGo4d3Vh9ecDepGaRmhZtnhSdAfiBYCj9jVeTUk`
            }

        });

        console.log(response);
    };

    return (
        <div>
            <h2>Authentication Type</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={formData.name}
                    onChange={e => handleChange(e, 'name')}
                    placeholder="Authentication Type"
                />
                {Object.entries(formData.parameters).map(([fieldName, fieldData]) => (
                    <div key={fieldName}>
                        <input
                            type="text"
                            value={formData.parameters[fieldName].name}
                            onChange={e => handleParameterChange(e, fieldName, 'name')}
                            placeholder="Parameter Name"
                        />
                        <select value={fieldData.type} onChange={e => handleParameterChange(e, fieldName, 'type')}>
                            <option value="string">String</option>
                            <option value="int">int</option>
                            <option value="float">float</option>
                            {/* Add more options as needed */}
                        </select>
                        <button type="button" onClick={() => handleRemoveField(fieldName)}>
                            Remove
                        </button>
                    </div>
                ))}
                <button type="button" onClick={handleAddField}>
                    Add Field
                </button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AuthTypeForm;
