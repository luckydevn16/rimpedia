import React from 'react';
import FilterBtn from '../FilterBtn';

const Species = ({setPageNumber, setSpecies}) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];

  return (
    <div className="accordion-item" id="species-accordion">
        <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Species
            </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#species-accordion">
            <div className="accordion-body d-flex flex-wrap gap-1">
                {species.map((items, index) => (
                    <FilterBtn 
                        task={setSpecies} 
                        setPageNumber={setPageNumber}
                        key={index} 
                        name="species" 
                        index={index} 
                        items={items} 
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Species