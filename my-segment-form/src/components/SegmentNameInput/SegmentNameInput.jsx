import React from 'react';
import '../SegmentNameInput/SegmentNameInput.scss';

const SegmentNameInput = ({ setInputData, inputData }) => (
  <div className='input-box-wrapper'> 
    <label htmlFor="name"><span className='label-name'>Enter the Name of the Segment</span></label><br />
    <input
      type="text"
      id="name"
      name="name of the segment"
      required
      placeholder='Name of the segment'
      value={inputData}
      onChange={(e) => setInputData(e.target.value)}
      className="input-box"
    />
  </div>
);

export default SegmentNameInput;
