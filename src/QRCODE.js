import React,{useState} from 'react'
import QRCode from 'qrcode.react';


const QRCODE = () => {
    const [text,setText] = useState("");
    const [qrValue,setQrValue] = useState("");
    console.log("text",text,"qrValue",qrValue)
    // console.log("qrValue",qrValue)

    const handleInput = (e) =>{
        setText(e.target.value);
    }

    const generateQR = () =>{
        setQrValue(text);
    }

    return (
        <div className="container mt-5 ">
            <h1 className='text-center mb-3' >QR Code Generator</h1>
            <div className="form-group">
                <input type="text"
                className='form-control'
                placeholder='Enter the text'
                value={text} 
                onChange={handleInput}/>
            </div>
            
            <div className="text-center mt-3">
                <button className='btn btn-primary mt-3' onClick={generateQR}>Generate QR code</button>
            </div>

            <div className="text-center mt-5">
                 {qrValue && <QRCode value={qrValue} />}
            </div>
        </div>
  )
}

export default QRCODE
