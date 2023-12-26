import React, { useState } from 'react';
import '../SchemaDropdown/SchemaDropdown.scss';
import SchemaOption from '../SchemaOption/SchemaOption';

const SchemaDropdown = ({ array, setAddSchema, addSchemaObject }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const popupOpen = () => setOpenDropdown(!openDropdown);
  const addObject = (object) => setAddSchema(object);
  const closeDropdown = () => setOpenDropdown(false);

  return (
    <>
      <div className='schema-dropdown-container'>
        <span className='add-schema-bullet'></span>
        <div className='add-schema-container'>
          <div className='add-schema-segment-flex' onClick={popupOpen}>
            <span className='add-schema-text'>
              Add schema to segment {openDropdown ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}
            </span>
          </div>
          {openDropdown && <SchemaOption closeDropdown={closeDropdown} array={array} addObject={addObject} setOpenDropdown={setOpenDropdown} />}
        </div>
        <div className='dash-icon'><i className="fa fa-minus"></i></div>
      </div>
      <span className='add-new-schema' onClick={addSchemaObject}>
        + <a href="#">Add new schema</a>
      </span>
    </>
  );
};

export default SchemaDropdown;
