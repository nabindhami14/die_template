
import React from 'react';
import { FileUpload } from 'primereact/fileupload';
import '../Styles/PagesStyles/BulkUpload.css';
import Sidebar from '../Components/Sidebar';
export default function CustomUploadDemo() {
    const customBase64Uploader = async (event) => {
        // convert file to base64 encoded
        const file = event.files[0];
        const reader = new FileReader();
        let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

        reader.readAsDataURL(blob);

        reader.onloadend = function () {
            const base64data = reader.result;
        };
    };

    return (
        <>
            <div className='upload-part'>
                <div className='upload-left'>
                    <Sidebar />
                </div>
                <div className='upload-right'>
                <h1>Upload Bulk Customer Data</h1>
                    <div className='upload-right-box'>
                        <div className=" flex justify-content-center">
                            <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" customUpload uploadHandler={customBase64Uploader} />
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}

