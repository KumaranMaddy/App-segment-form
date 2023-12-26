import React from 'react';
import '../PopupFooter/PopupFooter.scss';
import axios from 'axios';

const PopupFooter = ({ setOpenPopup, inputData, array }) => {
  const handleSubmit = () => {
    if (inputData !== "") {
      const result = array.map(obj => ({ [Object.keys(obj)[0]]: Object.values(obj)[0] }));
      const payload = { "segment_name": inputData, "schema": result };

     axios.post("https://webhook.site/2657dc7b-d35b-4bac-871a-0e5180257fa2", payload)
     //axios.post(" https://webhook.site/725e8043-2a4f-4152-be25-7df992ad11a5", payload)
     
        .then(response => console.log(response));
    }
  };

  return (
    <div className='footer-container'>
      <div className='popup-btn-wrapper' onClick={handleSubmit}>
        <button className='popup-save-btn'>Save the Segment</button>
      </div>
      <div className='popup-btn-wrapper' onClick={() => setOpenPopup(false)}>
        <button className='popup-close-btn'>Cancel</button>
      </div>
    </div>
  );
};

export default PopupFooter;
