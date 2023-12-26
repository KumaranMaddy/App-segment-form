import React, { useState } from 'react';
import '../SchemaDropdown/SchemaDropdown.scss';
import '../NewSchemaDropdown/NewSchemaDropdown.scss';
import NewSchemaOption from '../NewSchemaOption/NewSchemaOption';

const NewSchemaDropdown = ({ setArray, array }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const editNewSchema = (element, elementToBeRemove) => {
    if (array.some((ele) => Object.values(ele)[0] === Object.values(element)[0])) {
      console.log(Object.values(element)[0], Object.values(elementToBeRemove)[0]);
      return;
    }
    const updatedArray = array.filter((ele) => Object.values(ele)[0] !== Object.values(elementToBeRemove)[0]);
    setArray([...updatedArray, element]);
    console.log(array);
  };

  return array.length !== 0 && (
    <div className="new-schema-container">
      {array.map((element, index) => (
        <div className="schema-dropdown-container" style={{ margin: '5px' }} key={index}>
          <span className="add-schema-bullet" style={{ backgroundColor: `${Object.values(element)[1]}` }}></span>
          <div className="add-schema-container">
            <div className="add-schema-segment-flex" onClick={() => setOpenIndex((prevIndex) => (prevIndex === index ? null : index))}>
              <span className="add-schema-text">
                {Object.values(element)[0]} {openIndex === index ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}
              </span>
            </div>
            {openIndex === index && <NewSchemaOption editNewSchema={editNewSchema} element={element} setOpenIndex={setOpenIndex} />}
          </div>
          <div className="dash-icon">
            <i className="fa fa-minus"></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewSchemaDropdown;
