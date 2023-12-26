import React from 'react';
import { schemas } from '../../common/Schemas';

const NewSchemaOption = ({ element, editNewSchema, setOpenIndex }) => (
  <div className="dropdown-options-container" style={{ zIndex: '1007' }}>
    {schemas
      .filter((schema) => Object.values(schema)[0] !== Object.values(element)[0])
      .map((ele, index) => (
        <div
          key={index}
          className="dropdown-option-wrapper"
          onClick={() => {
            setOpenIndex(null);
            editNewSchema(ele, element);
          }}
        >
          <span className="dropdown-option-bullet" style={{ backgroundColor: `${Object.values(ele)[1]}` }}></span>
          <span className="dropdown-option-text">{Object.values(ele)[0]}</span>
        </div>
      ))}
  </div>
);

export default NewSchemaOption;
