import React, { useRef } from 'react';
import useClickOutside from '../../common/useClickOutside';
import { schemas } from '../../common/Schemas';
import '../SchemaOption/SchemaOption.scss';

const SchemaOption = ({ closeDropdown, setOpenDropdown, array, addObject }) => {
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, closeDropdown);

  return (
    <div className='dropdown-options-container' ref={dropdownRef}>
      {schemas.map((schema, index) => (
        <div
          key={index}
          className='dropdown-option-wrapper'
          onClick={() => {
            setOpenDropdown(false);
            if (array.length === 0 || !array.some((obj) => Object.values(obj)[0] === Object.values(schema)[0])) {
              addObject(schema);
            }
          }}
        >
          <span className='dropdown-option-bullet' style={{ backgroundColor: `${Object.values(schema)[1]}` }}></span>
          <span className='dropdown-option-text'>{Object.values(schema)[0]}</span>
        </div>
      ))}
    </div>
  );
};

export default SchemaOption;
