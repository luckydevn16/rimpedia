import React, {useState, useEffect} from 'react';
import Cards from '../components/cards/Cards';
import InputGroup from '../components/filters/Category/InputGroup';

const Episodes = () => {
  let [id, setID] = useState(1);
  let [info, setInfo] = useState([]);
  let [results, setResults] = useState([]);
  let { name, air_date, episode } = info;
  
  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((item) => {
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
        <p className="text-center">
          {episode === "" ? "Unknown" : episode}
        </p>
        <h5 className="text-center">
          Air date: {air_date === "" ? "Unknown" : air_date}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          <h5 className="text-center mb-2">
            Pick Episode
          </h5>
          <InputGroup name="Episode" setID={setID} total={51} />
        </div>
        <div className="col-lg-9 col-12">
          <div className="row">
            <Cards  page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Episodes;