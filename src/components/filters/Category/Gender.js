import React from 'react';
import FilterBtn from '../FilterBtn';

const Gender = ({setPageNumber, setGender}) => {
    let genders = ["female", "male", "genderless", "unknown"];

  return (
    <div className="accordion-item" id="gender-accordion">
        <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Gender
            </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#gender-accordion">
            <div className="accordion-body d-flex flex-wrap gap-1">
                {genders.map((items, index) => (
                    <FilterBtn 
                        task={setGender} 
                        setPageNumber={setPageNumber}
                        key={index} 
                        name="gender" 
                        index={index} 
                        items={items} 
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Gender