import React, {useState, useEffect} from 'react';
import Cards from '../components/cards/Cards';
import InputGroup from '../components/filters/Category/InputGroup';

const Location = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { name, type, dimension } = info;
  
  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((item) => {
          return fetch(item).then((res) => res.json());
        })
      );
      setResults(a);
    })()
  }, [api]);

  return (
    <div className='container'>
      <div className="row mb-4">
        <h1 className="text-center text-primary">
          {name === "" ? "Unknown" : name}
        </h1>
        <h5 className="text-center">
          Dimension: {dimension === "" ? "Unknown" : dimension}
        </h5>
        <p className="text-center">
          Type: {type === "" ? "Unknown" : type}
        </p>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h5 className="text-center mb-2">
            Pick location
          </h5>
          <InputGroup name="Location" setID={setID} total={126} />
        </div>
        <div className="col-lg-9 col-12">
          <div className="row">
            <Cards page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location;