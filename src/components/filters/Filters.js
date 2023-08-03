import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';

const Filters = ({setStatus, setGender, setSpecies, setPageNumber}) => {
  const clearFilters = () => {
    setStatus(""); 
    setGender(""); 
    setSpecies(""); 
    setPageNumber("");
    window.location.reload(false);
  }

  return (
    <div className="col-lg-3 col-12">
      <div className="text-center fw-bold fs-4 mb-2">
        Filter
      </div>
      <div onClick={clearFilters} style={{cursor:"pointer"}} className="text-center text-primary text-decoration-underline mb-4">
        Clear filters
      </div>
      <div className="accordion">
        <Status setPageNumber={setPageNumber} setStatus={setStatus} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setPageNumber={setPageNumber} setGender={setGender} />
      </div>
    </div>
  )
}

export default Filters;