import React from 'react';

const FilterBtn = ({name, index, items, task, setPageNumber}) => {
  return (
    <div>
        <style jsx="true">
            {`  
                .form-check {
                    padding-left: unset !important;
                }
                .form-check-input:checked + label {
                    background-color: #0b5ed7;
                    color: #fff;
                }
                input[type="radio"] {
                    display: none;
                }
            `}
        </style>
        <div className="form-check">
            <input 
                onClick={() => {
                    setPageNumber(1);
                    task(items);
                }} 
                type="radio" 
                name={name} 
                id={`${name}-${index}`} 
                className="form-check-input" 
            />
            <label htmlFor={`${name}-${index}`} className="btn btn-outline-primary" style={{fontSize:"0.8rem"}}>
                {items}
            </label>
        </div>
    </div>
  )
}

export default FilterBtn;